import React from 'react';
import { motion } from 'framer-motion';
import { SlideLayout } from '../ui/SlideLayout';
import { Quote, Network, Cpu, ShieldCheck } from 'lucide-react';
export function PositioningSlide({ slideNumber, totalSlides }: any) {
  const pillars = [
  {
    icon: Network,
    title: 'Markazlashtirish',
    desc: 'Barcha fuqaro murojaatlarini yagona tizimga jamlash'
  },
  {
    icon: Cpu,
    title: 'Avtomatlashtirish',
    desc: "AI yordamida muammolarni to'g'ri bo'limlarga yo'naltirish"
  },
  {
    icon: ShieldCheck,
    title: 'Nazorat',
    desc: "Bo'limga xos panellar orqali bajarilishni ta'minlash"
  }];

  return (
    <SlideLayout
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      title="Pozitsiyalash bayonoti"
      bgVariant="accent">
      
      <div className="flex-1 flex flex-col items-center justify-center text-center px-8 relative mt-4">
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
            duration: 0.6
          }}
          className="mb-8">
          
          <Quote className="w-16 h-16 text-[#F59E0B]/40 mx-auto" />
        </motion.div>

        <motion.h2
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.2
          }}
          className="text-3xl md:text-4xl font-bold text-white leading-relaxed max-w-5xl mb-16 drop-shadow-lg">
          
          Tarqoq murojaat boshqaruvidan aziyat chekayotgan mahalliy hokimiyatlar
          va kommunal tashkilotlar uchun{' '}
          <span className="text-[#F59E0B]">SmartMurojaat</span> — fuqarolar
          murojaatlarini markazlashtiruvchi, yo'naltirishni avtomatlashtiruvchi
          va bo'limga xos boshqaruv panellari orqali nazoratli bajarilishni
          ta'minlovchi AI asosidagi Telegram platformasidir.
        </motion.h2>

        <div className="grid grid-cols-3 gap-8 w-full max-w-5xl">
          {pillars.map((pillar, i) =>
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
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 flex flex-col items-center shadow-xl hover:bg-white/20 transition-colors">
            
              <div className="w-16 h-16 rounded-2xl bg-[#1E3A5F]/50 flex items-center justify-center mb-6 border border-white/10">
                <pillar.icon className="w-8 h-8 text-[#F59E0B]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">
                {pillar.title}
              </h3>
              <p className="text-blue-100 font-medium leading-snug">
                {pillar.desc}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </SlideLayout>);

}