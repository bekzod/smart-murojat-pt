import React from 'react';
import { motion } from 'framer-motion';
import { SlideLayout } from '../ui/SlideLayout';
import { CheckCircle2, ArrowRight, Building2 } from 'lucide-react';
export function ConclusionSlide({ slideNumber, totalSlides }: any) {
  const takeaways = [
  'SmartMurojaat fuqarolar murojaatlarini tizimli operatsion jarayonga aylantiradi',
  "Telegram + Sun'iy intellekt + boshqaruv paneli = tez, shaffof va mas'uliyatli xizmat modeli",
  'Hokimiyatlar uchun amaliy aqlli shahar yechimi'];

  return (
    <SlideLayout
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      bgVariant="gradient">

      <div className="flex-1 flex flex-col items-center justify-center text-center relative z-10 px-12">
        <motion.h2
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
          className="text-5xl font-bold text-white mb-16">

          Xulosa
        </motion.h2>

        <div className="w-full max-w-4xl space-y-6 mb-16 text-left">
          {takeaways.map((text, i) =>
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              x: -30
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 0.5,
              delay: 0.3 + i * 0.2
            }}
            className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl flex items-center space-x-6">

              <div className="w-12 h-12 rounded-full bg-[#10B981] flex items-center justify-center shrink-0 shadow-lg">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <p className="text-2xl font-medium text-white">{text}</p>
            </motion.div>
          )}
        </div>

        <motion.div
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
            delay: 1
          }}
          className="flex flex-col items-center">

          {/* <button className="bg-[#F59E0B] hover:bg-amber-400 text-[#0A1628] text-2xl font-bold py-5 px-10 rounded-full shadow-2xl flex items-center space-x-4 transition-all hover:scale-105">
            <span>Pilot loyihani boshlash | Hamkorlik</span>
            <ArrowRight className="w-8 h-8" />
          </button> */}

          <div className="mt-12 flex items-center space-x-3 opacity-80">
            <Building2 className="w-8 h-8 text-white" />
            <span className="text-3xl font-bold tracking-tight text-white">
              SmartMurojaat
            </span>
          </div>
        </motion.div>
      </div>
    </SlideLayout>);

}
