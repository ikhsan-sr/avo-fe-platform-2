import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Area, AreaChart, Tooltip } from 'recharts';
import { TrendingUp, TrendingDown, MinusCircle, Info } from 'lucide-react';
import { useState } from 'react';

// Custom tooltip component - defined outside to avoid recreation during render
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-panel rounded-lg p-3 border dark:border-white/10 light:border-black/10">
        <p className="text-xs dark:text-white light:text-[#0C182C] font-mono">
          Score: {payload[0].value}
        </p>
        <p className="text-[10px] dark:text-[#A3A9B7] light:text-[#5B6B8C] mt-1">
          {payload[0].payload.month}
        </p>
      </div>
    );
  }
  return null;
};

export function AuthorityChart({ avgScore }: { avgScore: number }) {
  const [showCoachmark, setShowCoachmark] = useState(false);
  
  const data = [
    { month: 'M1', score: avgScore - 20 },
    { month: 'M2', score: avgScore - 15 },
    { month: 'M3', score: avgScore - 10 },
    { month: 'M4', score: avgScore - 5 },
    { month: 'M5', score: avgScore - 2 },
    { month: 'M6', score: avgScore },
  ];

  // Calculate trend
  const firstScore = data[0].score;
  const lastScore = data[data.length - 1].score;
  const trendDirection = lastScore > firstScore ? 'improving' : lastScore < firstScore ? 'declining' : 'stable';
  const trendPercentage = Math.abs(((lastScore - firstScore) / firstScore) * 100).toFixed(1);

  return (
    <div className="glass-panel rounded-2xl p-6">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xs font-mono text-[#00D4FF] tracking-wider uppercase">Brand Trust Growth Over Time</h3>
        <span className="text-[10px] dark:text-[#919EAB] light:text-[#637381]">6 Months</span>
      </div>
      
      <p className="text-xs dark:text-[#919EAB] light:text-[#637381] mb-4 leading-relaxed flex items-center gap-1">
        {trendDirection === 'improving' ? (
          <TrendingUp className="w-3 h-3 text-[#00E096]" />
        ) : trendDirection === 'declining' ? (
          <TrendingDown className="w-3 h-3 text-[#FF4757]" />
        ) : (
          <MinusCircle className="w-3 h-3 text-[#FFB800]" />
        )}
        Your brand trust is {trendDirection === 'improving' ? 'growing' : trendDirection === 'declining' ? 'declining' : 'stable'} over the past six months
      </p>
      
      {/* Chart Container with Hover Coachmark */}
      <div 
        className="relative h-48 w-full"
        onMouseEnter={() => setShowCoachmark(true)}
        onMouseLeave={() => setShowCoachmark(false)}
      >
        {/* Coachmark Tooltip */}
        {showCoachmark && (
          <div className="absolute top-1 right-1 z-10 glass-panel rounded-lg p-2 border dark:border-white/10 light:border-black/10 max-w-[160px] animate-fade-in">
            <div className="flex items-start gap-1.5">
              <Info className="w-3 h-3 text-[#00D4FF] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-[10px] dark:text-white light:text-[#0C182C] font-medium mb-0.5">
                  {trendDirection === 'improving' ? '📈 Improving' : trendDirection === 'declining' ? '📉 Declining' : '📊 Stable'}
                </p>
                <p className="text-[9px] dark:text-[#CFD1D4] light:text-[#5B6B8C] leading-tight">
                  {trendDirection === 'improving' 
                    ? `+${trendPercentage}% growth over 6 months`
                    : trendDirection === 'declining'
                    ? `-${trendPercentage}% decline over 6 months`
                    : 'Stable trend'}
                </p>
              </div>
            </div>
          </div>
        )}
        
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
            <defs>
              <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={trendDirection === 'improving' ? '#00D4FF' : trendDirection === 'declining' ? '#FF4757' : '#FFB800'} stopOpacity={0.3}/>
                <stop offset="95%" stopColor={trendDirection === 'improving' ? '#00D4FF' : trendDirection === 'declining' ? '#FF4757' : '#FFB800'} stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="month" 
              stroke="#919EAB"
              fontSize={10}
              axisLine={false}
              tickLine={false}
            />
            <YAxis 
              stroke="#919EAB"
              fontSize={10}
              axisLine={false}
              tickLine={false}
              domain={[30, 100]}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#00D4FF', strokeWidth: 1, strokeDasharray: '5 5' }} />
            <Area 
              type="monotone" 
              dataKey="score" 
              stroke={trendDirection === 'improving' ? '#00D4FF' : trendDirection === 'declining' ? '#FF4757' : '#FFB800'}
              strokeWidth={2}
              fill="url(#colorScore)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 flex justify-between text-xs border-t dark:border-white/5 light:border-black/5 pt-3">
        <span className="dark:text-[#919EAB] light:text-[#637381]">Growth Rate</span>
        <span className={`font-mono ${trendDirection === 'improving' ? 'text-[#00E096]' : trendDirection === 'declining' ? 'text-[#FF4757]' : 'text-[#FFB800]'}`}>
          {trendDirection === 'improving' ? '+' : trendDirection === 'declining' ? '-' : ''}{trendPercentage}% {trendDirection === 'improving' ? 'improvement' : trendDirection === 'declining' ? 'decline' : 'change'}
        </span>
      </div>
    </div>
  );
}