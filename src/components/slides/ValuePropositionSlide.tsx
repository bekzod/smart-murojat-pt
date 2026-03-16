import React from 'react';
import { motion } from 'framer-motion';
import { SlideLayout } from '../ui/SlideLayout';
import { Zap, Eye, Target, Quote } from 'lucide-react';
export function ValuePropositionSlide({ slideNumber, totalSlides }: any) {
  return (
    <SlideLayout
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      bgVariant="accent">
      
      <div className="flex-1 flex flex-col items-center justify-center text-center px-12 relative">
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
            duration: 0.6
          }}
          className="mb-8">
          
          <Quote className="w-20 h-20 text-white/20 mx-auto" />
        </motion.div>

        <motion.h2
          initial={{
            opacity: 0,
            scale: 0.95
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 0.8,
            delay: 0.2
          }}
          className="text-5xl md:text-6xl font-bold text-white leading-tight max-w-5xl mb-16 drop-shadow-lg">
          
          SmartMurojaat mahalliy hokimiyatlarga fuqarolar murojaatlariga tezroq
          javob berishga, dala operatsiyalarini yaxshiroq boshqarishga va
          shaffof, AI asosidagi xizmat ko'rsatish orqali ishonchni
          mustahkamlashga yordam beradi.
        </motion.h2>

        <div className="grid grid-cols-3 gap-12 w-full max-w-4xl">
          {[
          {
            icon: Zap,
            title: 'Tezkorlik'
          },
          {
            icon: Eye,
            title: 'Shaffoflik'
          },
          {
            icon: Target,
            title: 'Samaradorlik'
          }].
          map((item, i) =>
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.6 + i * 0.2
            }}
            className="flex flex-col items-center">
            
              <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-4 shadow-xl">
                <item.icon className="w-10 h-10 text-[#F59E0B]" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-wide uppercase">
                {item.title}
              </h3>
            </motion.div>
          )}
        </div>
      </div>
    </SlideLayout>);

}