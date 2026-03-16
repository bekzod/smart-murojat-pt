import React from 'react';
import { motion } from 'framer-motion';
import { SlideLayout } from '../ui/SlideLayout';
import { Send, BrainCircuit, Building2 } from 'lucide-react';
export function TitleSlide({ slideNumber, totalSlides }: any) {
  return (
    <SlideLayout
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      bgVariant="gradient">

      <div className="flex-1 flex flex-col items-center justify-center text-center relative z-10">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center opacity-10">
          <motion.div
            animate={{
              rotate: 360
            }}
            transition={{
              duration: 100,
              repeat: Infinity,
              ease: 'linear'
            }}
            className="w-[800px] h-[800px] border-[1px] border-white/20 rounded-full absolute" />

          <motion.div
            animate={{
              rotate: -360
            }}
            transition={{
              duration: 150,
              repeat: Infinity,
              ease: 'linear'
            }}
            className="w-[600px] h-[600px] border-[1px] border-white/30 rounded-full absolute" />

        </div>

        <motion.div
          initial={{
            scale: 0.8,
            opacity: 0
          }}
          animate={{
            scale: 1,
            opacity: 1
          }}
          transition={{
            duration: 0.8,
            ease: 'easeOut'
          }}
          className="mb-12 flex items-center space-x-8">

          <div className="w-24 h-24 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-2xl">
            <Send className="w-12 h-12 text-[#2563EB]" />
          </div>
          <div className="w-24 h-24 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-2xl">
            <BrainCircuit className="w-12 h-12 text-[#F59E0B]" />
          </div>
          <div className="w-24 h-24 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-2xl">
            <Building2 className="w-12 h-12 text-[#10B981]" />
          </div>
        </motion.div>

        <motion.h1
          initial={{
            y: 20,
            opacity: 0
          }}
          animate={{
            y: 0,
            opacity: 1
          }}
          transition={{
            duration: 0.8,
            delay: 0.2
          }}
          className="text-7xl font-extrabold tracking-tight mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white drop-shadow-lg">

          SmartMurojaat
        </motion.h1>

        <motion.h2
          initial={{
            y: 20,
            opacity: 0
          }}
          animate={{
            y: 0,
            opacity: 1
          }}
          transition={{
            duration: 0.8,
            delay: 0.3
          }}
          className="text-4xl font-bold text-white mb-4 tracking-wide">

        </motion.h2>

        <motion.p
          initial={{
            y: 20,
            opacity: 0
          }}
          animate={{
            y: 0,
            opacity: 1
          }}
          transition={{
            duration: 0.8,
            delay: 0.4
          }}
          className="text-2xl font-medium text-blue-200 mb-8 tracking-wide">

          Sun'iy intellekt asosidagi murojaat va munitsipal javob platformasi
        </motion.p>

        <motion.p
          initial={{
            y: 20,
            opacity: 0
          }}
          animate={{
            y: 0,
            opacity: 1
          }}
          transition={{
            duration: 0.8,
            delay: 0.5
          }}
          className="text-3xl font-medium text-[#F59E0B] mb-12 tracking-wide">

          Murojaatdan yechimga — samarali va oqilona
        </motion.p>

        <motion.div
          initial={{
            y: 20,
            opacity: 0
          }}
          animate={{
            y: 0,
            opacity: 1
          }}
          transition={{
            duration: 0.8,
            delay: 0.6
          }}
          className="px-8 py-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">

          <p className="text-xl text-blue-100">
            Fuqarolar murojaatlari uchun Sun'iy intellekt asosidagi platforma
          </p>
        </motion.div>
      </div>
    </SlideLayout>);

}
