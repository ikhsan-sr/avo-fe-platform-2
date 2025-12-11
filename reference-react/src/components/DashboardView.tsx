import { useEffect, useState } from 'react';
import { DashboardHeader } from './DashboardHeader';
import { BrandContext } from './BrandContext';
import { ClientContext } from './ClientContext';
import { IntelligenceFeed } from './IntelligenceFeed';
import { HeroScore } from './HeroScore';
import { VectorCards } from './VectorCards';
import { SignalFeed } from './SignalFeed';
import { AuthorityChart } from './AuthorityChart';
import { VectorBalanceChart } from './VectorBalanceChart';

interface DashboardViewProps {
  domain: string;
  scores: { opt: number; man: number; gen: number; avg: number };
  onOpenModal: (type: string) => void;
  onReset: () => void;
}

export function DashboardView({ domain, scores, onOpenModal, onReset }: DashboardViewProps) {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimated(true), 100);
  }, []);

  return (
    <div className="flex-1 flex flex-col h-screen">
      <DashboardHeader onReset={onReset} />

      <main className="relative z-10 flex-1 px-[60px] py-8 max-w-[1920px] mx-auto w-full overflow-y-auto">
        
        {/* MAIN CONTENT - Full Width */}
        <div className={`flex flex-col gap-6 fade-enter ${animated ? 'fade-enter-active' : ''}`} style={{ transitionDelay: '100ms' }}>
          {/* Brand Context - Above the fold */}
          <BrandContext domain={domain} avgScore={scores.avg} />
          
          <HeroScore avgScore={scores.avg} />
          <VectorCards scores={scores} onOpenModal={onOpenModal} />
        </div>

      </main>
    </div>
  );
}