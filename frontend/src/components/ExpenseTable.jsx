import React from 'react';
import { Edit2, Trash2, Calendar, Tag, CreditCard, ChevronLeft, ChevronRight, Inbox } from 'lucide-react';
import { format } from 'date-fns';

const CATEGORY_BADGES = {
  Food: 'bg-orange-50 text-orange-700 border-orange-200',
  Travel: 'bg-sky-50 text-sky-700 border-sky-200',
  Shopping: 'bg-pink-50 text-pink-700 border-pink-200',
  Bills: 'bg-amber-50 text-amber-700 border-amber-200',
  Education: 'bg-purple-50 text-purple-700 border-purple-200',
  Health: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  Other: 'bg-slate-100 text-slate-700 border-slate-200'
};

export const ExpenseTable = ({
  expenses = [],
  currency = '$',
  onEdit,
  onDelete,
  currentPage = 1,
  totalPages = 1,
  totalExpenses = 0,
  onPageChange
}) => {
  if (!expenses || expenses.length === 0) {
    return (
      <div className="bg-white rounded-2xl p-12 border border-slate-100 shadow-sm text-center">
        <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center mx-auto text-slate-400 mb-4">
          <Inbox className="w-8 h-8" />
        </div>
        <h3 className="text-base font-bold text-slate-800">No Expenses Found</h3>
        <p className="text-sm text-slate-500 max-w-sm mx-auto mt-1">
          No records match your selected criteria or no expenses have been recorded yet.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col">
      {/* Table Container */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/75 border-b border-slate-100 text-[11px] uppercase tracking-wider font-semibold text-slate-500">
              <th className="py-3.5 px-5">Expense / Title</th>
              <th className="py-3.5 px-4">Category</th>
              <th className="py-3.5 px-4">Date</th>
              <th className="py-3.5 px-4">Payment</th>
              <th className="py-3.5 px-4 text-right">Amount</th>
              <th className="py-3.5 px-5 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm">
            {expenses.map((expense) => {
              const badgeStyle =
                CATEGORY_BADGES[expense.category] || CATEGORY_BADGES.Other;

              let formattedDate = '';
              try {
                formattedDate = format(new Date(expense.date), 'MMM dd, yyyy');
              } catch (e) {
                formattedDate = expense.date;
              }

              return (
                <tr
                  key={expense._id}
                  className="hover:bg-slate-50/50 transition-colors group"
                >
                  {/* Title & Description */}
                  <td className="py-4 px-5">
                    <div className="font-semibold text-slate-900 leading-tight">
                      {expense.title}
                    </div>
                    {expense.description && (
                      <div className="text-xs text-slate-400 mt-0.5 truncate max-w-xs sm:max-w-md">
                        {expense.description}
                      </div>
                    )}
                  </td>

                  {/* Category */}
                  <td className="py-4 px-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${badgeStyle}`}
                    >
                      {expense.category}
                    </span>
                  </td>

                  {/* Date */}
                  <td className="py-4 px-4 whitespace-nowrap text-slate-600 text-xs font-medium">
                    <span className="inline-flex items-center space-x-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{formattedDate}</span>
                    </span>
                  </td>

                  {/* Payment Method */}
                  <td className="py-4 px-4 whitespace-nowrap text-slate-600 text-xs">
                    <span className="inline-flex items-center space-x-1.5 text-slate-600 bg-slate-50 px-2 py-0.5 rounded-lg border border-slate-200/60">
                      <CreditCard className="w-3.5 h-3.5 text-slate-400" />
                      <span>{expense.paymentMethod || 'Credit Card'}</span>
                    </span>
                  </td>

                  {/* Amount */}
                  <td className="py-4 px-4 whitespace-nowrap text-right">
                    <span className="font-bold text-slate-900 text-sm">
                      {currency}
                      {expense.amount.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                      })}
                    </span>
                  </td>

                  {/* Action Buttons */}
                  <td className="py-4 px-5 whitespace-nowrap text-right">
                    <div className="flex items-center justify-end space-x-1">
                      <button
                        onClick={() => onEdit(expense)}
                        title="Edit Expense"
                        className="p-1.5 text-slate-400 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-colors"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => onDelete(expense)}
                        title="Delete Expense"
                        className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination Bar */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between px-5 py-3.5 bg-slate-50/75 border-t border-slate-100 text-xs text-slate-500">
          <div>
            Showing Page <span className="font-semibold text-slate-800">{currentPage}</span> of{' '}
            <span className="font-semibold text-slate-800">{totalPages}</span> ({totalExpenses} total records)
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage <= 1}
              className="p-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage >= totalPages}
              className="p-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpenseTable;
