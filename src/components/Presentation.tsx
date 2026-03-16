import React, { useCallback, useEffect, useState, Component } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
// Import all slides
import { TitleSlide } from './slides/TitleSlide';
import { ProblemSlide } from './slides/ProblemSlide';
import { SolutionSlide } from './slides/SolutionSlide';
import { TelegramBotSlide } from './slides/TelegramBotSlide';
import { DashboardSlide } from './slides/DashboardSlide';
import { AIValueSlide } from './slides/AIValueSlide';
import { AIExampleSlide } from './slides/AIExampleSlide';
import { TargetUsersSlide } from './slides/TargetUsersSlide';
import { KeyFeaturesSlide } from './slides/KeyFeaturesSlide';
import { WorkflowSlide } from './slides/WorkflowSlide';
import { WhyTelegramSlide } from './slides/WhyTelegramSlide';
import { ValueImpactSlide } from './slides/ValueImpactSlide';
import { MainBenefitsSlide } from './slides/MainBenefitsSlide';
import { ValuePropositionSlide } from './slides/ValuePropositionSlide';
import { SalesPitchSlide } from './slides/SalesPitchSlide';
import { PositioningSlide } from './slides/PositioningSlide';
import { RoadmapSlide } from './slides/RoadmapSlide';
import { ConclusionSlide } from './slides/ConclusionSlide';
// Add or remove slides here — the count updates automatically
const SLIDES = [
TitleSlide,
ProblemSlide,
SolutionSlide,
TelegramBotSlide,
DashboardSlide,
AIValueSlide,
AIExampleSlide,
TargetUsersSlide,
KeyFeaturesSlide,
WorkflowSlide,
WhyTelegramSlide,
ValueImpactSlide,
MainBenefitsSlide,
ValuePropositionSlide,
SalesPitchSlide,
PositioningSlide,
RoadmapSlide,
ConclusionSlide];

export function Presentation() {
  const totalSlides = SLIDES.length;
  const [currentSlide, setCurrentSlide] = useState(1);
  const [direction, setDirection] = useState(0);
  const nextSlide = useCallback(() => {
    if (currentSlide < totalSlides) {
      setDirection(1);
      setCurrentSlide((prev) => prev + 1);
    }
  }, [currentSlide, totalSlides]);
  const prevSlide = useCallback(() => {
    if (currentSlide > 1) {
      setDirection(-1);
      setCurrentSlide((prev) => prev - 1);
    }
  }, [currentSlide]);
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.98
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.98
    })
  };
  const renderSlide = () => {
    const SlideComponent = SLIDES[currentSlide - 1] ?? SLIDES[0];
    return (
      <SlideComponent slideNumber={currentSlide} totalSlides={totalSlides} />);

  };
  return (
    <div className="w-full h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* 16:9 Aspect Ratio Container */}
      <div className="relative w-full max-w-[1920px] aspect-video max-h-screen bg-white shadow-2xl overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: {
                type: 'spring',
                stiffness: 300,
                damping: 30
              },
              opacity: {
                duration: 0.2
              },
              scale: {
                duration: 0.2
              }
            }}
            className="absolute inset-0 w-full h-full">
            
            {renderSlide()}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Overlays */}
        <button
          onClick={prevSlide}
          className={`absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/20 hover:bg-black/40 text-white flex items-center justify-center transition-all z-50 ${currentSlide === 1 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className={`absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/20 hover:bg-black/40 text-white flex items-center justify-center transition-all z-50 ${currentSlide === totalSlides ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          
          <ChevronRight size={24} />
        </button>
      </div>
    </div>);

}