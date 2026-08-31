import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from 'recharts';

const CustomTooltip = ({ active, payload, currency = '$' }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-slate-900 text-white px-3 py-2 rounded-xl text-xs shadow-xl border border-slate-800">
        <p className="font-semibold text-slate-200">{data.name}</p>
        <p className="font-bold text-sm text-emerald-400 mt-0.5">
          {currency}
          {data.total.toLocaleString(undefined, { minimumFractionDigits: 2 })}
        </p>
        <p className="text-slate-400 text-[11px] mt-0.5">
          {data.count} {data.count === 1 ? 'transaction' : 'transactions'}
        </p>
      </div>
    );
  }
  return null;
};

export const MonthlyBarChart = ({ data = [], currency = '$' }) => {
  if (!data || data.length === 0) {
    return (
      <div className="h-64 flex flex-col items-center justify-center text-slate-400 text-sm">
        <p>No historical monthly data available</p>
      </div>
    );
  }

  return (
    <div className="w-full h-72">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 10, right: 10, left: -15, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
          <XAxis
            dataKey="name"
            stroke="#94a3b8"
            fontSize={12}
            tickLine={false}
            axisLine={{ stroke: '#e2e8f0' }}
          />
          <YAxis
            stroke="#94a3b8"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${currency}${value >= 1000 ? `${(value / 1000).toFixed(0)}k` : value}`}
          />
          <Tooltip content={<CustomTooltip currency={currency} />} />
          <Bar
            dataKey="total"
            fill="#16a34a"
            radius={[6, 6, 0, 0]}
            maxBarSize={48}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyBarChart;
