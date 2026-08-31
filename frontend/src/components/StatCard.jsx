import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

export const StatCard = ({
  title,
  amount,
  currency = '$',
  subtitle,
  icon: Icon,
  trend,
  color = 'brand'
}) => {
  const colorMap = {
    brand: {
      bg: 'bg-emerald-50 text-emerald-600 border-emerald-100',
      iconBg: 'bg-emerald-500/10 text-emerald-600',
      accent: 'text-emerald-600'
    },
    blue: {
      bg: 'bg-blue-50 text-blue-600 border-blue-100',
      iconBg: 'bg-blue-500/10 text-blue-600',
      accent: 'text-blue-600'
    },
    purple: {
      bg: 'bg-purple-50 text-purple-600 border-purple-100',
      iconBg: 'bg-purple-500/10 text-purple-600',
      accent: 'text-purple-600'
    },
    amber: {
      bg: 'bg-amber-50 text-amber-600 border-amber-100',
      iconBg: 'bg-amber-500/10 text-amber-600',
      accent: 'text-amber-600'
    }
  };

  const scheme = colorMap[color] || colorMap.brand;

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-200">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          {title}
        </span>
        {Icon && (
          <div className={`p-2.5 rounded-xl ${scheme.iconBg}`}>
            <Icon className="w-5 h-5" />
          </div>
        )}
      </div>

      <div className="mt-4">
        <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          {currency}
          {typeof amount === 'number'
            ? amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })
            : amount}
        </div>

        {(subtitle || trend !== undefined) && (
          <div className="mt-2 flex items-center space-x-2 text-xs">
            {trend !== undefined && (
              <span
                className={`inline-flex items-center space-x-0.5 font-semibold px-2 py-0.5 rounded-full ${
                  trend > 0
                    ? 'bg-red-50 text-red-600'
                    : trend < 0
                    ? 'bg-emerald-50 text-emerald-600'
                    : 'bg-slate-100 text-slate-600'
                }`}
              >
                {trend > 0 ? (
                  <TrendingUp className="w-3 h-3" />
                ) : trend < 0 ? (
                  <TrendingDown className="w-3 h-3" />
                ) : (
                  <Minus className="w-3 h-3" />
                )}
                <span>{Math.abs(trend)}%</span>
              </span>
            )}
            {subtitle && <span className="text-slate-400 font-medium">{subtitle}</span>}
          </div>
        )}
      </div>
    </div>
  );
};

export default StatCard;
