import { X, Terminal, ArrowRight } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: string;
}

const modalData: Record<string, {
  badge: string;
  color: string;
  title: string;
  details: string;
  code: string;
  action: string;
}> = {
  critical: {
    badge: 'IMPORTANT ISSUE',
    color: 'text-red-400 border-red-400/50 bg-red-400/10',
    title: 'Unclear Brand Information Detected',
    details: 'Some pages on your website are sending mixed signals about who you are and what you do. This confusion makes it harder for AI systems like ChatGPT and Google to confidently recommend your brand in their answers. Fixing this will help you appear more often in AI-generated responses.',
    code: 'Issue: Missing founder information on your About page\nImpact: AI systems can\'t fully understand your brand story\nRecommendation: Add clear founder details with proper markup',
    action: 'Fix Brand Information'
  },
  opportunity: {
    badge: 'GROWTH OPPORTUNITY',
    color: 'text-[#F8B400] border-[#F8B400]/50 bg-[#F8B400]/10',
    title: 'You Could Rank at Position #1',
    details: 'Your API documentation is already ranking well at position #3, but with a simple formatting change, you could capture the top position. By organizing your content into clear, numbered steps, search engines are 45% more likely to feature your content at the very top of results.',
    code: 'Current format: Regular paragraphs and headers\nRecommended: Numbered list format for step-by-step content\nExpected impact: Move from #3 to #1 position',
    action: 'Optimize Content Format'
  },
  optimization: {
    badge: 'PERFORMANCE',
    color: 'text-[#00C2B8] border-[#00C2B8]/50 bg-[#00C2B8]/10',
    title: 'Mobile Page Speed Could Be Faster',
    details: 'Your website\'s main image is taking a bit too long to load on mobile devices (2.8 seconds). This affects user experience and can lower your search rankings. Converting this image to a modern format and properly sizing it will make your site feel snappier and improve your SEO.',
    code: 'Current: 2.8 seconds to load (1.2MB image)\nTarget: Under 2.5 seconds\nSolution: Optimize and compress hero image',
    action: 'Improve Page Speed'
  },
  omg_optimize: {
    badge: 'DETAILED VIEW',
    color: 'text-[#00C2B8] border-[#00C2B8]/50 bg-[#00C2B8]/10',
    title: 'Brand Information Clarity Breakdown',
    details: 'This score measures how clearly search engines and AI systems understand your brand. Your brand identity is strong and well-defined (98% quality), but there\'s a small opportunity to improve mobile performance which would boost this score even higher.',
    code: 'Brand Information Quality: 98% (Excellent)\nBrand Identity Consistency: 100% (Perfect)\nPage Speed Rating: Pass\nSearch Visibility: 95% (Strong)',
    action: 'View Recommendations'
  },
  omg_manifest: {
    badge: 'DETAILED VIEW',
    color: 'text-[#CFFF04] border-[#CFFF04]/50 bg-[#CFFF04]/10',
    title: 'AI Answer Visibility Breakdown',
    details: 'This score shows how often your content appears when people ask AI questions. You\'re doing great with 142 top positions and strong coverage for purchase-related questions. There\'s an opportunity to expand into "how-to" content to reach even more people.',
    code: 'Top Search Positions: 142 (Great)\nAI Answer Coverage: 85% (Strong)\nContent Freshness: High (Updated regularly)\nGrowth: +12% month-over-month',
    action: 'Expand Content Strategy'
  },
  omg_generative: {
    badge: 'DETAILED VIEW',
    color: 'text-[#F8B400] border-[#F8B400]/50 bg-[#F8B400]/10',
    title: 'Content Credibility Breakdown',
    details: 'This measures how much AI systems trust your content. You have excellent credibility with 72 high-quality websites linking to you. AI systems are citing you more frequently, especially after your recent whitepaper. There are 14 mentions of your brand that could be turned into links.',
    code: 'Quality References: 72 high-authority sites\nAI Citation Strength: High (Growing)\nBrand Sentiment: Positive\nUnclaimed Opportunities: 14 brand mentions',
    action: 'Claim Brand Mentions'
  }
};

export function Modal({ isOpen, onClose, type }: ModalProps) {
  if (!isOpen || !modalData[type]) return null;

  const data = modalData[type];

  return (
    <div className={`hidden fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
      <div className="absolute inset-0 dark:bg-[#0C182C]/80 light:bg-white/80 backdrop-blur-sm" onClick={onClose}></div>
      <div className={`relative w-full max-w-2xl glass-panel rounded-2xl overflow-hidden border dark:border-white/10 light:border-black/10 shadow-2xl transition-all duration-300 ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
        
        {/* Modal Header */}
        <div className="p-6 border-b dark:border-white/5 light:border-black/5 flex justify-between items-start">
          <div>
            <div className={`inline-flex items-center gap-2 px-2 py-1 rounded border text-[10px] font-mono mb-3 ${data.color}`}>
              {data.badge}
            </div>
            <h3 className="font-display text-xl dark:text-white light:text-[#0C182C]">
              {data.title}
            </h3>
          </div>
          <button onClick={onClose} className="dark:text-[#A3A9B7] light:text-[#5B6B8C] dark:hover:text-white light:hover:text-[#0C182C] transition-colors cursor-pointer">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 dark:bg-black/20 light:bg-white/20">
          
          {/* Explanation */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono dark:text-[#A3A9B7] light:text-[#5B6B8C] uppercase tracking-wider">What This Means</h4>
            <div className="text-sm dark:text-white/90 light:text-[#0C182C]/90 leading-relaxed">
              {data.details}
            </div>
          </div>

          {/* Technical Details */}
          <div className="rounded-lg dark:bg-[#0C182C]/50 light:bg-white/50 border dark:border-white/5 light:border-black/5 p-4 font-mono text-xs dark:text-[#A3A9B7]/80 light:text-[#5B6B8C]/80 overflow-x-auto">
            <div className="flex items-center gap-2 mb-2 dark:text-[#A3A9B7]/50 light:text-[#5B6B8C]/50 border-b dark:border-white/5 light:border-black/5 pb-2">
              <Terminal className="w-3 h-3" />
              <span>Details</span>
            </div>
            <pre className="whitespace-pre-wrap break-all text-[#00C2B8]">
              {data.code}
            </pre>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between gap-3 pt-2">
            <button 
              onClick={onClose}
              className="px-4 py-2 dark:bg-white/5 dark:hover:bg-white/10 light:bg-black/5 light:hover:bg-black/10 border dark:border-white/10 light:border-black/10 rounded-lg text-sm dark:text-white light:text-[#0C182C] transition-colors cursor-pointer"
            >
              Close
            </button>
            <button 
              onClick={onClose}
              className="px-4 py-2 bg-[#00C2B8] hover:bg-[#00C2B8]/90 rounded-lg text-sm text-white transition-colors flex items-center gap-2 cursor-pointer"
            >
              {data.action}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
