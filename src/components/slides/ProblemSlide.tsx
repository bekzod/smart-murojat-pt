import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { SlideLayout } from '../ui/SlideLayout';
import {
  XCircle,
  FileQuestion,
  PhoneOff,
  MapPinOff,
  EyeOff,
  AlertOctagon } from
'lucide-react';
export function ProblemSlide({ slideNumber, totalSlides }: any) {
  const container = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };
  const item = {
    hidden: {
      opacity: 0,
      x: -20
    },
    show: {
      opacity: 1,
      x: 0
    }
  };
  return (
    <SlideLayout
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      title="Muammo: Hozirgi holat"
      bgVariant="light">
      
      <div className="flex-1 flex flex-col h-full mt-8">
        <div className="flex-1 grid grid-cols-2 gap-12">
          {/* Left Column - Problems */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col justify-center space-y-6">
            
            <motion.div
              variants={item}
              className="flex items-start space-x-4 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
              
              <PhoneOff className="w-8 h-8 text-[#EF4444] shrink-0 mt-1" />
              <p className="text-xl text-slate-700 font-medium">
                Murojaatlar telefon, qog'oz yoki norasmiy kanallar orqali
                yuboriladi
              </p>
            </motion.div>

            <motion.div
              variants={item}
              className="flex items-start space-x-4 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
              
              <FileQuestion className="w-8 h-8 text-[#EF4444] shrink-0 mt-1" />
              <p className="text-xl text-slate-700 font-medium">
                Murojaatlar bo'limlar orasida yo'qolib ketadi
              </p>
            </motion.div>

            <motion.div
              variants={item}
              className="flex items-start space-x-4 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
              
              <XCircle className="w-8 h-8 text-[#EF4444] shrink-0 mt-1" />
              <p className="text-xl text-slate-700 font-medium">
                Noto'g'ri bo'limga yuborilgani sababli kechikishlar yuzaga
                keladi
              </p>
            </motion.div>

            <motion.div
              variants={item}
              className="flex items-start space-x-4 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
              
              <MapPinOff className="w-8 h-8 text-[#EF4444] shrink-0 mt-1" />
              <p className="text-xl text-slate-700 font-medium">
                Foto va joylashuv ma'lumotlarisiz tekshirish qiyin
              </p>
            </motion.div>

            <motion.div
              variants={item}
              className="flex items-start space-x-4 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
              
              <EyeOff className="w-8 h-8 text-[#EF4444] shrink-0 mt-1" />
              <p className="text-xl text-slate-700 font-medium">
                Fuqarolar va rahbariyat holat kuzatishni shaffof ko'ra olmaydi
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 0.6,
              delay: 0.4
            }}
            className="flex items-center justify-center relative">
            
            <div className="relative w-full aspect-square max-w-md">
              <div className="absolute inset-0 bg-red-50 rounded-full animate-pulse opacity-50" />
              <div className="absolute inset-8 bg-red-100 rounded-full flex items-center justify-center shadow-inner">
                <AlertOctagon className="w-32 h-32 text-[#EF4444] opacity-20" />
              </div>

              {/* Floating broken elements */}
              <motion.div
                animate={{
                  y: [0, -10, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity
                }}
                className="absolute top-1/4 left-1/4 bg-white p-4 rounded-lg shadow-lg rotate-[-12deg] border border-red-100">
                
                <FileQuestion className="w-10 h-10 text-slate-400" />
              </motion.div>
              <motion.div
                animate={{
                  y: [0, 15, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: 1
                }}
                className="absolute bottom-1/3 right-1/4 bg-white p-4 rounded-lg shadow-lg rotate-[15deg] border border-red-100">
                
                <PhoneOff className="w-10 h-10 text-slate-400" />
              </motion.div>
              <motion.div
                animate={{
                  y: [0, -15, 0]
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  delay: 0.5
                }}
                className="absolute top-1/3 right-1/4 bg-white p-4 rounded-lg shadow-lg rotate-[25deg] border border-red-100">
                
                <XCircle className="w-10 h-10 text-slate-400" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Result Box */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.5,
            delay: 0.8
          }}
          className="mt-8 bg-red-50 border-l-4 border-[#EF4444] p-6 rounded-r-xl shadow-sm">
          
          <div className="flex items-center space-x-4">
            <AlertOctagon className="w-8 h-8 text-[#EF4444]" />
            <p className="text-2xl font-bold text-[#EF4444]">
              Natija: sekin javob, past ishonch, zaif muvofiqlashtirish,
              mas'uliyat yo'qligi
            </p>
          </div>
        </motion.div>
      </div>
    </SlideLayout>);

}