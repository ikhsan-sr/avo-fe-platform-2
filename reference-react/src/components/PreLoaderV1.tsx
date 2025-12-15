import { motion } from 'motion/react';

interface PreLoaderProps {
  domain: string;
}

export function PreLoader({ domain }: PreLoaderProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#0c192c]">
      {/* Compact Horizontal Container - Fixed Width, Outline Only */}
      <motion.div 
        className="relative rounded-[16px] border-2 border-solid border-white/20 w-[420px]"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Content */}
        <div className="flex flex-row items-center">
          <div className="content-stretch flex gap-[16px] items-center p-[24px] relative w-full">
            {/* Animated Icon */}
            <div className="relative shrink-0 size-[48px]">
              {/* Outer rotating ring with pulsing scale and animated dash */}
              <motion.div
                className="absolute inset-0"
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.05, 1, 0.95, 1],
                }}
                transition={{ 
                  rotate: {
                    duration: 3,
                    repeat: Infinity,
                    ease: [0.45, 0.05, 0.55, 0.95]
                  },
                  scale: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                <svg className="block size-full" fill="none" viewBox="0 0 48 48">
                  {/* Outer rotating ring with animated stroke length */}
                  <motion.circle 
                    cx="24" 
                    cy="24" 
                    r="22" 
                    stroke="url(#gradient1)" 
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="60 20"
                    opacity="0.6"
                    animate={{
                      strokeDasharray: [
                        "60 20",
                        "80 10", 
                        "45 35",
                        "90 5",
                        "60 20"
                      ]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: [0.42, 0, 0.58, 1],
                      times: [0, 0.25, 0.5, 0.75, 1]
                    }}
                  />
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00C2B8" />
                      <stop offset="100%" stopColor="#00D4FF" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>
              
              {/* Inner rotating ring with complex easing and animated dash */}
              <motion.div
                className="absolute inset-0"
                animate={{ 
                  rotate: -360,
                  scale: [1, 0.95, 1, 1.05, 1],
                }}
                transition={{ 
                  rotate: {
                    duration: 2,
                    repeat: Infinity,
                    ease: [0.65, 0, 0.35, 1]
                  },
                  scale: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    times: [0, 0.25, 0.5, 0.75, 1]
                  }
                }}
              >
                <svg className="block size-full" fill="none" viewBox="0 0 48 48">
                  {/* Inner rotating ring with animated stroke length */}
                  <motion.circle 
                    cx="24" 
                    cy="24" 
                    r="16" 
                    stroke="url(#gradient2)" 
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="40 15"
                    opacity="0.8"
                    animate={{
                      strokeDasharray: [
                        "40 15",
                        "25 30",
                        "55 10",
                        "30 25",
                        "40 15"
                      ]
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: [0.65, 0, 0.35, 1],
                      times: [0, 0.3, 0.5, 0.8, 1]
                    }}
                  />
                  <defs>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#F8B400" />
                      <stop offset="100%" stopColor="#D5650F" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>
              
              {/* Center Globe Icon with breathing effect */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="8" stroke="#FCFCFC" strokeWidth="1.5" />
                  <ellipse cx="10" cy="10" rx="3" ry="8" stroke="#FCFCFC" strokeWidth="1.5" />
                  <line x1="2" y1="10" x2="18" y2="10" stroke="#FCFCFC" strokeWidth="1.5" />
                </svg>
              </motion.div>
            </div>
            
            {/* Text Content */}
            <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative flex-1 min-w-0">
              {/* Top text with animated gradient fill */}
              <motion.p 
                className="relative font-['Manrope:Regular',sans-serif] font-normal leading-[normal] shrink-0 text-[14px] text-nowrap whitespace-pre"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                <motion.span 
                  className="inline-block bg-gradient-to-r from-[#6b7280] via-[#ffffff] via-[#ffffff] to-[#6b7280] bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ['0% center', '100% center', '200% center']
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    backgroundSize: '200% 100%',
                    backgroundPosition: '0% center'
                  }}
                >
                  the user wants me to check
                </motion.span>
              </motion.p>
              
              {/* Domain with ellipsis truncation and animated gradient fill */}
              <motion.p 
                className="relative font-['Manrope:Medium',sans-serif] font-medium shrink-0 text-[20px] max-w-[320px] truncate"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                <motion.span 
                  className="inline-block bg-gradient-to-r from-[#008080] via-[#00ffee] via-[#00ffee] to-[#008080] bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ['0% center', '100% center', '200% center']
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 0.4
                  }}
                  style={{
                    backgroundSize: '200% 100%',
                    backgroundPosition: '0% center'
                  }}
                >
                  {domain}
                </motion.span>
              </motion.p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}