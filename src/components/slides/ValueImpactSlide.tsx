import React from 'react';
import { motion } from 'framer-motion';
import { SlideLayout } from '../ui/SlideLayout';
import { Users, Building2, Wrench, CheckCircle } from 'lucide-react';
export function ValueImpactSlide({ slideNumber, totalSlides }: any) {
  const columns = [
  {
    title: 'Fuqarolar uchun',
    icon: Users,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    items: [
    'Osonroq xabar berish',
    'Tezroq hal qilish',
    'Shaffof kuzatuv',
    'Kuchli ishonch']

  },
  {
    title: 'Hokimiyat uchun',
    icon: Building2,
    color: 'text-green-600',
    bg: 'bg-green-50',
    border: 'border-green-200',
    items: [
    'Markazlashtirilgan boshqaruv',
    'Kuchli hisobdorlik',
    "Samaradorlik ko'rinishi",
    'Tezkor nazorat']

  },
  {
    title: "Kommunal bo'limlar uchun",
    icon: Wrench,
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    items: [
    'Tizimli qabul',
    "Kamroq o'tkazib yuborilgan murojaatlar",
    'Yaxshiroq resurs taqsimoti',
    'Shoshilinch holatlarni oson ustuvorlashtirish',
    "Kamroq qo'lda muvofiqlashtirish"]

  }];

  return (
    <SlideLayout
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      title="Qiymat va ta'sir"
      bgVariant="light">
      
      <div className="flex-1 grid grid-cols-3 gap-8 mt-8">
        {columns.map((col, i) =>
        <motion.div
          key={i}
          initial={{
            opacity: 0,
            y: 40
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.6,
            delay: i * 0.2
          }}
          className={`bg-white rounded-3xl p-8 shadow-xl border-t-8 ${col.border} flex flex-col`}>
          
            <div
            className={`w-20 h-20 rounded-2xl ${col.bg} flex items-center justify-center mb-6`}>
            
              <col.icon className={`w-10 h-10 ${col.color}`} />
            </div>
            <h3 className="text-3xl font-bold text-[#1E3A5F] mb-8">
              {col.title}
            </h3>

            <ul className="space-y-6 flex-1">
              {col.items.map((item, j) =>
            <motion.li
              key={j}
              initial={{
                opacity: 0,
                x: -20
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              transition={{
                duration: 0.4,
                delay: i * 0.2 + j * 0.1 + 0.3
              }}
              className="flex items-start space-x-4">
              
                  <CheckCircle
                className={`w-6 h-6 ${col.color} shrink-0 mt-0.5`} />
              
                  <span className="text-xl text-slate-700 font-medium">
                    {item}
                  </span>
                </motion.li>
            )}
            </ul>
          </motion.div>
        )}
      </div>
    </SlideLayout>);

}