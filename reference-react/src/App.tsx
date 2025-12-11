'use client';

import { useState, useEffect, useRef } from 'react';
import { LandingView } from './components/LandingView';
import { DashboardView } from './components/DashboardViewNew';
import { PreLoader } from './components/PreLoader';
import { LoadingTransition } from './components/LoadingTransition';
import { Modal } from './components/Modal';
import { ThemeProvider } from './components/ThemeContext';
// import bgElement from 'figma:asset/fa04912264ef8a7178cb6901fd42f5f37418f7d9.png';
// import bgElement from './assets/fa04912264ef8a7178cb6901fd42f5f37418f7d9.png';

export default function App() {
  const [view, setView] = useState<'landing' | 'preloader' | 'loading' | 'dashboard'>('landing');
  const [domain, setDomain] = useState('');
  const [scores, setScores] = useState({ opt: 0, man: 0, gen: 0, avg: 0 });
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<string>('');

  const handleStartAnalysis = (inputDomain: string) => {
    // Check for dummy domains and assign specific scores
    const domainBase = inputDomain.toLowerCase().split('.')[0];
    let scoreOpt, scoreMan, scoreGen, avgScore;
    
    if (domainBase === 'authority1') {
      // Very Poorly: score < 55
      avgScore = 40;
      scoreOpt = 35;
      scoreMan = 40;
      scoreGen = 45;
    } else if (domainBase === 'authority2') {
      // Risk: score 55-65
      avgScore = 60;
      scoreOpt = 58;
      scoreMan = 60;
      scoreGen = 62;
    } else if (domainBase === 'authority3') {
      // Borderline: score 65-75
      avgScore = 70;
      scoreOpt = 68;
      scoreMan = 70;
      scoreGen = 72;
    } else if (domainBase === 'authority4') {
      // Qualified: score 75-85
      avgScore = 80;
      scoreOpt = 78;
      scoreMan = 80;
      scoreGen = 82;
    } else if (domainBase === 'authority5') {
      // Trusted: score 85-100
      avgScore = 90;
      scoreOpt = 88;
      scoreMan = 90;
      scoreGen = 92;
    } else {
      // Random scores for other domains
      scoreOpt = Math.floor(Math.random() * (98 - 85) + 85);
      scoreMan = Math.floor(Math.random() * (90 - 70) + 70);
      scoreGen = Math.floor(Math.random() * (95 - 75) + 75);
      avgScore = Math.round((scoreOpt + scoreMan + scoreGen) / 3);
    }

    setDomain(inputDomain.toLowerCase());
    setScores({ opt: scoreOpt, man: scoreMan, gen: scoreGen, avg: avgScore });
    // Stay on landing view - preloader is now embedded in the input field
    
    // Transition directly to loading after 8 seconds
    setTimeout(() => {
      setView('loading');
    }, 8000);
    
    // Transition to dashboard after loading completes
    const totalLoadingTime = 8000 + 16500; // 8s preloader + 16.5s loading = 24.5s total
    setTimeout(() => {
      setView('dashboard');
    }, totalLoadingTime);
  };

  const handleOpenModal = (type: string) => {
    setModalType(type);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleReset = () => {
    setView('landing');
    setDomain('');
    setScores({ opt: 0, man: 0, gen: 0, avg: 0 });
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col antialiased selection:bg-[#00c2b8] selection:text-[#0c192c] dark:bg-[#0c192c] light:bg-white relative">
        {/* Gradient Background - Avonetiq Style with Animation */}
        <div className="fixed inset-0 pointer-events-none z-[1]">
          {/* Dark Mode: Dark Navy Background */}
          <div className="absolute inset-0 dark:opacity-100 light:opacity-0 transition-opacity duration-700">
            <div className="absolute inset-0 bg-[#0c192c]"></div>
            {/* Subtle gradient overlays */}
            <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-[#16243e]/20 to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-[#00c2b8]/5 to-transparent blur-3xl"></div>
          </div>
          {/* Light Mode: Subtle Gradient */}
          <div className="absolute inset-0 dark:opacity-0 light:opacity-100 transition-opacity duration-700">
            <div className="absolute inset-0 bg-gradient-to-br from-[#F9FAFB] to-[#EDF1F7]"></div>
          </div>
        </div>
        
        {/* Background Grid */}
        <div className="fixed inset-0 bg-grid pointer-events-none z-[2] dark:opacity-[0.03] light:opacity-10"></div>
        
        {/* Background Decorative Element */}
        <div className="fixed inset-0 pointer-events-none z-[3] overflow-hidden">
          <img 
            // src={bgElement} 
            src="./assets/fa04912264ef8a7178cb6901fd42f5f37418f7d9.png"
            alt="" 
            className="absolute top-20 left-1/4 w-[600px] h-auto opacity-[0.02] dark:opacity-[0.025] light:opacity-[0.03] blur-md select-none"
            style={{ transform: 'rotate(-15deg)' }}
          />
          <img 
            // src={bgElement} 
            src="./assets/fa04912264ef8a7178cb6901fd42f5f37418f7d9.png"
            alt="" 
            className="absolute bottom-32 right-1/4 w-[500px] h-auto opacity-[0.015] dark:opacity-[0.02] light:opacity-[0.02] blur-md select-none"
            style={{ transform: 'rotate(25deg) scaleX(-1)' }}
          />
        </div>

        {/* Content Layer - Highest z-index */}
        <div className="relative z-[10] flex flex-col flex-1">
          {view === 'landing' && <LandingView onStartAnalysis={handleStartAnalysis} />}
          {view === 'preloader' && <PreLoader domain={domain} />}
          {view === 'loading' && <LoadingTransition domain={domain} />}
          {view === 'dashboard' && (
            <DashboardView 
              domain={domain} 
              scores={scores} 
              onOpenModal={handleOpenModal}
              onReset={handleReset}
            />
          )}
        </div>

        <Modal isOpen={modalOpen} onClose={handleCloseModal} type={modalType} />
      </div>
    </ThemeProvider>
  );
}