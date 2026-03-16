import React from 'react';
import { motion } from 'framer-motion';
import { SlideLayout } from '../ui/SlideLayout';
import {
  User,
  BrainCircuit,
  Tag,
  AlertOctagon,
  MapPin,
  ArrowRight,
  Users,
  CheckCircle2 } from
'lucide-react';
export function AIExampleSlide({ slideNumber, totalSlides }: any) {
  const steps = [
  {
    icon: Tag,
    text: 'Suv infratuzilmasi favqulodda holati deb tasnifladi',
    color: 'text-blue-600',
    bg: 'bg-blue-100'
  },
  {
    icon: AlertOctagon,
    text: 'Yuqori darajali shoshilinchlik deb belgiladi',
    color: 'text-red-600',
    bg: 'bg-red-100'
  },
  {
    icon: MapPin,
    text: 'Taxminiy joylashuvni aniqladi',
    color: 'text-green-600',
    bg: 'bg-green-100'
  },
  {
    icon: ArrowRight,
    text: "Suv xizmati bo'limiga yo'naltirdi",
    color: 'text-purple-600',
    bg: 'bg-purple-100'
  },
  {
    icon: Users,
    text: 'Kechiksa, menejerga eskalatsiya qiladi',
    color: 'text-amber-600',
    bg: 'bg-amber-100'
  }];

  return (
    <SlideLayout
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      title="AI amalda: Haqiqiy misol"
      bgVariant="light">
      
      <div className="flex-1 grid grid-cols-[1fr_auto_1fr] gap-8 items-center mt-4">
        {/* Left: Citizen Message */}
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
          className="flex flex-col items-end">
          
          <div className="flex items-center space-x-3 mb-4 self-start ml-12">
            <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center">
              <User className="w-6 h-6 text-slate-500" />
            </div>
            <span className="text-lg font-medium text-slate-600">
              Fuqaro yozadi:
            </span>
          </div>

          <div className="bg-white p-8 rounded-3xl rounded-tr-none shadow-xl border border-slate-200 max-w-md relative">
            <div className="absolute top-0 right-0 w-6 h-6 bg-white transform translate-x-1/2 -translate-y-1/2 rotate-45 border-t border-r border-slate-200" />
            <p className="text-2xl text-[#1E3A5F] font-medium leading-relaxed italic">
              "12-maktab yaqinida suv quvuri yorilgan, yo'lni suv bosgan."
            </p>
          </div>
        </motion.div>

        {/* Center: AI Brain */}
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
            duration: 0.6,
            delay: 0.3
          }}
          className="flex flex-col items-center justify-center px-8">
          
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#2563EB] to-[#1E3A5F] flex items-center justify-center shadow-2xl relative z-10">
            <BrainCircuit className="w-12 h-12 text-white" />
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                repeat: Infinity,
                duration: 2
              }}
              className="absolute inset-0 rounded-full border-4 border-blue-400" />
            
          </div>
          <p className="mt-4 font-bold text-[#1E3A5F] text-xl">AI Tahlili</p>
        </motion.div>

        {/* Right: AI Actions */}
        <div className="flex flex-col space-y-4 relative">
          {/* Connecting Line */}
          <div className="absolute left-[1.1rem] top-8 bottom-8 w-1 bg-slate-200 rounded-full z-0" />

          {steps.map((step, i) =>
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              x: 50
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 0.5,
              delay: 0.6 + i * 0.2
            }}
            className="flex items-center space-x-6 relative z-10">
            
              <div
              className={`w-10 h-10 rounded-full ${step.bg} border-4 border-white shadow-md flex items-center justify-center shrink-0`}>
              
                <CheckCircle2 className={`w-5 h-5 ${step.color}`} />
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex-1 flex items-center space-x-4">
                <step.icon className={`w-6 h-6 ${step.color} shrink-0`} />
                <span className="text-lg font-medium text-slate-700">
                  {step.text}
                </span>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </SlideLayout>);

}