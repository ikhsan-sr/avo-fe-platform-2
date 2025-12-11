import { useEffect, useState, useRef } from 'react';

interface FeedItem {
  id: number;
  time: string;
  color: string;
  text: string;
}

const feedTemplates = [
  { color: 'text-[#00C2B8]', text: '<span class="text-[#A3A9B7]\">[Update]</span> Brand identity verified' },
  { color: 'text-[#A3A9B7]', text: '<span class="text-[#A3A9B7]\">[AI]</span> Your brand mentioned in AI answer' },
  { color: 'text-[#F8B400]', text: '<span class="text-[#A3A9B7]\">[Alert]</span> Page layout shift detected' },
  { color: 'text-[#00C2B8]', text: '<span class="text-[#A3A9B7]\">[Success]</span> Featured in top search result' },
  { color: 'text-white', text: '<span class="text-[#A3A9B7]\">[Link]</span> New quality reference found' },
  { color: 'text-[#CFFF04]', text: '<span class="text-[#A3A9B7]\">[Speed]</span> Page responsiveness improved' },
];

export function SignalFeed() {
  const [items, setItems] = useState<FeedItem[]>([]);
  const counterRef = useRef(0);

  const addItem = () => {
    const template = feedTemplates[Math.floor(Math.random() * feedTemplates.length)];
    const now = new Date();
    const time = now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
    
    const newItem: FeedItem = {
      id: counterRef.current++,
      time,
      color: template.color,
      text: template.text,
    };

    setItems(prev => {
      const updated = [newItem, ...prev];
      return updated.slice(0, 20); // Keep only 20 items
    });
  };

  useEffect(() => {
    // Add initial items
    for (let i = 0; i < 6; i++) {
      setTimeout(() => addItem(), i * 100);
    }

    // Add new items periodically
    const interval = setInterval(addItem, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass-panel rounded-2xl p-0 flex flex-col overflow-hidden h-[400px]">
      <div className="p-4 border-b dark:border-white/5 light:border-black/5 dark:bg-white/5 light:bg-black/5 flex justify-between items-center">
        <h3 className="text-xs font-mono dark:text-white light:text-[#0C182C] tracking-wider uppercase">Live Signal Feed</h3>
        <div className="flex gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
        </div>
      </div>
      <div className="p-4 font-mono text-[11px] space-y-3 overflow-y-auto feed-scroll flex-1">
        {items.map((item) => (
          <div 
            key={item.id}
            className="flex gap-3 feed-item-animate"
          >
            <span className="dark:text-[#A3A9B7]/50 light:text-[#5B6B8C]/50 shrink-0">{item.time}</span>
            <div className="flex-1">
              <span className={`${item.color}`}> &gt; </span>
              <span className={`${item.color}`} dangerouslySetInnerHTML={{ __html: item.text }} />
            </div>
          </div>
        ))}
      </div>
      <div className="p-2 border-t dark:border-white/5 light:border-black/5 dark:bg-black/20 light:bg-white/20">
        <div className="text-[10px] dark:text-[#A3A9B7] light:text-[#5B6B8C] flex items-center justify-center gap-2">
          <span className="w-1.5 h-1.5 bg-[#00C2B8] animate-pulse rounded-full"></span>
          Data Warehouse: Connected
        </div>
      </div>
    </div>
  );
}