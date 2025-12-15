import { motion } from 'motion/react';
import { HexagonLoader } from './HexagonLoader';

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
            {/* Use HexagonLoader component with text */}
            <HexagonLoader size={48} showText={true} domain={domain} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}