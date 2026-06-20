import React, { useState } from 'react';
import { Calendar, Users, MapPin, Clock, Filter, Check } from 'lucide-react';
import { ClassScheduleItem, GymTheme } from '../types';
import { SCHEDULES } from '../data';

interface ScheduleProps {
  config: GymTheme;
  onOpenTrial: (prefilledMessage?: string) => void;
}

export default function Schedule({ config, onOpenTrial }: ScheduleProps) {
  const [selectedDay, setSelectedDay] = useState<ClassScheduleItem['day']>('Monday');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const days: ClassScheduleItem['day'][] = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
  ];

  const categories = ['All', 'Strength', 'HIIT', 'CrossFit', 'Yoga', 'Boxing', 'Group'];

  // Filter schedules based on Day AND category selection
  const filteredSchedules = SCHEDULES.filter((item) => {
    const dayMatches = item.day === selectedDay;
    const categoryMatches = selectedCategory === 'All' || item.category === selectedCategory;
    return dayMatches && categoryMatches;
  });

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'Strength': return 'text-red-400 bg-red-950/40 border-red-900/50';
      case 'HIIT': return 'text-amber-400 bg-amber-950/40 border-amber-900/50';
      case 'CrossFit': return 'text-lime-400 bg-lime-950/40 border-lime-900/50';
      case 'Yoga': return 'text-cyan-400 bg-cyan-950/40 border-cyan-900/50';
      case 'Boxing': return 'text-fuchsia-400 bg-fuchsia-950/40 border-fuchsia-900/50';
      default: return 'text-neutral-400 bg-neutral-900 border-neutral-800';
    }
  };

  return (
    <section id="schedule" className="py-24 bg-neutral-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2">
            <span className="h-px w-6" style={{ backgroundColor: config.accentHex }}></span>
            <span className="text-xs font-mono font-bold uppercase tracking-widest" style={{ color: config.accentHex }}>
              PRACTICAL INTERACTIVE TIMETABLE
            </span>
            <span className="h-px w-6" style={{ backgroundColor: config.accentHex }}></span>
          </div>

          <h2 className="font-display text-4xl sm:text-5.5xl font-black tracking-tight uppercase">
            WEEKLY POWER{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-500">
              CLASS TIMETABLE
            </span>
          </h2>

          <p className="text-neutral-400 text-sm max-w-xl mx-auto">
            Review our daily calendar structure. Toggle day filters and training specializations to explore our tactical curriculum blocks.
          </p>
        </div>

        {/* Dual Filter Controls Box */}
        <div className="space-y-6 m-3 mb-10 p-5 bg-neutral-900/40 rounded-2xl border border-neutral-900">
          
          {/* Day Tabs */}
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#22c55e] ml-1 flex items-center gap-1.5" style={{ color: config.accentHex }}>
              <Calendar className="w-3.5 h-3.5" />
              1. Choose Training Day
            </span>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {days.map((day) => {
                const isSelected = selectedDay === day;
                return (
                  <button
                    id={`btn-sched-day-${day.toLowerCase()}`}
                    key={day}
                    onClick={() => setSelectedDay(day)}
                    className={`flex-1 min-w-[100px] text-center py-2.5 px-3 rounded text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer font-mono border ${
                      isSelected
                        ? 'text-black bg-white border-white scale-102 shadow-lg font-bold'
                        : 'text-neutral-400 bg-neutral-950 border-neutral-900 hover:text-white hover:border-neutral-800'
                    }`}
                  >
                    {day.substring(0, 3)}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Specialization Filter Buttons */}
          <div className="space-y-2 pt-2 border-t border-neutral-900/60">
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 ml-1 flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5" />
              2. Filter by Discipline Category
            </span>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    id={`btn-sched-cat-${cat.toLowerCase()}`}
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`py-1.5 px-3.5 rounded text-[11px] font-bold uppercase tracking-wider transition cursor-pointer border ${
                      isSelected
                        ? 'text-black font-extrabold border-white'
                        : 'text-neutral-400 bg-neutral-950/50 border-neutral-900 hover:text-white'
                    }`}
                    style={{
                      backgroundColor: isSelected ? config.accentHex : 'transparent',
                      borderColor: isSelected ? config.accentHex : 'rgba(255, 255, 255, 0.05)'
                    }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Timetable schedule result entries */}
        <div id="timetable-stage" className="space-y-4">
          {filteredSchedules.length > 0 ? (
            <div className="grid gap-3">
              {filteredSchedules.map((item) => {
                const percentFull = Math.round((item.slotsTaken / item.capacity) * 100);
                const isFull = item.slotsTaken >= item.capacity;

                return (
                  <div
                    id={`timetable-row-${item.id}`}
                    key={item.id}
                    className="group bg-neutral-950 border border-neutral-900 hover:border-neutral-800 p-4 sm:p-5 rounded-xl transition duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    
                    {/* Time & Class Name info */}
                    <div className="flex items-start sm:items-center gap-4">
                      
                      {/* Time Block */}
                      <div className="p-3 bg-neutral-900 border border-neutral-850 rounded-lg text-center shrink-0 min-w-[85px]">
                        <Clock className="w-3.5 h-3.5 text-neutral-500 mx-auto mb-1" />
                        <span className="text-[11px] font-mono font-bold tracking-wide text-white">
                          {item.time}
                        </span>
                      </div>

                      {/* Info Block */}
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className="font-display text-lg sm:text-xl font-bold tracking-wide text-white uppercase group-hover:text-white">
                            {item.className}
                          </h4>
                          <span className={`text-[9px] font-mono font-semibold uppercase tracking-wider py-0.5 px-2 rounded-full border ${getCategoryColor(item.category)}`}>
                            {item.category}
                          </span>
                        </div>

                        {/* Location Details and Instructors */}
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-neutral-400">
                          <span className="flex items-center gap-1">
                            <Users className="w-3.5 h-3.5 text-neutral-500" />
                            Coach: <strong className="text-neutral-200">{item.trainer}</strong>
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                            {item.room}
                          </span>
                        </div>
                      </div>

                    </div>

                    {/* Booking Stats and CTA */}
                    <div className="flex items-center justify-between sm:justify-end gap-6 pt-3 sm:pt-0 border-t sm:border-transparent border-neutral-900">
                      
                      {/* Slots fullness status line */}
                      <div className="space-y-1 font-mono text-left sm:text-right shrink-0">
                        <div className="text-[10px] text-neutral-450 uppercase tracking-widest">
                          {isFull ? 'STAGE FULL' : `${item.capacity - item.slotsTaken} Slots Remaining`}
                        </div>
                        <div className="w-28 bg-neutral-900 h-1.5 rounded-full overflow-hidden">
                          <div
                            className="bg-neutral-500 h-full rounded-full transition-all duration-300"
                            style={{
                              width: `${percentFull}%`,
                              backgroundColor: isFull ? '#ef4444' : config.accentHex
                            }}
                          />
                        </div>
                      </div>

                      {/* Direct action button */}
                      <button
                        id={`btn-time-row-book-${item.id}`}
                        onClick={() => onOpenTrial(`Hi! I'd love to claim my free trial pass and attend the ${item.className} session on ${item.day} at ${item.time}.`)}
                        disabled={isFull}
                        className={`py-2 px-4 rounded text-xs font-mono uppercase tracking-widest font-bold transition duration-200 shrink-0 cursor-pointer ${
                          isFull
                            ? 'bg-neutral-900 text-neutral-600 border border-neutral-900 cursor-not-allowed'
                            : 'bg-neutral-100 text-black hover:bg-white cursor-pointer'
                        }`}
                        style={{
                          backgroundColor: !isFull ? config.accentHex : undefined
                        }}
                      >
                        {isFull ? 'FULL' : 'BOOK PASS'}
                      </button>

                    </div>

                  </div>
                );
              })}
            </div>
          ) : (
            <div className="p-12 text-center bg-neutral-950 border border-dashed border-neutral-900 rounded-xl">
              <Calendar className="w-8 h-8 text-neutral-600 mx-auto mb-3" />
              <p className="text-sm text-neutral-400">No classes found matching the selected filters for {selectedDay}.</p>
              <button
                id="reset-timetable-filt-btn"
                onClick={() => {
                  setSelectedCategory('All');
                }}
                className="text-xs uppercase font-mono tracking-widest mt-4 hover:underline"
                style={{ color: config.accentHex }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
