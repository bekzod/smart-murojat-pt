import React from 'react';
import { motion } from 'framer-motion';
import { SlideLayout } from '../ui/SlideLayout';
import { Smartphone, Monitor, HardHat, CheckCircle2 } from 'lucide-react';
export function KeyFeaturesSlide({ slideNumber, totalSlides }: any) {
  const columns = [
  {
    icon: Smartphone,
    title: 'Fuqaro boti',
    headerColor: 'bg-blue-600',
    iconColor: 'text-blue-600',
    features: [
    'Telegram orqali kirish',
    'Matn / ovoz / foto orqali xabar berish',
    'Joylashuv belgisi',
    'Avtomatik tasniflash',
    'Murojaat raqami yaratish',
    'Real vaqt kuzatuv',
    "Ko'p tilli muloqot",
    'Hal qilinganidan keyin fikr-mulohaza']

  },
  {
    icon: Monitor,
    title: 'Admin paneli',
    headerColor: 'bg-green-600',
    iconColor: 'text-green-600',
    features: [
    'Jonli hodisa oqimi',
    'Interaktiv shahar xaritasi',
    'Tahlillar',
    'Rolga asoslangan kirish',
    'Tayinlash va eskalatsiya',
    'Holat boshqaruvi',
    'Dalillar arxivi',
    "Bo'lim hisobotlari",
    'Eksport qilinadigan hisobotlar']

  },
  {
    icon: HardHat,
    title: "Mas'ul xodim paneli",
    headerColor: 'bg-amber-500',
    iconColor: 'text-amber-500',
    features: [
    'Faqat tayinlangan murojaatlar',
    'Shoshilinch ogohlantirishlar',
    'Muddatlar va ustuvorliklar',
    'Marshrut rejalashtirish',
    'Hal qilish fotosini yuklash',
    'Jarayon yangilanishlari',
    'Ichki izohlar']

  }];

  return (
    <SlideLayout
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      title="Asosiy funksiyalar"
      bgVariant="light">
      
      <div className="flex-1 grid grid-cols-3 gap-8 mt-8">
        {columns.map((col, i) =>
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
            delay: i * 0.2
          }}
          className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden flex flex-col">
          
            <div
            className={`${col.headerColor} p-6 flex flex-col items-center justify-center text-white`}>
            
              <col.icon className="w-12 h-12 mb-3" />
              <h3 className="text-2xl font-bold">{col.title}</h3>
            </div>
            <div className="p-6 flex-1 bg-slate-50">
              <ul className="space-y-4">
                {col.features.map((feature, j) =>
              <motion.li
                key={j}
                initial={{
                  opacity: 0,
                  x: -10
                }}
                animate={{
                  opacity: 1,
                  x: 0
                }}
                transition={{
                  duration: 0.3,
                  delay: i * 0.2 + j * 0.1
                }}
                className="flex items-start space-x-3">
                
                    <CheckCircle2
                  className={`w-5 h-5 ${col.iconColor} shrink-0 mt-0.5`} />
                
                    <span className="text-slate-700 font-medium">
                      {feature}
                    </span>
                  </motion.li>
              )}
              </ul>
            </div>
          </motion.div>
        )}
      </div>
    </SlideLayout>);

}