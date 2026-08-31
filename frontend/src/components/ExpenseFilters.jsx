import React, { useState } from 'react';
import { Search, Filter, RotateCcw, ChevronDown, ChevronUp } from 'lucide-react';

const CATEGORIES = [
  'All',
  'Food',
  'Travel',
  'Shopping',
  'Bills',
  'Education',
  'Health',
  'Other'
];

export const ExpenseFilters = ({ filters, onFilterChange, onReset }) => {
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleInputChange = (field, value) => {
    onFilterChange({ ...filters, [field]: value, page: 1 });
  };

  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm space-y-4">
      {/* Primary Row: Search & Category */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
        {/* Search Input */}
        <div className="md:col-span-5 relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            placeholder="Search by title or description..."
            value={filters.search || ''}
            onChange={(e) => handleInputChange('search', e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-brand-500 focus:bg-white focus:outline-none transition-all placeholder:text-slate-400"
          />
        </div>

        {/* Category Filter */}
        <div className="md:col-span-4">
          <select
            value={filters.category || 'All'}
            onChange={(e) => handleInputChange('category', e.target.value)}
            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-brand-500 focus:bg-white focus:outline-none transition-all text-slate-700"
          >
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                Category: {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Action Controls */}
        <div className="md:col-span-3 flex items-center space-x-2">
          <button
            type="button"
            onClick={() => setShowAdvanced(!showAdvanced)}
            className={`flex-1 inline-flex items-center justify-center space-x-1.5 px-3 py-2.5 rounded-xl border text-sm font-medium transition-all ${
              showAdvanced
                ? 'bg-brand-50 border-brand-200 text-brand-700'
                : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Filter className="w-4 h-4" />
            <span>Filters</span>
            {showAdvanced ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>

          <button
            type="button"
            onClick={onReset}
            title="Reset Filters"
            className="p-2.5 rounded-xl border border-slate-200 text-slate-500 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Advanced Filters Expandable Drawer */}
      {showAdvanced && (
        <div className="pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 animate-fadeIn">
          {/* Start Date */}
          <div>
            <label className="block text-[11px] uppercase font-semibold text-slate-400 mb-1">
              Start Date
            </label>
            <input
              type="date"
              value={filters.startDate || ''}
              onChange={(e) => handleInputChange('startDate', e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-brand-500 focus:bg-white focus:outline-none"
            />
          </div>

          {/* End Date */}
          <div>
            <label className="block text-[11px] uppercase font-semibold text-slate-400 mb-1">
              End Date
            </label>
            <input
              type="date"
              value={filters.endDate || ''}
              onChange={(e) => handleInputChange('endDate', e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-brand-500 focus:bg-white focus:outline-none"
            />
          </div>

          {/* Min & Max Amount */}
          <div>
            <label className="block text-[11px] uppercase font-semibold text-slate-400 mb-1">
              Amount Range
            </label>
            <div className="flex items-center space-x-1.5">
              <input
                type="number"
                placeholder="Min"
                min="0"
                value={filters.minAmount || ''}
                onChange={(e) => handleInputChange('minAmount', e.target.value)}
                className="w-1/2 px-2.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-brand-500 focus:bg-white focus:outline-none"
              />
              <span className="text-slate-400 text-xs">-</span>
              <input
                type="number"
                placeholder="Max"
                min="0"
                value={filters.maxAmount || ''}
                onChange={(e) => handleInputChange('maxAmount', e.target.value)}
                className="w-1/2 px-2.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-brand-500 focus:bg-white focus:outline-none"
              />
            </div>
          </div>

          {/* Sort By */}
          <div>
            <label className="block text-[11px] uppercase font-semibold text-slate-400 mb-1">
              Sort By
            </label>
            <div className="flex items-center space-x-1.5">
              <select
                value={filters.sortBy || 'date'}
                onChange={(e) => handleInputChange('sortBy', e.target.value)}
                className="w-2/3 px-2.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-brand-500 focus:bg-white focus:outline-none"
              >
                <option value="date">Date</option>
                <option value="amount">Amount</option>
                <option value="title">Title</option>
              </select>
              <select
                value={filters.order || 'desc'}
                onChange={(e) => handleInputChange('order', e.target.value)}
                className="w-1/3 px-2 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-brand-500 focus:bg-white focus:outline-none"
              >
                <option value="desc">Desc</option>
                <option value="asc">Asc</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpenseFilters;
