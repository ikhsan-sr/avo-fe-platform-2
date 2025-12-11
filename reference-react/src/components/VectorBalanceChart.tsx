import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';
import { Award, TrendingUp } from 'lucide-react';

interface VectorBalanceChartProps {
  scores: { opt: number; man: number; gen: number };
}

export function VectorBalanceChart({ scores }: VectorBalanceChartProps) {
  const data = [
    { subject: 'Identity', value: scores.opt },
    { subject: 'Content', value: scores.man },
    { subject: 'Distrib.', value: scores.man - 5 },
    { subject: 'Trust', value: scores.gen },
    { subject: 'Speed', value: scores.opt - 5 },
    { subject: 'Engage.', value: scores.gen - 10 },
  ];

  // Find strongest and weakest areas
  const strongest = data.reduce((max, item) => item.value > max.value ? item : max);
  const weakest = data.reduce((min, item) => item.value < min.value ? item : min);

  return (
    <div className="glass-panel rounded-2xl p-6 flex-1">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xs font-mono dark:text-white light:text-[#0C182C] tracking-wider uppercase">Brand Strength Overview</h3>
      </div>
      <p className="text-[10px] dark:text-[#A3A9B7] light:text-[#5B6B8C] mb-4 leading-relaxed">
        This shows how balanced your brand is across key areas
      </p>
      <div className="h-64 w-full flex items-center justify-center" style={{ minHeight: '256px' }}>
        <ResponsiveContainer width="100%" height="100%" minHeight={256}>
          <RadarChart data={data}>
            <PolarGrid stroke="rgba(255,255,255,0.1)" />
            <PolarAngleAxis 
              dataKey="subject" 
              stroke="#FCFCFC"
              tick={{ fill: '#FCFCFC', fontSize: 10 }}
            />
            <PolarRadiusAxis 
              angle={90} 
              domain={[0, 100]}
              stroke="rgba(255,255,255,0.1)"
              tick={false}
            />
            <Radar 
              name="Vectors" 
              dataKey="value" 
              stroke="#F8B400" 
              fill="#F8B400" 
              fillOpacity={0.3}
              strokeWidth={2}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-6 space-y-3">
        <div className="flex items-start gap-2 p-2 rounded bg-[#00C2B8]/10 border border-[#00C2B8]/20">
          <Award className="w-3 h-3 text-[#00C2B8] mt-0.5 shrink-0" />
          <div className="flex-1">
            <p className="text-[10px] text-[#00C2B8]">Strongest: {strongest.subject}</p>
          </div>
        </div>
        <div className="flex items-start gap-2 p-2 rounded bg-[#F8B400]/10 border border-[#F8B400]/20">
          <TrendingUp className="w-3 h-3 text-[#F8B400] mt-0.5 shrink-0" />
          <div className="flex-1">
            <p className="text-[10px] text-[#F8B400]">Opportunity: {weakest.subject}</p>
          </div>
        </div>
      </div>
    </div>
  );
}