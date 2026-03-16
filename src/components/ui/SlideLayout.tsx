import React from 'react';
import { motion } from 'framer-motion';
interface SlideLayoutProps {
  slideNumber: number;
  totalSlides: number;
  title?: string;
  bgVariant?: 'dark' | 'light' | 'gradient' | 'accent' | 'telegram';
  children: React.ReactNode;
}
export function SlideLayout({
  slideNumber,
  totalSlides,
  title,
  bgVariant = 'light',
  children
}: SlideLayoutProps) {
  const getBgClass = () => {
    switch (bgVariant) {
      case 'dark':
        return 'bg-[#0A1628] text-white';
      case 'gradient':
        return 'bg-gradient-to-br from-[#0A1628] to-[#1E3A5F] text-white';
      case 'accent':
        return 'bg-gradient-to-br from-[#1E3A5F] to-[#2563EB] text-white';
      case 'telegram':
        return 'bg-gradient-to-br from-[#0088CC] to-[#229ED9] text-white';
      case 'light':
      default:
        return 'bg-[#F8FAFC] text-[#0A1628]';
    }
  };
  const isDark = ['dark', 'gradient', 'accent', 'telegram'].includes(bgVariant);
  return (
    <div
      className={`w-full h-full flex flex-col relative overflow-hidden ${getBgClass()}`}>
      
      {/* Decorative corners */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
          <polygon points="0,0 100,0 0,100" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-48 h-48 opacity-5 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
          <circle cx="100" cy="100" r="100" />
        </svg>
      </div>

      {/* Header */}
      {title &&
      <motion.div
        initial={{
          opacity: 0,
          y: -20
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          duration: 0.5,
          delay: 0.1
        }}
        className="px-12 pt-10 pb-4 z-10">
        
          <h2
          className={`text-4xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-[#1E3A5F]'}`}>
          
            {title}
          </h2>
          {!isDark &&
        <div className="w-24 h-1 bg-[#2563EB] mt-4 rounded-full" />
        }
          {isDark &&
        <div className="w-24 h-1 bg-[#F59E0B] mt-4 rounded-full" />
        }
        </motion.div>
      }

      {/* Main Content */}
      <div className="flex-1 px-12 py-6 flex flex-col z-10 relative">
        {children}
      </div>

      {/* Footer */}
      <div
        className={`h-12 px-12 flex items-center justify-between text-sm font-medium z-10 ${isDark ? 'text-white/50' : 'text-[#1E3A5F]/50'}`}>
        
        <div>SmartMurojaat</div>
        <div className="flex space-x-1">
          {Array.from({
            length: totalSlides
          }).map((_, i) =>
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ${i + 1 === slideNumber ? isDark ? 'w-6 bg-[#F59E0B]' : 'w-6 bg-[#2563EB]' : isDark ? 'w-1.5 bg-white/20' : 'w-1.5 bg-[#1E3A5F]/20'}`} />

          )}
        </div>
        <div>
          {slideNumber} / {totalSlides}
        </div>
      </div>
    </div>);

}