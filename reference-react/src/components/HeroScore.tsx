import { useEffect, useState } from 'react';
import { TrendingUp, CheckCircle, Info, ArrowRight, MessageCircle } from 'lucide-react';

export function HeroScore({ avgScore }: { avgScore: number }) {
  const [displayScore, setDisplayScore] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    let current = 0;
    const increment = avgScore / 100;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= avgScore) {
        setDisplayScore(avgScore);
        clearInterval(timer);
      } else {
        setDisplayScore(Math.ceil(current));
      }
    }, 10);

    return () => clearInterval(timer);
  }, [avgScore]);

  return (
    <div className="relative py-8 flex items-center justify-center gap-16 min-h-[320px]">
      <div className="absolute inset-0 bg-[#00c2b8]/5 blur-[100px] rounded-full pointer-events-none"></div>
      
      {/* Left Side - Brand Trust Score Circle */}
      <div className="relative w-64 h-64 flex items-center justify-center flex-shrink-0">
        <div className="absolute inset-0 rounded-full border dark:border-[#cfff04]/20 light:border-[#cfff04]/30"></div>
        <div className="absolute inset-0 rounded-full border-t border-[#00c2b8] animate-spin" style={{ animationDuration: '10s' }}></div>
        <div className="absolute -inset-4 rounded-full border dark:border-[#00c2b8]/10 light:border-[#00c2b8]/15 animate-pulse-slow"></div>
        <div className="glass-panel w-56 h-56 rounded-full flex flex-col items-center justify-center relative z-10">
          <span className="text-xs font-mono text-[#00c2b8] mb-2 tracking-widest">BRAND TRUST SCORE</span>
          <h1 className="font-display text-8xl dark:text-[#fcfcfc] light:text-[#0c192c] tracking-tighter">{displayScore}</h1>
          <div 
            className="relative flex items-center gap-2 mt-2 px-3 py-1 rounded-full dark:bg-[#00c2b8]/10 light:bg-[#00c2b8]/5 border dark:border-[#00c2b8]/30 light:border-[#00c2b8]/20 cursor-help"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <TrendingUp className="w-3 h-3 text-[#00c2b8]" />
            <span className="text-xs font-mono text-[#00c2b8]">+4.2%</span>
            <Info className="w-3 h-3 text-[#919EAB] opacity-60" />
            
            {/* Tooltip Explanation */}
            {showTooltip && (
              <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 w-64 glass-panel rounded-lg p-3 border dark:border-[#00c2b8]/20 light:border-[#0c192c]/10 z-50 animate-fade-in">
                <div className="flex items-start gap-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-[#00c2b8] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs dark:text-[#fcfcfc] light:text-[#0c192c] font-semibold mb-1">
                      Growth Trend
                    </p>
                    <p className="text-[10px] dark:text-[#919EAB] light:text-[#637381] leading-relaxed">
                      Your Brand Trust Score increased by <span className="text-[#00c2b8] font-semibold">4.2%</span> compared to last month. This means your brand is becoming more trustworthy and visible to search engines and AI systems.
                    </p>
                  </div>
                </div>
                
                <div className="border-t dark:border-[#00c2b8]/10 light:border-[#0c192c]/10 pt-2 mt-2">
                  <p className="text-[9px] dark:text-[#919EAB] light:text-[#637381]">
                    <span className="text-[#00c2b8]">✓</span> Positive growth indicates improving online authority
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Right Side - Trusted Source Status */}
      <div className="flex flex-col gap-4 max-w-md">
        <div className="flex items-center gap-3">
          <CheckCircle className="w-6 h-6 text-[#00c2b8]" />
          <h2 className="font-display text-3xl dark:text-[#fcfcfc] light:text-[#0c192c]">Trusted Source</h2>
        </div>
        <p className="dark:text-[#919EAB] light:text-[#637381] text-base leading-relaxed">Your brand&apos;s authority score for search engines and AI.</p>
        <p className="text-sm text-[#00c2b8] flex items-center gap-2">
          <TrendingUp className="w-4 h-4" />
          <span>Growing month-over-month</span>
        </p>
        
        {/* Action Buttons */}
        <div className="flex gap-3 mt-2">
          <button className="flex-1 bg-[#00c2b8] hover:bg-[#00a098] text-[#0c192c] py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2 group font-display shadow-lg shadow-[#00c2b8]/30">
            <span>Improve My Score</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-6 py-3 rounded-lg dark:bg-[#16243e]/50 light:bg-white/50 dark:text-[#00c2b8] light:text-[#0c192c] dark:border-[#00c2b8]/30 light:border-[#0c192c]/20 border hover:scale-[1.02] transition-all flex items-center gap-2 font-display">
            <MessageCircle className="w-4 h-4" />
            <span>Get Help</span>
          </button>
        </div>
      </div>
    </div>
  );
}