import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import svgPaths from "../imports/svg-cvpwbi0swb";
import { usePost } from '../../../src/hooks/api';
import { storageUtils } from '../../../src/utils/storage';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
// import imgPattern from "figma:asset/e777a57b939162b876418f1793283d92d18bafa0.png";

interface LandingViewProps {
  onStartAnalysis: (domain: string) => void;
}

interface AnalysisResponse {
  data: {
    url: string;
    id: string;
    [key: string]: any;
  };
}

export function LandingView({ onStartAnalysis }: LandingViewProps) {
  const [domain, setDomain] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { trigger } = usePost<AnalysisResponse>('/process-N8N-AVQ');

  const validateDomain = (value: string) => {
    const trimmedDomain = value.trim();
    
    if (!trimmedDomain) {
      setError(true);
      setErrorMessage('Please enter your domain name');
      return false;
    }

    // Check if domain starts with http:// or https://
    if (/^https?:\/\//i.test(trimmedDomain)) {
      setError(true);
      setErrorMessage('Please enter domain without http:// or https:// (e.g. tokopedia.com)');
      return false;
    }
    
    // Check if domain has a valid TLD (top-level domain)
    const domainPattern = /\.[a-z]{2,}$/i;
    if (!domainPattern.test(trimmedDomain)) {
      setError(true);
      setErrorMessage('Please include a valid domain extension (e.g., .com, .net, .id)');
      return false;
    }
    
    setError(false);
    setErrorMessage('');
    return true;
  };

  const handleSubmit = async () => {
    if (!validateDomain(domain)) {
      setTimeout(() => {
        setError(false);
        setErrorMessage('');
      }, 3000);
      return;
    }

    setIsLoading(true);
    setIsSuccess(false);
    setError(false);
    setErrorMessage('');

    try {
      const result = await trigger({
        data: {
          url: domain.trim(),
          type: 'all'
        }
      });

      console.log('Post', {
        url: domain.trim(),
        type: 'all'
      })

      // Extract and save to local storage
      if (result?.data) {
        storageUtils.setAvoData({
          url: result.data.url,
          id: result.data.id
        });
      }

      setIsSuccess(true);
      // Small delay to let the user perceive the success state before transition
      setTimeout(() => {
        onStartAnalysis(domain.trim());
      }, 500);
    } catch (err: any) {
      console.error('Submission error:', err);
      setIsLoading(false);
      setError(true);
      setErrorMessage(err.message || 'An error occurred while processing your request. Please try again.');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center" data-name="Front Page">
      {/* Layer 1: Base Gradient - Dark Blue Foundation */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1929] via-[#0c192c] to-[#1a2332]" />
      
      {/* Layer 2: Radial Gradient - Teal Glow Top Right */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,194,184,0.4),transparent_50%)]" />
      </div>
      
      {/* Layer 3: Radial Gradient - Cyan Glow Bottom Left */}
      <div className="absolute inset-0 opacity-25">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,212,255,0.3),transparent_50%)]" />
      </div>
      
      {/* Layer 4: Radial Gradient - Orange Subtle Glow Center */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(248,180,0,0.15),transparent_60%)]" />
      </div>

      {/* Layer 5: Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 overflow-hidden" data-name="Pattern">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-center object-cover opacity-30 size-full" src="./assets/e777a57b939162b876418f1793283d92d18bafa0.png" />
          <div className="absolute inset-0" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1440 777\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'0.8999999761581421\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(4.4087e-15 38.85 -72 2.3789e-15 720 388.5)\\'><stop stop-color=\\'rgba(13,31,49,0)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(13,31,49,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }} />
        </div>
      </div>

      {/* Layer 6: Top Gradient Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,25,41,0.5)] via-transparent to-[rgba(12,25,44,0.8)] pointer-events-none" />

      {/* Layer 7: Content Layer */}
      <div className="absolute inset-0" data-name="LandingView" />
      
      {/* Main Content Container */}
      <div className="relative z-10 content-stretch flex flex-col gap-[32px] items-center w-[512px]">
        {/* Logo */}
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-[158px]" data-name="Logo">
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="<Group>">
            <div className="[grid-area:1_/_1] h-[32.364px] ml-0 mt-0 relative w-[43.424px]" data-name="<Group>">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 33">
                <g id="<Group>">
                  <path d={svgPaths.p338e6a00} fill="url(#paint0_linear_2080_67)" id="<Path>" />
                  <path d={svgPaths.p2c92a480} fill="url(#paint1_linear_2080_67)" id="<Path>_2" />
                </g>
                <defs>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2080_67" x1="-3.94369" x2="10.0488" y1="9.03806" y2="-0.264081">
                    <stop stopColor="#F8B400" />
                    <stop offset="1" stopColor="#D5650F" />
                  </linearGradient>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_2080_67" x1="26.4729" x2="42.5955" y1="-2.01734" y2="7.6099">
                    <stop stopColor="#F8B400" />
                    <stop offset="1" stopColor="#D5650F" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="[grid-area:1_/_1] h-[32.364px] ml-[8.95%] mt-[32.58%] relative w-[43.424px]" data-name="<Group>">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 33">
                <g id="<Group>">
                  <path d={svgPaths.p25a08b80} fill="url(#paint0_linear_2080_84)" id="<Path>" />
                  <path d={svgPaths.p11a0f400} fill="url(#paint1_linear_2080_84)" id="<Path>_2" />
                </g>
                <defs>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2080_84" x1="49.111" x2="36.0492" y1="15.221" y2="29.8267">
                    <stop stopColor="#00C2B8" />
                    <stop offset="1" stopColor="#02605C" />
                  </linearGradient>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_2080_84" x1="16.9564" x2="0.833744" y1="34.382" y2="24.7547">
                    <stop stopColor="#00C2B8" />
                    <stop offset="1" stopColor="#02605C" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div className="h-[36.918px] relative shrink-0 w-[98.288px]" data-name="<Compound Path>">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 99 37">
              <path clipRule="evenodd" d={svgPaths.p10f59900} fill="var(--fill-0, white)" fillRule="evenodd" id="<Compound Path>" />
            </svg>
          </div>
        </div>

        {/* Glass Panel Container */}
        <div className="bg-[rgba(22,36,62,0.5)] relative rounded-[16px] shrink-0 w-full" data-name="Container">
          <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(252,252,252,0.06)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.2)]" />
          <div className="size-full">
            <div className="box-border content-stretch flex flex-col gap-[24px] items-start p-[33px] relative w-full">
              {/* Heading and Description - Hide when loading */}
              <AnimatePresence>
                {!isLoading && (
                  <motion.div 
                    className="content-stretch flex flex-col gap-[12px] items-center justify-center relative shrink-0 w-full"
                    initial={{ opacity: 1, height: 'auto' }}
                    exit={{ 
                      opacity: 0,
                      height: 0,
                      marginBottom: 0
                    }}
                    transition={{
                      opacity: { duration: 0.3 },
                      height: { duration: 0.4, delay: 0.2 },
                      marginBottom: { duration: 0.4, delay: 0.2 }
                    }}
                  >
                    <p className="font-['Satoshi:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#fcfcfc] text-[30px] text-center text-nowrap whitespace-pre">Check Your Brand Authority</p>
                    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
                      <p className="basis-0 font-['Manrope:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#919eab] text-[14px] text-center">
                        <span>{`See how your brand appears to `}</span>
                        <span className="font-['Manrope:Medium',sans-serif] font-medium text-[#c6f558]">search engines</span>
                        <span>{` and `}</span>
                        <span className="font-['Manrope:Medium',sans-serif] font-medium text-[#c6f558]">AI Platform</span>
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Input Container with Preloader */}
              <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
                <motion.div 
                  className="relative shrink-0 w-full overflow-hidden" 
                  data-name="Container"
                  animate={{
                    height: isLoading ? '80px' : '57.6px'
                  }}
                  transition={{
                    duration: 1.4,
                    ease: [0.4, 0, 0.2, 1],
                    delay: 0
                  }}
                >
                  <div className="bg-[rgba(0,0,0,0.16)] rounded-[10px] w-full transition-all relative" data-name="Text Input">
                    {/* Inner border overlay for error state */}
                    <div 
                      aria-hidden="true" 
                      className={`absolute border-[1.5px] border-solid inset-0 pointer-events-none rounded-[10px] transition-all duration-300 ${
                        error ? 'border-[#e3170a] opacity-100' : 'border-[rgba(252,252,252,0.06)] opacity-100'
                      }`} 
                    />
                    
                    <AnimatePresence mode="wait">
                      {!isLoading ? (
                        <motion.div
                          key="input"
                          initial={{ opacity: 1 }}
                          exit={{ 
                            opacity: 0,
                            y: -8
                          }}
                          transition={{ 
                            duration: 0.5,
                            ease: [0.4, 0, 0.2, 1]
                          }}
                          className="box-border content-stretch flex h-[57.6px] items-center overflow-clip pl-[48px] pr-[16px] py-[16px] relative rounded-[inherit] w-full"
                        >
                          <input
                            type="text"
                            value={domain}
                            onChange={(e) => setDomain(e.target.value)}
                            onKeyPress={handleKeyPress}
                            className="w-full bg-transparent font-['Manrope:Medium',sans-serif] font-medium leading-[normal] text-[#fcfcfc] text-[16px] outline-none placeholder-[#919eab]"
                            placeholder="yourcompany.com"
                            autoComplete="off"
                            disabled={isLoading}
                          />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="preloader"
                          initial={{ 
                            opacity: 0,
                            y: 15
                          }}
                          animate={{ 
                            opacity: 1,
                            y: 0
                          }}
                          transition={{ 
                            duration: 0.8,
                            delay: 0.5,
                            ease: [0.25, 0.46, 0.45, 0.94]
                          }}
                          className="p-[16px]"
                        >
                          {/* Preloader Content */}
                          <div className="flex flex-row items-center gap-[16px]">
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
                                  animate={isSuccess ? {
                                    backgroundPosition: '0% center',
                                    color: '#ffffff', // Turn solid white on success
                                    textShadow: '0 0 8px rgba(255,255,255,0.5)'
                                  } : {
                                    backgroundPosition: ['0% center', '100% center', '200% center']
                                  }}
                                  transition={isSuccess ? {
                                    duration: 0.5
                                  } : {
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
                                  animate={isSuccess ? {
                                    backgroundPosition: '0% center',
                                    color: '#00ffee', // Turn solid cyan on success
                                    textShadow: '0 0 8px rgba(0,255,238,0.5)'
                                  } : {
                                    backgroundPosition: ['0% center', '100% center', '200% center']
                                  }}
                                  transition={isSuccess ? {
                                    duration: 0.5
                                  } : {
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
                                  {domain.toLowerCase()}
                                </motion.span>
                              </motion.p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(252,252,252,0.06)] border-solid inset-0 pointer-events-none rounded-[10px]" />
                  </div>
                  
                  {/* Globe Icon - Only show when not loading */}
                  {!isLoading && (
                    <div className="absolute box-border content-stretch flex h-[57.6px] items-center left-0 pl-[16px] pr-0 py-0 top-0 w-[36px]" data-name="Container">
                      <div className="relative shrink-0 size-[20px]" data-name="Icon">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <g clipPath="url(#clip0_2080_79)" id="Icon">
                            <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #C6F558)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                            <path d={svgPaths.p17212180} id="Vector_2" stroke="var(--stroke-0, #C6F558)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                            <path d="M1.66667 10H18.3333" id="Vector_3" stroke="var(--stroke-0, #C6F558)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                          </g>
                          <defs>
                            <clipPath id="clip0_2080_79">
                              <rect fill="white" height="20" width="20" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  )}
                </motion.div>

                {/* Error Message - Now in layout flow */}
                <AnimatePresence>
                  {error && (
                    <motion.p 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] text-[#e3170a] text-[12px] text-nowrap whitespace-pre"
                    >
                      {errorMessage}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Button - Disabled when loading */}
              <button 
                onClick={handleSubmit}
                disabled={isLoading}
                className={`relative rounded-[10px] shrink-0 w-full transition-all duration-300 transform overflow-hidden ${
                  isLoading 
                    ? 'bg-[rgba(22,36,62,0.6)] cursor-not-allowed border border-[rgba(0,194,184,0.15)]' 
                    : 'bg-[#00c2b8] hover:bg-[#00a098] hover:scale-[1.02] shadow-[0px_10px_15px_-3px_rgba(0,194,184,0.3),0px_4px_6px_-4px_rgba(0,194,184,0.3)] group'
                }`}
                data-name="Button"
              >
                {/* Disabled state overlay with subtle animation */}
                {isLoading && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(0,194,184,0.05)] to-transparent animate-pulse" />
                )}
                
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="box-border content-stretch flex gap-[8px] h-[56px] items-center justify-center pl-0 pr-[0.012px] py-0 relative w-full">
                    <div className="h-[24px] relative shrink-0 w-[100.188px]" data-name="Text">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[100.188px]">
                        <p className={`absolute font-['Satoshi:Bold',sans-serif] leading-[normal] left-[50.5px] not-italic text-[16px] text-center text-nowrap top-[0.6px] translate-x-[-50%] whitespace-pre transition-colors duration-300 ${
                          isLoading ? 'text-[rgba(145,158,171,0.6)]' : 'text-[#0c192d]'
                        }`}>
                          Start Analysis
                        </p>
                      </div>
                    </div>
                    <div className={`relative shrink-0 size-[20px] transition-all duration-300 ${!isLoading ? 'group-hover:translate-x-1' : 'opacity-40'}`} data-name="Icon">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <g id="Icon">
                          <path d="M4.16626 10H15.8329" id="Vector" stroke={isLoading ? "rgba(145,158,171,0.6)" : "#0C192C"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                          <path d={svgPaths.p3e217c80} id="Vector_2" stroke={isLoading ? "rgba(145,158,171,0.6)" : "#0C192C"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Powered by text */}
        <div className="h-[15.988px] relative shrink-0 w-[190.788px]" data-name="Container">
          <p className="absolute font-['Manrope:Medium',sans-serif] font-medium leading-[16px] left-0 text-[12px] text-[rgba(145,158,171,0.5)] text-nowrap top-[-0.8px] tracking-[1.2px] whitespace-pre">Powered by AVO Intelligence</p>
        </div>
      </div>

      {/* Storage Management Footer */}
      <div className="fixed bottom-4 right-4 z-50">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <button className="text-[12px] text-[#919eab] hover:text-[#00c2b8] transition-colors opacity-50 hover:opacity-100">
              Clear Storage
            </button>
          </AlertDialogTrigger>
          <AlertDialogContent className="bg-[#16243e] border border-[rgba(252,252,252,0.06)] text-[#fcfcfc]">
            <AlertDialogHeader>
              <AlertDialogTitle>Clear Local Storage?</AlertDialogTitle>
              <AlertDialogDescription className="text-[#919eab]">
                This will remove all saved analysis data from your browser. This action cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className="bg-transparent border-[rgba(252,252,252,0.1)] text-[#fcfcfc] hover:bg-[rgba(252,252,252,0.05)]">Cancel</AlertDialogCancel>
              <AlertDialogAction 
                onClick={() => {
                  storageUtils.clearAvoData();
                  alert("Storage cleared successfully");
                }}
                className="bg-[#e3170a] hover:bg-[#c41207] text-white border-none"
              >
                Clear Data
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}