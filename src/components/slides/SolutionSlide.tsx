import React from 'react';
import { motion } from 'framer-motion';
import { SlideLayout } from '../ui/SlideLayout';
import { Send, Monitor, ArrowRightLeft, ShieldCheck } from 'lucide-react';
export function SolutionSlide({ slideNumber, totalSlides }: any) {
  return (
    <SlideLayout
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      title="Yechim: SmartMurojaat"
      bgVariant="light">
      
      <div className="flex-1 flex flex-col items-center justify-center mt-4">
        <div className="w-full max-w-6xl grid grid-cols-[1fr_auto_1fr] gap-8 items-center">
          {/* Card 1: Telegram Bot */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 0.6
            }}
            className="bg-white rounded-3xl p-10 shadow-xl border border-blue-100 flex flex-col items-center text-center relative overflow-hidden group">
            
            <div className="absolute top-0 left-0 w-full h-2 bg-[#0088CC]" />
            <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Send className="w-12 h-12 text-[#0088CC]" />
            </div>
            <h3 className="text-3xl font-bold text-[#1E3A5F] mb-4">
              Fuqarolar uchun
              <br />
              Telegram bot
            </h3>
            <p className="text-xl text-slate-600">
              Muammolarni tez va oson xabar berish, holatni real vaqtda kuzatish
            </p>
          </motion.div>

          {/* Center Bridge */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.5
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 0.5,
              delay: 0.4
            }}
            className="flex flex-col items-center justify-center space-y-4">
            
            <div className="w-16 h-16 rounded-full bg-[#1E3A5F] flex items-center justify-center shadow-lg relative z-10">
              <ArrowRightLeft className="w-8 h-8 text-white" />
            </div>
            <div className="h-24 w-1 bg-gradient-to-b from-[#0088CC] to-[#10B981] rounded-full" />
          </motion.div>

          {/* Card 2: Dashboard */}
          <motion.div
            initial={{
              opacity: 0,
              x: 50
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.2
            }}
            className="bg-white rounded-3xl p-10 shadow-xl border border-green-100 flex flex-col items-center text-center relative overflow-hidden group">
            
            <div className="absolute top-0 left-0 w-full h-2 bg-[#10B981]" />
            <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Monitor className="w-12 h-12 text-[#10B981]" />
            </div>
            <h3 className="text-3xl font-bold text-[#1E3A5F] mb-4">
              Hokimiyat uchun
              <br />
              Markaziy panel
            </h3>
            <p className="text-xl text-slate-600">
              Murojaatlarni qabul qilish, tasniflash, tayinlash, kuzatish va hal
              qilish
            </p>
          </motion.div>
        </div>

        {/* Bottom Core Idea */}
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
            delay: 0.8
          }}
          className="mt-16 bg-[#1E3A5F] text-white px-10 py-6 rounded-2xl shadow-2xl flex items-center space-x-6 max-w-4xl w-full">
          
          <ShieldCheck className="w-12 h-12 text-[#F59E0B] shrink-0" />
          <div>
            <p className="text-sm text-blue-200 uppercase tracking-wider font-semibold mb-1">
              Asosiy g'oya
            </p>
            <p className="text-2xl font-medium leading-snug">
              Tarqoq murojaatlarni yagona, kuzatiladigan va mas'uliyatli tizimga
              aylantirish
            </p>
          </div>
        </motion.div>
      </div>
    </SlideLayout>);

}