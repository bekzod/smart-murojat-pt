import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { SlideLayout } from '../ui/SlideLayout';
import {
  Droplets,
  Zap,
  ZapOff,
  Construction,
  Lightbulb,
  Trash2,
  Camera,
  MapPin,
  MessageSquare,
  Hash,
  Bell,
  Send } from
'lucide-react';
export function TelegramBotSlide({ slideNumber, totalSlides }: any) {
  const listVariants = {
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
  return (
    <SlideLayout
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      title="Telegram Bot: Fuqarolar interfeysi"
      bgVariant="light">
      
      <div className="flex-1 grid grid-cols-[400px_1fr] gap-16 mt-8">
        {/* Left: Phone Mockup */}
        <motion.div
          initial={{
            opacity: 0,
            y: 50
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.7
          }}
          className="relative mx-auto w-full max-w-[320px] h-[600px] bg-slate-900 rounded-[3rem] border-[12px] border-slate-800 shadow-2xl overflow-hidden flex flex-col">
          
          {/* Notch */}
          <div className="absolute top-0 inset-x-0 h-6 bg-slate-800 rounded-b-3xl w-40 mx-auto z-20" />

          {/* Telegram Header */}
          <div className="bg-[#17212B] pt-10 pb-3 px-4 flex items-center space-x-3 shadow-md z-10">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
              <Send className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="text-white font-medium text-sm">
                SmartMurojaat Bot
              </h4>
              <p className="text-blue-400 text-xs">bot</p>
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 bg-[#0E1621] p-4 flex flex-col justify-end space-y-4 overflow-hidden relative">
            <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
                originBottomLeft: 1
              }}
              animate={{
                opacity: 1,
                scale: 1
              }}
              transition={{
                delay: 0.5
              }}
              className="bg-[#182533] text-white p-3 rounded-2xl rounded-tl-none max-w-[85%] text-sm shadow-sm">
              
              Assalomu alaykum! Muammo haqida xabar berish uchun rasm, manzil va
              qisqacha ta'rif yuboring.
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
                originBottomRight: 1
              }}
              animate={{
                opacity: 1,
                scale: 1
              }}
              transition={{
                delay: 1.5
              }}
              className="bg-[#2B5278] text-white p-3 rounded-2xl rounded-tr-none max-w-[85%] self-end text-sm shadow-sm">
              
              <div className="w-full h-24 bg-slate-700 rounded-lg mb-2 flex items-center justify-center">
                <Camera className="w-6 h-6 text-slate-400" />
              </div>
              12-maktab yaqinida suv quvuri yorilgan, yo'lni suv bosgan.
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
                originBottomLeft: 1
              }}
              animate={{
                opacity: 1,
                scale: 1
              }}
              transition={{
                delay: 2.5
              }}
              className="bg-[#182533] text-white p-3 rounded-2xl rounded-tl-none max-w-[85%] text-sm shadow-sm border border-blue-500/30">
              
              ✅ Qabul qilindi! Murojaat raqami: <b>#SM-4092</b>. Suv ta'minoti
              bo'limiga yuborildi.
            </motion.div>
          </div>

          {/* Input Area */}
          <div className="bg-[#17212B] p-3 flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center">
              <MapPin className="w-4 h-4 text-slate-300" />
            </div>
            <div className="flex-1 h-10 rounded-full bg-[#242F3D] px-4 flex items-center">
              <span className="text-slate-500 text-sm">Xabar...</span>
            </div>
          </div>
        </motion.div>

        {/* Right: Features */}
        <div className="flex flex-col justify-center space-y-10">
          <div>
            <h3 className="text-2xl font-bold text-[#1E3A5F] mb-6 flex items-center">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 text-sm">
                A
              </span>
              Xabar berish mumkin bo'lgan muammolar:
            </h3>
            <motion.div
              variants={listVariants}
              initial="hidden"
              animate="show"
              className="grid grid-cols-2 gap-4">
              
              {[
              {
                icon: Droplets,
                text: 'Suv quvuri yorilishi',
                color: 'text-blue-500',
                bg: 'bg-blue-50'
              },
              {
                icon: Zap,
                text: 'Elektr simlari xavfi',
                color: 'text-amber-500',
                bg: 'bg-amber-50'
              },
              {
                icon: Droplets,
                text: "Suv ta'minoti yo'qligi",
                color: 'text-cyan-500',
                bg: 'bg-cyan-50'
              },
              {
                icon: ZapOff,
                text: "Elektr ta'minoti yo'qligi",
                color: 'text-slate-500',
                bg: 'bg-slate-100'
              },
              {
                icon: Construction,
                text: "Yo'l chuqurlari",
                color: 'text-orange-500',
                bg: 'bg-orange-50'
              },
              {
                icon: Lightbulb,
                text: "Ko'cha chiroqlari",
                color: 'text-yellow-500',
                bg: 'bg-yellow-50'
              },
              {
                icon: Trash2,
                text: 'Chiqindi va sanitariya',
                color: 'text-green-500',
                bg: 'bg-green-50'
              }].
              map((item, i) =>
              <motion.div
                key={i}
                variants={itemVariants}
                className="flex items-center space-x-3 bg-white p-3 rounded-xl shadow-sm border border-slate-100">
                
                  <div
                  className={`w-10 h-10 rounded-lg ${item.bg} flex items-center justify-center shrink-0`}>
                  
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <span className="text-slate-700 font-medium">
                    {item.text}
                  </span>
                </motion.div>
              )}
            </motion.div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#1E3A5F] mb-6 flex items-center">
              <span className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 text-sm">
                B
              </span>
              Yuborish va olish mumkin:
            </h3>
            <motion.div
              variants={listVariants}
              initial="hidden"
              animate="show"
              className="flex flex-wrap gap-4">
              
              {[
              {
                icon: Camera,
                text: 'Foto dalil'
              },
              {
                icon: MapPin,
                text: 'Aniq joylashuv'
              },
              {
                icon: MessageSquare,
                text: 'Matn / Ovoz'
              },
              {
                icon: Hash,
                text: 'Kuzatuv raqami'
              },
              {
                icon: Bell,
                text: 'Holat yangilanishi'
              }].
              map((item, i) =>
              <motion.div
                key={i}
                variants={itemVariants}
                className="flex items-center space-x-2 bg-[#1E3A5F] text-white px-4 py-2 rounded-full shadow-md">
                
                  <item.icon className="w-4 h-4 text-blue-300" />
                  <span className="font-medium">{item.text}</span>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </SlideLayout>);

}