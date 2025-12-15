import { motion } from 'motion/react';

/**
 * HexagonLoader Component
 * 
 * Displays two hexagonal strokes with animated flowing gradients
 * - Outer hexagon: Cyan/teal gradient flowing counter-clockwise
 * - Inner hexagon: Orange/yellow gradient flowing clockwise
 * - Center: Breathing globe icon
 * 
 * Usage: 
 * - Basic: <HexagonLoader size={48} />
 * - With text: <HexagonLoader size={48} showText={true} domain="example.com" />
 */

interface HexagonLoaderProps {
  size?: number; // Size in pixels, default 48px
  showText?: boolean; // Whether to show the text labels
  domain?: string; // Domain name to display (only used if showText is true)
}

export function HexagonLoader({ size = 48, showText = false, domain = '' }: HexagonLoaderProps) {
  if (!showText) {
    // Simple loader without text
    return (
      <div className="relative shrink-0" style={{ width: size, height: size }}>
        {/* Outer hexagon - stationary with animated stroke */}
        <motion.div className="absolute inset-0">
          <svg className="block size-full" fill="none" viewBox="0 0 48 48">
            <motion.path
              d="M 24,2 L 43.05,13 L 43.05,35 L 24,46 L 4.95,35 L 4.95,13 Z"
              stroke="url(#hexagon-gradient-outer)" 
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              strokeDasharray="80 60"
              opacity="0.7"
              animate={{
                strokeDashoffset: [0, -140]
              }}
              transition={{
                duration: 2.6,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <defs>
              <linearGradient id="hexagon-gradient-outer" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00C2B8" />
                <stop offset="50%" stopColor="#00D4FF" />
                <stop offset="100%" stopColor="#00C2B8" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
        
        {/* Inner hexagon - stationary with animated stroke (opposite direction) */}
        <motion.div className="absolute inset-0">
          <svg className="block size-full" fill="none" viewBox="0 0 48 48">
            <motion.path
              d="M 24,10 L 36.12,17 L 36.12,31 L 24,38 L 11.88,31 L 11.88,17 Z"
              stroke="url(#hexagon-gradient-inner)" 
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              strokeDasharray="60 40"
              opacity="0.9"
              animate={{
                strokeDashoffset: [0, 100]
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <defs>
              <linearGradient id="hexagon-gradient-inner" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F8B400" />
                <stop offset="50%" stopColor="#D5650F" />
                <stop offset="100%" stopColor="#F8B400" />
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
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="8" stroke="#FCFCFC" strokeWidth="1.5" />
            <ellipse cx="10" cy="10" rx="3" ry="8" stroke="#FCFCFC" strokeWidth="1.5" />
            <line x1="2" y1="10" x2="18" y2="10" stroke="#FCFCFC" strokeWidth="1.5" />
          </svg>
        </motion.div>
      </div>
    );
  }

  // Loader with text
  return (
    <div className="flex flex-row items-center gap-[16px]">
      {/* Animated Icon */}
      <div className="relative shrink-0" style={{ width: size, height: size }}>
        {/* Outer hexagon - stationary with animated stroke */}
        <motion.div className="absolute inset-0">
          <svg className="block size-full" fill="none" viewBox="0 0 48 48">
            <motion.path
              d="M 24,2 L 43.05,13 L 43.05,35 L 24,46 L 4.95,35 L 4.95,13 Z"
              stroke="url(#hexagon-gradient-outer-2)" 
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              strokeDasharray="80 60"
              opacity="0.7"
              animate={{
                strokeDashoffset: [0, -140]
              }}
              transition={{
                duration: 2.6,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <defs>
              <linearGradient id="hexagon-gradient-outer-2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00C2B8" />
                <stop offset="50%" stopColor="#00D4FF" />
                <stop offset="100%" stopColor="#00C2B8" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
        
        {/* Inner hexagon - stationary with animated stroke (opposite direction) */}
        <motion.div className="absolute inset-0">
          <svg className="block size-full" fill="none" viewBox="0 0 48 48">
            <motion.path
              d="M 24,10 L 36.12,17 L 36.12,31 L 24,38 L 11.88,31 L 11.88,17 Z"
              stroke="url(#hexagon-gradient-inner-2)" 
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              strokeDasharray="60 40"
              opacity="0.9"
              animate={{
                strokeDashoffset: [0, 100]
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <defs>
              <linearGradient id="hexagon-gradient-inner-2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F8B400" />
                <stop offset="50%" stopColor="#D5650F" />
                <stop offset="100%" stopColor="#F8B400" />
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
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="8" stroke="#FCFCFC" strokeWidth="1.5" />
            <ellipse cx="10" cy="10" rx="3" ry="8" stroke="#FCFCFC" strokeWidth="1.5" />
            <line x1="2" y1="10" x2="18" y2="10" stroke="#FCFCFC" strokeWidth="1.5" />
          </svg>
        </motion.div>
      </div>
      
      {/* Text Content */}
      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative flex-1 min-w-0">
        {/* Top text with animated gradient fill */}
        <motion.p 
          className="relative font-['Manrope:Regular',sans-serif] font-normal leading-[normal] shrink-0 text-[12px] text-nowrap whitespace-pre"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
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
        
        {/* Domain with animated gradient fill */}
        <motion.p 
          className="relative font-['Manrope:Medium',sans-serif] font-medium shrink-0 text-[18px] max-w-full truncate"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
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
  );
}