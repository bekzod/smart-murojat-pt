import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { SlideLayout } from '../ui/SlideLayout';
import {
  XCircle,
  CheckCircle2,
  AlertOctagon,
  EyeOff,
  Clock,
  Bot,
  LayoutDashboard,
  ShieldCheck,
  ArrowRight } from
'lucide-react';
export function SalesPitchSlide({ slideNumber, totalSlides }: any) {
  const containerVariants = {
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
  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -20
    },
    show: {
      opacity: 1,
      x: 0
    }
  };
  const beforeItems = [
  {
    icon: Clock,
    text: 'Bugun murojaatlar sekin, tarqoq va boshqarish qiyin'
  },
  {
    icon: AlertOctagon,
    text: 'Fuqarolar muammoni qayerga xabar berishni bilmaydi'
  },
  {
    icon: XCircle,
    text: "Bo'limlar murojaatlarni qo'lda yo'naltirishga vaqt sarflaydi"
  },
  {
    icon: EyeOff,
    text: "Rahbariyat real vaqt holatini ko'ra olmaydi"
  }];

  const afterItems = [
  {
    icon: ArrowRight,
    text: "SmartMurojaat buni o'zgartiradi"
  },
  {
    icon: Bot,
    text: 'Fuqarolarga oddiy Telegram bot beradi'
  },
  {
    icon: LayoutDashboard,
    text: 'Hokimiyat va xizmat tashkilotlariga jonli boshqaruv paneli beradi'
  },
  {
    icon: CheckCircle2,
    text: 'Natija: Tizimning tez xizmati, kuchli nazorati, yaxshi muvofiqlashuvchi, yuqori ishonchli tizim'
  }];

  return (
    <SlideLayout
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      title="Nima uchun SmartMurojaat?"
      bgVariant="dark">
      
      <div className="flex-1 flex flex-col mt-6">
        <div className="grid grid-cols-2 gap-12 flex-1">
          {/* Before Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="bg-[#1E293B] border border-red-500/20 rounded-3xl p-8 shadow-xl flex flex-col relative overflow-hidden">
            
            <div className="absolute top-0 left-0 w-full h-2 bg-red-500/50" />
            <h3 className="text-2xl font-bold text-red-400 mb-8 flex items-center">
              <XCircle className="w-8 h-8 mr-3" />
              Hozirgi muammolar
            </h3>
            <div className="space-y-6">
              {beforeItems.map((item, i) =>
              <motion.div
                key={i}
                variants={itemVariants}
                className="flex items-start space-x-4">
                
                  <item.icon className="w-6 h-6 text-red-400 shrink-0 mt-1" />
                  <p className="text-lg text-slate-300 font-medium leading-snug">
                    {item.text}
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* After Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="bg-[#1E293B] border border-green-500/20 rounded-3xl p-8 shadow-xl flex flex-col relative overflow-hidden">
            
            <div className="absolute top-0 left-0 w-full h-2 bg-green-500/50" />
            <h3 className="text-2xl font-bold text-green-400 mb-8 flex items-center">
              <CheckCircle2 className="w-8 h-8 mr-3" />
              SmartMurojaat yechimi
            </h3>
            <div className="space-y-6">
              {afterItems.map((item, i) =>
              <motion.div
                key={i}
                variants={itemVariants}
                className="flex items-start space-x-4">
                
                  <item.icon className="w-6 h-6 text-green-400 shrink-0 mt-1" />
                  <p className="text-lg text-white font-medium leading-snug">
                    {item.text}
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Bottom Emphasis Box */}
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
          className="mt-10 bg-gradient-to-r from-[#2563EB] to-[#1E3A5F] rounded-2xl p-8 shadow-2xl flex items-center space-x-6 border border-blue-400/30">
          
          <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-8 h-8 text-[#F59E0B]" />
          </div>
          <p className="text-2xl font-bold text-white leading-tight">
            Bu shunchaki chatbot emas — bu zamonaviy mahalliy hokimiyat uchun
            raqamli infratuzilma boshqaruv tizimi.
          </p>
        </motion.div>
      </div>
    </SlideLayout>);

}