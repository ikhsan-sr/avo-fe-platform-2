import { Building2, CheckCircle2 } from 'lucide-react';

export function ClientContext({ domain }: { domain: string }) {
  return (
    <div className="glass-panel rounded-2xl p-6">
      <h3 className="text-xs font-mono text-[#00C2B8] mb-2 tracking-wider uppercase">Brand Being Analyzed</h3>
      <p className="text-[10px] dark:text-[#A3A9B7] light:text-[#5B6B8C] mb-4 leading-relaxed">Shows how well your brand is recognized and understood by search engines and AI tools.</p>
      <div className="flex items-start gap-4 mb-6">
        <div className="w-12 h-12 rounded-lg dark:bg-white/5 light:bg-black/5 border dark:border-white/10 light:border-black/10 flex items-center justify-center">
          <Building2 className="dark:text-white/70 light:text-black/70" />
        </div>
        <div>
          <h2 className="font-display text-xl break-all dark:text-white light:text-[#0C182C]">{domain}</h2>
          <p className="text-sm dark:text-[#A3A9B7] light:text-[#5B6B8C]">Status: Analysis in Progress</p>
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex justify-between text-sm border-b dark:border-white/5 light:border-black/5 pb-2">
          <span className="dark:text-[#A3A9B7] light:text-[#5B6B8C]">Digital Reputation Score</span>
          <span className="font-mono dark:text-white light:text-[#0C182C]">72<span className="text-xs dark:text-[#A3A9B7] light:text-[#5B6B8C]">/100</span></span>
        </div>
        <div className="flex justify-between text-sm border-b dark:border-white/5 light:border-black/5 pb-2">
          <span className="dark:text-[#A3A9B7] light:text-[#5B6B8C]">Visibility on AI Platforms</span>
          <span className="font-mono text-[#00C2B8] flex items-center gap-1">
            Verified <CheckCircle2 className="w-3 h-3 inline" />
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="dark:text-[#A3A9B7] light:text-[#5B6B8C]">Last Updated</span>
          <span className="font-mono text-xs dark:text-[#A3A9B7] light:text-[#5B6B8C]">Just now</span>
        </div>
      </div>
    </div>
  );
}