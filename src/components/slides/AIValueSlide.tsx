import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { SlideLayout } from '../ui/SlideLayout';
import {
  Brain,
  FileSearch,
  ScanEye,
  AlertTriangle,
  Route,
  Copy,
  FileText,
  Languages,
  Sparkles } from
'lucide-react';
export function AIValueSlide({ slideNumber, totalSlides }: any) {
  const cards = [
  {
    icon: Brain,
    text: 'Murojaat turini avtomatik aniqlash'
  },
  {
    icon: FileSearch,
    text: "Xabarlardan muhim ma'lumotlarni ajratish"
  },
  {
    icon: ScanEye,
    text: 'Rasmlarni tahlil qilib, muammo toifasini aniqlash'
  },
  {
    icon: AlertTriangle,
    text: 'Xavfli hodisalarni ustuvorlashtirish'
  },
  {
    icon: Route,
    text: "Murojaatni to'g'ri bo'limga yo'naltirish"
  },
  {
    icon: Copy,
    text: 'Bir hududdan takroriy murojaatlarni aniqlash'
  },
  {
    icon: FileText,
    text: 'Xodimlar uchun xulosalar tayyorlash'
  },
  {
    icon: Languages,
    text: "Ko'p tilli muloqotni qo'llab-quvvatlash"
  }];

  const containerVariants = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1
    }
  };
  return (
    <SlideLayout
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      title="Sun'iy intellekt: Ish jarayoni dvigiteli"
      bgVariant="accent">
      
      <div className="flex-1 flex flex-col mt-2">
        <motion.div
          initial={{
            opacity: 0,
            y: -10
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.5
          }}
          className="mb-8">
          
          <p className="text-2xl text-blue-200 font-light flex items-center">
            <Sparkles className="w-6 h-6 mr-3 text-[#F59E0B]" />
            AI — bu shunchaki chatbot emas, balki to'liq ish jarayoni dvigiteli
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex-1 grid grid-cols-4 gap-6">
          
          {cards.map((card, i) =>
          <motion.div
            key={i}
            variants={cardVariants}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex flex-col items-center text-center hover:bg-white/20 transition-colors duration-300">
            
              <div className="w-16 h-16 rounded-full bg-blue-500/30 flex items-center justify-center mb-6 shadow-inner">
                <card.icon className="w-8 h-8 text-white" />
              </div>
              <p className="text-lg font-medium text-white leading-snug">
                {card.text}
              </p>
            </motion.div>
          )}
        </motion.div>

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
            duration: 0.5,
            delay: 1
          }}
          className="mt-8 bg-[#F59E0B] text-[#0A1628] py-4 px-8 rounded-xl shadow-xl self-center">
          
          <p className="text-2xl font-bold flex items-center">
            <Brain className="w-8 h-8 mr-3" />
            Operator ish yukini sezilarli kamaytiradi
          </p>
        </motion.div>
      </div>
    </SlideLayout>);

}