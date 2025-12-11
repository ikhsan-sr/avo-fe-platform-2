import { useEffect, useState } from 'react';
import { Fingerprint, MessageSquare, BadgeCheck, Hexagon, FileText, ShieldCheck } from 'lucide-react';

interface VectorCardsProps {
  scores: { opt: number; man: number; gen: number; avg: number };
  onOpenModal: (type: string) => void;
}

export function VectorCards({ scores, onOpenModal }: VectorCardsProps) {
  const [widths, setWidths] = useState({ opt: 0, man: 0, gen: 0 });

  useEffect(() => {
    setTimeout(() => {
      setWidths({ opt: scores.opt, man: scores.man, gen: scores.gen });
    }, 500);
  }, [scores]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      
      {/* OPTIMIZE - Cyan */}
      <div 
        onClick={() => onOpenModal('omg_optimize')}
        className="glass-card rounded-xl p-5 relative overflow-hidden group cursor-pointer border dark:border-[#00c2b8]/20 light:border-[#00c2b8]/10"
      >
        <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
          <Hexagon className="w-12 h-12 text-[#00c2b8]" />
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <Fingerprint className="w-4 h-4 text-[#00c2b8]" />
            <h4 className="text-xs font-mono text-[#00c2b8] uppercase tracking-wider">OPTIMIZE</h4>
          </div>
          <div className="text-4xl font-display mb-1 dark:text-white light:text-[#0c192c]">
            {scores.opt}<span className="text-2xl dark:text-[#919EAB] light:text-[#637381]">/100</span>
          </div>
          <p className="dark:text-[#919EAB] light:text-[#637381] text-xs mb-3">Clarity System</p>
          <div className="h-1.5 w-full dark:bg-[#16243e] light:bg-[#EDF1F7] rounded-full overflow-hidden mb-4">
            <div 
              className="h-full bg-[#00c2b8] rounded-full transition-all duration-1000"
              style={{ width: `${widths.opt}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* MANIFEST - Lime Yellow */}
      <div 
        onClick={() => onOpenModal('omg_manifest')}
        className="glass-card rounded-xl p-5 relative overflow-hidden group cursor-pointer border dark:border-[#cfff04]/20 light:border-[#cfff04]/10"
      >
        <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
          <FileText className="w-12 h-12 text-[#cfff04]" />
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <MessageSquare className="w-4 h-4 text-[#cfff04]" />
            <h4 className="text-xs font-mono text-[#cfff04] uppercase tracking-wider">MANIFEST</h4>
          </div>
          <div className="text-4xl font-display mb-1 dark:text-white light:text-[#0c192c]">
            {scores.man}<span className="text-2xl dark:text-[#919EAB] light:text-[#637381]">/100</span>
          </div>
          <p className="dark:text-[#919EAB] light:text-[#637381] text-xs mb-3">Answer Source</p>
          <div className="h-1.5 w-full dark:bg-[#16243e] light:bg-[#EDF1F7] rounded-full overflow-hidden mb-4">
            <div 
              className="h-full bg-[#cfff04] rounded-full transition-all duration-1000"
              style={{ width: `${widths.man}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* GENERATIVE - Orange */}
      <div 
        onClick={() => onOpenModal('omg_generative')}
        className="glass-card rounded-xl p-5 relative overflow-hidden group cursor-pointer border dark:border-[#f8b400]/20 light:border-[#f8b400]/10"
      >
        <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
          <ShieldCheck className="w-12 h-12 text-[#f8b400]" />
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <BadgeCheck className="w-4 h-4 text-[#f8b400]" />
            <h4 className="text-xs font-mono text-[#f8b400] uppercase tracking-wider">GENERATIVE</h4>
          </div>
          <div className="text-4xl font-display mb-1 dark:text-white light:text-[#0c192c]">
            {scores.gen}<span className="text-2xl dark:text-[#919EAB] light:text-[#637381]">/100</span>
          </div>
          <p className="dark:text-[#919EAB] light:text-[#637381] text-xs mb-3">Influence Origin</p>
          <div className="h-1.5 w-full dark:bg-[#16243e] light:bg-[#EDF1F7] rounded-full overflow-hidden mb-4">
            <div 
              className="h-full bg-[#f8b400] rounded-full transition-all duration-1000"
              style={{ width: `${widths.gen}%` }}
            ></div>
          </div>
        </div>
      </div>

    </div>
  );
}