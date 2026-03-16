import React from 'react';
import { motion } from 'framer-motion';
import { SlideLayout } from '../ui/SlideLayout';
import {
  Timer,
  Shield,
  Heart,
  TrendingDown,
  Lightbulb,
  Database,
  Expand } from
'lucide-react';
export function MainBenefitsSlide({ slideNumber, totalSlides }: any) {
  const benefits = [
  {
    icon: Timer,
    text: 'Tezroq javob vaqti',
    colSpan: 'col-span-1'
  },
  {
    icon: Shield,
    text: 'Kuchli hisobdorlik',
    colSpan: 'col-span-1'
  },
  {
    icon: Heart,
    text: 'Oshgan jamoat ishonchi',
    colSpan: 'col-span-1'
  },
  {
    icon: TrendingDown,
    text: "Kamaytirilgan qo'lda ish yuki",
    colSpan: 'col-span-1'
  },
  {
    icon: Lightbulb,
    text: 'Yaxshiroq qaror qabul qilish',
    colSpan: 'col-span-1'
  },
  {
    icon: Database,
    text: 'Dalillarga asoslangan operatsiyalar',
    colSpan: 'col-span-1'
  },
  {
    icon: Expand,
    text: "Tumanlar va bo'limlar bo'ylab kengayish",
    colSpan: 'col-span-3'
  }];

  return (
    <SlideLayout
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      title="Asosiy afzalliklar"
      bgVariant="dark">
      
      <div className="flex-1 flex items-center justify-center mt-4">
        <div className="grid grid-cols-3 gap-6 w-full max-w-5xl">
          {benefits.map((benefit, i) =>
          <motion.div
            key={i}
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
              delay: i * 0.1
            }}
            className={`bg-[#1E293B] border border-slate-700 rounded-2xl p-6 flex items-center space-x-6 hover:bg-[#2D3748] transition-colors ${benefit.colSpan}`}>
            
              <div className="w-16 h-16 rounded-xl bg-blue-500/20 flex items-center justify-center shrink-0">
                <benefit.icon className="w-8 h-8 text-blue-400" />
              </div>
              <p className="text-2xl font-semibold text-white">
                {benefit.text}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </SlideLayout>);

}