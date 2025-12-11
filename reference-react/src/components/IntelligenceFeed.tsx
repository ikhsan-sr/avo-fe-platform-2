import { Maximize2, AlertTriangle, TrendingUp, Zap } from 'lucide-react';

export function IntelligenceFeed({ onOpenModal }: { onOpenModal: (type: string) => void }) {
  return (
    <div className="glass-panel rounded-2xl p-6 flex-1 flex flex-col overflow-hidden min-h-[300px]">
      <div className="flex items-center justify-between mb-6 shrink-0">
        <h3 className="text-xs font-mono text-[#F8B400] mb-0 tracking-wider uppercase">Important Updates</h3>
        <span className="text-[10px] bg-[#F8B400]/10 text-[#F8B400] px-2 py-0.5 rounded border border-[#F8B400]/20">3 ITEMS</span>
      </div>
      <div className="space-y-4 overflow-y-auto no-scrollbar pr-2 flex-1">
        
        {/* Critical Alert */}
        <div 
          onClick={() => onOpenModal('critical')}
          className="p-4 rounded-lg border border-red-500/30 bg-red-500/5 hover:bg-red-500/10 transition-colors cursor-pointer group"
        >
          <div className="flex justify-between items-start mb-2">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-red-400" />
              <span className="text-xs font-mono text-red-400">IMPORTANT ISSUE</span>
            </div>
            <Maximize2 className="w-4 h-4 text-red-400 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <p className="text-sm leading-snug mb-2 dark:text-white light:text-[#0C182C]">Some pages are sending unclear signals about your brand identity</p>
          <p className="text-xs dark:text-[#A3A9B7] light:text-[#5B6B8C] mb-3">This may reduce how often your brand appears in AI answers</p>
          <button className="text-xs text-red-400 hover:text-red-300 underline">Fix This Issue →</button>
        </div>

        {/* Opportunity */}
        <div 
          onClick={() => onOpenModal('opportunity')}
          className="p-4 rounded-lg border border-[#F8B400]/30 bg-[#F8B400]/5 hover:bg-[#F8B400]/10 transition-colors cursor-pointer group"
        >
          <div className="flex justify-between items-start mb-2">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-[#F8B400]" />
              <span className="text-xs font-mono text-[#F8B400]">OPPORTUNITY</span>
            </div>
            <Maximize2 className="w-4 h-4 text-[#F8B400] opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <p className="text-sm leading-snug mb-2 dark:text-white light:text-[#0C182C]">Your API documentation could appear at the top of search results</p>
          <p className="text-xs dark:text-[#A3A9B7] light:text-[#5B6B8C] mb-3">This would increase visibility and bring more qualified traffic</p>
          <button className="text-xs text-[#F8B400] hover:text-[#F8B400]/80 underline">Take Advantage →</button>
        </div>

        {/* Optimization */}
        <div 
          onClick={() => onOpenModal('optimization')}
          className="p-4 rounded-lg border border-[#00C2B8]/30 bg-[#00C2B8]/5 hover:bg-[#00C2B8]/10 transition-colors cursor-pointer group"
        >
          <div className="flex justify-between items-start mb-2">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#00C2B8]" />
              <span className="text-xs font-mono text-[#00C2B8]">OPTIMIZATION</span>
            </div>
            <Maximize2 className="w-4 h-4 text-[#00C2B8] opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <p className="text-sm leading-snug mb-2 dark:text-white light:text-[#0C182C]">Your page speed could be faster on mobile devices</p>
          <p className="text-xs dark:text-[#A3A9B7] light:text-[#5B6B8C] mb-3">Optimizing images will improve user experience and search rankings</p>
          <button className="text-xs text-[#00C2B8] hover:text-[#00C2B8]/80 underline">Improve This →</button>
        </div>
      </div>
    </div>
  );
}