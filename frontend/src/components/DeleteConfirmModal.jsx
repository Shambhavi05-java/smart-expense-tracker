import React from 'react';
import { AlertTriangle, X } from 'lucide-react';

export const DeleteConfirmModal = ({ isOpen, onClose, onConfirm, title, loading }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-100 transform transition-all">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center space-x-2 text-red-600">
            <AlertTriangle className="w-5 h-5" />
            <h3 className="font-bold text-slate-900">Confirm Deletion</h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="py-4">
          <p className="text-sm text-slate-600">
            Are you sure you want to delete <span className="font-semibold text-slate-800">{title || 'this expense'}</span>? This action cannot be undone.
          </p>
        </div>

        <div className="flex items-center justify-end space-x-3 pt-3 border-t border-slate-100">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl border border-slate-200 text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            disabled={loading}
            onClick={onConfirm}
            className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white text-sm font-semibold shadow-md shadow-red-500/20 transition-colors"
          >
            {loading ? 'Deleting...' : 'Delete Expense'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
