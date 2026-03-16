import { motion } from 'framer-motion';
import { SlideLayout } from '../ui/SlideLayout';
import {
  Smartphone,
  Download,
  Rocket,
  GraduationCap,
  Share2,
  Send } from
'lucide-react';
export function WhyTelegramSlide({ slideNumber, totalSlides }: any) {
  const cards = [
  {
    icon: Smartphone,
    text: 'Odamlar allaqachon har kuni foydalanadi'
  },
  {
    icon: Download,
    text: "Yangi ilova o'rnatish shart emas",
    hasX: true
  },
  {
    icon: Rocket,
    text: 'Tezroq qabul qilish va ommalashish'
  },
  {
    icon: GraduationCap,
    text: "Past o'rganish to'sig'i"
  },
  {
    icon: Share2,
    text: 'Foto va joylashuvni oson ulashish'
  },
  {
    icon: Smartphone,
    text: 'Past texnik xususiyatli qurilmalarda ham ishlaydi'
  }];

  return (
    <SlideLayout
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      title="Nima uchun Telegram?"
      bgVariant="telegram">

      <div className="flex-1 flex flex-col items-center justify-center mt-4">
        <motion.div
          initial={{
            scale: 0,
            opacity: 0
          }}
          animate={{
            scale: 1,
            opacity: 1
          }}
          transition={{
            type: 'spring',
            stiffness: 200,
            damping: 20
          }}
          className="mb-12">

          <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-2xl">
            <Send className="w-16 h-16 text-[#0088CC]" />
          </div>
        </motion.div>

        <div className="grid grid-cols-3 gap-8 w-full max-w-5xl">
          {cards.map((card, i) =>
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
              duration: 0.5,
              delay: 0.2 + i * 0.1
            }}
            className="bg-white rounded-2xl p-6 shadow-xl flex flex-col items-center text-center relative overflow-hidden group hover:-translate-y-2 transition-transform">

              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-4 relative">
                <card.icon className="w-8 h-8 text-[#0088CC]" />
                {card.hasX &&
              <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-1 bg-red-500 rotate-45 rounded-full" />
                  </div>
              }
              </div>
              <p className="text-xl font-bold text-[#1E3A5F]">{card.text}</p>
            </motion.div>
          )}
        </div>
      </div>
    </SlideLayout>);

}
