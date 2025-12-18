import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import svgPaths from '../imports/svg-8c714mooh4';
// import imgPattern from "figma:asset/e777a57b939162b876418f1793283d92d18bafa0.png";

interface LoadingTransitionProps {
  domain: string;
}

export const loadingSteps = [
  { text: 'Connecting to domain...', duration: 900, targetProgress: 12 },
  { text: 'Analyzing website structure...', duration: 1100, targetProgress: 28 },
  { text: 'Scanning SEO & performance data...', duration: 1600, targetProgress: 62 },
  { text: 'Evaluating AI citations...', duration: 1200, targetProgress: 85 },
  { text: 'Calculating authority score...', duration: 1200, targetProgress: 96 },
  { text: 'Finalizing results...', duration: 1000, targetProgress: 100 },
];

export function LoadingTransition({ domain }: LoadingTransitionProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let cumulativeTime = 0;
    const stepTimers: NodeJS.Timeout[] = [];

    // Schedule step changes
    loadingSteps.forEach((step, index) => {
      const timer = setTimeout(() => {
        setCurrentStep(index);
      }, cumulativeTime);
      stepTimers.push(timer);
      cumulativeTime += step.duration;
    });

    // Realistic progress animation with variable speeds
    let currentProgress = 0;
    let activeStepIndex = 0;
    let stepStartTime = Date.now();
    let stepStartProgress = 0;
    
    const progressInterval = setInterval(() => {
      const currentStepData = loadingSteps[activeStepIndex];
      
      if (!currentStepData) {
        clearInterval(progressInterval);
        setProgress(100);
        return;
      }

      const targetProgress = currentStepData.targetProgress;
      const stepDuration = currentStepData.duration;
      const elapsed = Date.now() - stepStartTime;
      
      // Calculate speed based on distance to target
      const distance = targetProgress - currentProgress;
      
      if (elapsed < stepDuration - 100 && distance > 0.5) {
        // Variable speed: faster in middle, slower near target
        let speed;
        if (distance > 15) {
          speed = 0.7; // Fast when far from target
        } else if (distance > 5) {
          speed = 0.3; // Medium speed
        } else {
          speed = 0.12; // Slow down near target (edging effect)
        }
        
        // Add some randomness for realistic feel
        speed *= (0.85 + Math.random() * 0.3);
        
        currentProgress = Math.min(currentProgress + speed, targetProgress);
        setProgress(Math.round(currentProgress));
      } else {
        // Time to move to next step or reached target
        currentProgress = targetProgress;
        setProgress(targetProgress);
        
        if (activeStepIndex < loadingSteps.length - 1) {
          activeStepIndex++;
          stepStartTime = Date.now();
          stepStartProgress = currentProgress;
        } else {
          // Ensure we hit 100% on the final step
          setProgress(100);
          clearInterval(progressInterval);
        }
      }
    }, 50);

    return () => {
      stepTimers.forEach(clearTimeout);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern - Exact copy from Figma */}
      <div className="absolute inset-0 bg-linear-to-b from-[rgba(12,25,44,0)] to-[#0c192c]" />
      
      {/* Pattern Layer */}
      <div className="absolute inset-0 opacity-10">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img 
            alt="" 
            className="absolute max-w-none object-cover opacity-10 size-full" 
            style={{ objectPosition: '50% 50%' }}
            // src={imgPattern} 
            src="./assets/e777a57b939162b876418f1793283d92d18bafa0.png"
          />
          <div 
            className="absolute inset-0" 
            style={{ 
              backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1440 777\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'0.8999999761581421\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(4.4087e-15 38.85 -72 2.3789e-15 720 388.5)\\'><stop stop-color=\\'rgba(13,31,49,0.15)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(13,31,49,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" 
            }} 
          />
        </div>
      </div>
      
      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full blur-[120px] opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(0,194,184,0.4) 0%, rgba(0,194,184,0) 70%)',
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(207,255,4,0.4) 0%, rgba(207,255,4,0) 70%)',
        }}
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute top-1/2 right-1/3 w-[350px] h-[350px] rounded-full blur-[100px] opacity-10"
        style={{
          background: 'radial-gradient(circle, rgba(248,180,0,0.5) 0%, rgba(248,180,0,0) 70%)',
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, -80, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center gap-12">
        {/* Animated Illustration */}
        <motion.div
          className="relative w-[280px] h-[280px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Outer rotating ring */}
          <motion.div
            className="absolute inset-0"
            animate={{ 
              rotate: 360,
              scale: [1, 1.08, 1, 0.96, 1],
              opacity: [0.3, 0.5, 0.3, 0.4, 0.3]
            }}
            transition={{ 
              rotate: {
                duration: 8,
                repeat: Infinity,
                ease: [0.42, 0, 0.58, 1]
              },
              scale: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.3, 0.5, 0.8, 1]
              },
              opacity: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <svg viewBox="0 0 280 280" className="w-full h-full">
              <circle
                cx="140"
                cy="140"
                r="135"
                fill="none"
                stroke="url(#gradient1)"
                strokeWidth="2"
                strokeDasharray="20 10"
                opacity="0.3"
              />
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00C2B8" />
                  <stop offset="50%" stopColor="#CFFF04" />
                  <stop offset="100%" stopColor="#F8B400" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>

          {/* Middle counter-rotating ring */}
          <motion.div
            className="absolute inset-[20px]"
            animate={{ 
              rotate: -360,
              scale: [1, 0.94, 1, 1.06, 1],
              opacity: [0.4, 0.6, 0.4, 0.5, 0.4]
            }}
            transition={{ 
              rotate: {
                duration: 12,
                repeat: Infinity,
                ease: [0.65, 0, 0.35, 1]
              },
              scale: {
                duration: 7,
                repeat: Infinity,
                ease: [0.43, 0.13, 0.23, 0.96],
                times: [0, 0.25, 0.5, 0.75, 1]
              },
              opacity: {
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <svg viewBox="0 0 240 240" className="w-full h-full">
              <circle
                cx="120"
                cy="120"
                r="115"
                fill="none"
                stroke="url(#gradient2)"
                strokeWidth="1.5"
                strokeDasharray="15 15"
                opacity="0.4"
              />
              <defs>
                <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#F8B400" />
                  <stop offset="50%" stopColor="#00C2B8" />
                  <stop offset="100%" stopColor="#CFFF04" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>

          {/* Inner pulsing ring */}
          <motion.div
            className="absolute inset-[40px]"
            animate={{ 
              scale: [1, 1.12, 0.96, 1.08, 1],
              opacity: [0.5, 0.85, 0.6, 0.75, 0.5],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              scale: {
                duration: 3,
                repeat: Infinity,
                ease: [0.76, 0, 0.24, 1],
                times: [0, 0.3, 0.6, 0.85, 1]
              },
              opacity: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.35, 0.55, 0.8, 1]
              },
              rotate: {
                duration: 10,
                repeat: Infinity,
                ease: [0.45, 0.05, 0.55, 0.95]
              }
            }}
          >
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <circle
                cx="100"
                cy="100"
                r="95"
                fill="none"
                stroke="url(#gradient3)"
                strokeWidth="2"
                opacity="0.6"
              />
              <defs>
                <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#CFFF04" />
                  <stop offset="100%" stopColor="#00C2B8" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>

          {/* Center Icon - Avonetiq Logo with Complex Animations */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ 
              scale: [1, 1.08, 1],
              rotate: [0, 5, 0, -5, 0]
            }}
            transition={{ 
              scale: {
                duration: 2.5,
                repeat: Infinity,
                ease: [0.45, 0.05, 0.55, 0.95]
              },
              rotate: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <div className="relative w-[88px] h-[66px]">
              {/* Top Orange/Yellow Section */}
              <motion.div 
                className="absolute bottom-[32.58%] left-0 right-[8.95%] top-0"
                initial={{ opacity: 0, y: -10 }}
                animate={{ 
                  opacity: 1,
                  y: 0
                }}
                transition={{ 
                  opacity: {
                    duration: 0.8,
                    ease: "easeOut"
                  },
                  y: {
                    duration: 1,
                    ease: "easeOut"
                  }
                }}
              >
                <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 44 33">
                  <g>
                    <motion.path
                      d={svgPaths.p338e6a00}
                      fill="url(#animatedGradient1)"
                      animate={{ 
                        opacity: [0.85, 1, 0.9, 1]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: [0.42, 0, 0.58, 1],
                        times: [0, 0.3, 0.6, 1]
                      }}
                    />
                    <motion.path
                      d={svgPaths.p2c92a480}
                      fill="url(#animatedGradient2)"
                      animate={{ 
                        opacity: [0.9, 1, 0.85, 1]
                      }}
                      transition={{ 
                        duration: 3.5,
                        repeat: Infinity,
                        ease: [0.65, 0, 0.35, 1],
                        times: [0, 0.25, 0.7, 1]
                      }}
                    />
                  </g>
                  <defs>
                    {/* Animated Gradient 1 - Wave Effect */}
                    <motion.linearGradient
                      id="animatedGradient1"
                      x1="-3.94369"
                      x2="10.0488"
                      y1="9.03806"
                      y2="-0.264081"
                      gradientUnits="userSpaceOnUse"
                      animate={{
                        x1: ["-3.94369", "0", "-3.94369"],
                        x2: ["10.0488", "15", "10.0488"],
                        y1: ["9.03806", "12", "9.03806"],
                        y2: ["-0.264081", "3", "-0.264081"]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <motion.stop
                        stopColor="#F8B400"
                        animate={{
                          stopColor: ["#F8B400", "#CFFF04", "#F8B400"]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      <motion.stop
                        offset="1"
                        stopColor="#D5650F"
                        animate={{
                          stopColor: ["#D5650F", "#F8B400", "#D5650F"]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.5
                        }}
                      />
                    </motion.linearGradient>

                    {/* Animated Gradient 2 - Wave Effect */}
                    <motion.linearGradient
                      id="animatedGradient2"
                      x1="26.4729"
                      x2="42.5955"
                      y1="-2.01734"
                      y2="7.6099"
                      gradientUnits="userSpaceOnUse"
                      animate={{
                        y1: ["-2.01734", "2", "-2.01734"],
                        y2: ["7.6099", "12", "7.6099"],
                        x1: ["26.4729", "30", "26.4729"],
                        x2: ["42.5955", "46", "42.5955"]
                      }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: [0.65, 0, 0.35, 1]
                      }}
                    >
                      <motion.stop
                        stopColor="#F8B400"
                        animate={{
                          stopColor: ["#F8B400", "#CFFF04", "#F8B400"]
                        }}
                        transition={{
                          duration: 3.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.3
                        }}
                      />
                      <motion.stop
                        offset="1"
                        stopColor="#D5650F"
                        animate={{
                          stopColor: ["#D5650F", "#F8B400", "#D5650F"]
                        }}
                        transition={{
                          duration: 3.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.8
                        }}
                      />
                    </motion.linearGradient>
                  </defs>
                </svg>
              </motion.div>

              {/* Bottom Teal/Cyan Section */}
              <motion.div 
                className="absolute bottom-0 left-[8.95%] right-0 top-[32.58%]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ 
                  opacity: 1,
                  y: 0
                }}
                transition={{ 
                  opacity: {
                    duration: 0.8,
                    ease: "easeOut",
                    delay: 0.1
                  },
                  y: {
                    duration: 1,
                    ease: "easeOut",
                    delay: 0.1
                  }
                }}
              >
                <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 44 33">
                  <g>
                    <motion.path
                      d={svgPaths.p32b392f0}
                      fill="url(#animatedGradient3)"
                      animate={{ 
                        opacity: [0.85, 1, 0.9, 1]
                      }}
                      transition={{ 
                        duration: 2.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        times: [0, 0.4, 0.65, 1]
                      }}
                    />
                    <motion.path
                      d={svgPaths.pfe2f940}
                      fill="url(#animatedGradient4)"
                      animate={{ 
                        opacity: [0.9, 1, 0.85, 1]
                      }}
                      transition={{ 
                        duration: 3.2,
                        repeat: Infinity,
                        ease: [0.76, 0, 0.24, 1],
                        times: [0, 0.35, 0.6, 1]
                      }}
                    />
                  </g>
                  <defs>
                    {/* Animated Gradient 3 - Wave Effect */}
                    <motion.linearGradient
                      id="animatedGradient3"
                      x1="49.111"
                      x2="36.0492"
                      y1="15.221"
                      y2="29.8267"
                      gradientUnits="userSpaceOnUse"
                      animate={{
                        x1: ["49.111", "45", "49.111"],
                        x2: ["36.0492", "32", "36.0492"],
                        y1: ["15.221", "18", "15.221"],
                        y2: ["29.8267", "33", "29.8267"]
                      }}
                      transition={{
                        duration: 3.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.2
                      }}
                    >
                      <motion.stop
                        stopColor="#00C2B8"
                        animate={{
                          stopColor: ["#00C2B8", "#00D4FF", "#00C2B8"]
                        }}
                        transition={{
                          duration: 2.8,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      <motion.stop
                        offset="1"
                        stopColor="#02605C"
                        animate={{
                          stopColor: ["#02605C", "#00C2B8", "#02605C"]
                        }}
                        transition={{
                          duration: 2.8,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.4
                        }}
                      />
                    </motion.linearGradient>

                    {/* Animated Gradient 4 - Wave Effect */}
                    <motion.linearGradient
                      id="animatedGradient4"
                      x1="16.9564"
                      x2="0.833753"
                      y1="34.382"
                      y2="24.7547"
                      gradientUnits="userSpaceOnUse"
                      animate={{
                        y1: ["34.382", "30", "34.382"],
                        y2: ["24.7547", "20", "24.7547"],
                        x1: ["16.9564", "13", "16.9564"],
                        x2: ["0.833753", "-3", "0.833753"]
                      }}
                      transition={{
                        duration: 4.2,
                        repeat: Infinity,
                        ease: [0.45, 0.05, 0.55, 0.95]
                      }}
                    >
                      <motion.stop
                        stopColor="#00C2B8"
                        animate={{
                          stopColor: ["#00C2B8", "#00D4FF", "#00C2B8"]
                        }}
                        transition={{
                          duration: 3.2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.5
                        }}
                      />
                      <motion.stop
                        offset="1"
                        stopColor="#02605C"
                        animate={{
                          stopColor: ["#02605C", "#00C2B8", "#02605C"]
                        }}
                        transition={{
                          duration: 3.2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.9
                        }}
                      />
                    </motion.linearGradient>
                  </defs>
                </svg>
              </motion.div>
            </div>
          </motion.div>

          {/* Orbiting Particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                background: i % 3 === 0 ? '#00C2B8' : i % 3 === 1 ? '#CFFF04' : '#F8B400',
                top: '50%',
                left: '50%',
                opacity: 0.6,
              }}
              animate={{
                x: [0, Math.cos((i * Math.PI * 2) / 8) * 140],
                y: [0, Math.sin((i * Math.PI * 2) / 8) * 140],
                scale: [0, 1, 0],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.3,
                ease: 'easeInOut',
              }}
            />
          ))}
        </motion.div>

        {/* Domain Label */}
        <motion.div
          className="flex flex-col items-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="px-6 py-2 rounded-full border border-[rgba(0,194,184,0.3)] bg-[rgba(0,194,184,0.05)]">
            <p className="font-['Manrope:SemiBold',sans-serif] text-[#00C2B8] text-[14px] tracking-wide">
              {domain}
            </p>
          </div>
        </motion.div>

        {/* Loading Status Text */}
        <motion.div
          className="flex flex-col items-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="h-[24px] flex items-center">
            <motion.p
              key={currentStep}
              className="font-['Manrope:Medium',sans-serif] text-white text-[16px]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {loadingSteps[currentStep]?.text}
            </motion.p>
          </div>

          {/* Progress Bar */}
          <div className="w-[300px] h-[3px] bg-[rgba(255,255,255,0.1)] rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{
                background: 'linear-gradient(90deg, #00C2B8 0%, #CFFF04 50%, #F8B400 100%)',
              }}
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            />
          </div>

          {/* Progress Percentage */}
          <motion.p
            className="font-['Manrope:Regular',sans-serif] text-[#919eab] text-[14px]"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            {Math.round(progress)}%
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}