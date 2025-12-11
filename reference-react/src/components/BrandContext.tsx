import { Server, CheckCircle } from 'lucide-react';
import svgPaths from "../imports/svg-7q1euzyyfj";

interface BrandContextProps {
  domain: string;
  avgScore: number;
}

export function BrandContext({ domain, avgScore }: BrandContextProps) {
  return (
    <div className="glass-card rounded-xl p-6 border dark:border-[#00c2b8]/20 light:border-[#00c2b8]/10">
      <div className="flex items-center justify-between gap-8">
        
        {/* Left: Domain Info */}
        <div className="flex items-center gap-4 flex-1">
          {/* Icon */}
          <div className="bg-[rgba(255,255,255,0.05)] relative rounded-lg shrink-0 size-12 flex items-center justify-center border border-[rgba(255,255,255,0.1)]">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
              <path d={svgPaths.pfb16970} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="2" />
              <path d={svgPaths.p13754d00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="2" />
              <path d={svgPaths.p281e4940} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="2" />
              <path d="M10 6H14" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="2" />
              <path d="M10 10H14" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="2" />
              <path d="M10 14H14" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="2" />
              <path d="M10 18H14" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="2" />
            </svg>
          </div>
          
          {/* Domain Name & Status */}
          <div className="flex flex-col">
            <h3 className="font-display text-xl dark:text-white light:text-[#0c192c]">{domain}</h3>
            <p className="text-sm dark:text-[#a3a9b7] light:text-[#637381]">Analysis Complete</p>
          </div>
        </div>

        {/* Right: Quick Stats */}
        <div className="flex items-center gap-6">
          {/* Digital Reputation Score */}
          <div className="flex flex-col items-end">
            <p className="text-xs dark:text-[#a3a9b7] light:text-[#637381] mb-1">Reputation Score</p>
            <div className="flex items-baseline gap-1">
              <span className="text-lg font-medium dark:text-white light:text-[#0c192c]">{avgScore}</span>
              <span className="text-xs dark:text-[#a3a9b7] light:text-[#637381]">/100</span>
            </div>
          </div>

          {/* Divider */}
          <div className="w-px h-10 dark:bg-[rgba(255,255,255,0.05)] light:bg-[rgba(12,25,44,0.1)]"></div>

          {/* AI Visibility */}
          <div className="flex flex-col items-end">
            <p className="text-xs dark:text-[#a3a9b7] light:text-[#637381] mb-1">AI Visibility</p>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-[#00c2b8]" />
              <span className="text-sm font-medium text-[#00c2b8]">Verified</span>
            </div>
          </div>

          {/* Divider */}
          <div className="w-px h-10 dark:bg-[rgba(255,255,255,0.05)] light:bg-[rgba(12,25,44,0.1)]"></div>

          {/* Last Updated */}
          <div className="flex flex-col items-end">
            <p className="text-xs dark:text-[#a3a9b7] light:text-[#637381] mb-1">Updated</p>
            <span className="text-xs dark:text-[#a3a9b7] light:text-[#637381]">Just now</span>
          </div>
        </div>
      </div>
    </div>
  );
}
