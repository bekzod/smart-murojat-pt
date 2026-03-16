import React from 'react';
import { motion } from 'framer-motion';
import { SlideLayout } from '../ui/SlideLayout';
import { Users, Building2, Wrench, HardHat } from 'lucide-react';
export function TargetUsersSlide({ slideNumber, totalSlides }: any) {
  const users = [
  {
    icon: Users,
    title: 'Fuqarolar',
    desc: 'Muammolarni tez va oson xabar berish, holat kuzatish',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-200'
  },
  {
    icon: Building2,
    title: 'Hokimiyat rahbariyati',
    desc: 'Markazlashtirilgan nazorat va hisobdorlik',
    color: 'text-green-600',
    bg: 'bg-green-50',
    border: 'border-green-200'
  },
  {
    icon: Wrench,
    title: "Kommunal xizmat bo'limlari",
    desc: 'Tizimli qabul va samarali taqsimlash',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-200'
  },
  {
    icon: HardHat,
    title: "Mas'ul dala xodimlari",
    desc: "Aniq vazifalar, ustuvorliklar va yo'naltirishlar",
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    border: 'border-purple-200'
  }];

  return (
    <SlideLayout
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      title="Maqsadli foydalanuvchilar"
      bgVariant="light">
      
      <div className="flex-1 flex items-center justify-center mt-4">
        <div className="grid grid-cols-2 gap-8 w-full max-w-5xl">
          {users.map((user, i) =>
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 20
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0
            }}
            transition={{
              duration: 0.5,
              delay: i * 0.15
            }}
            className={`bg-white rounded-3xl p-8 shadow-xl border-2 ${user.border} flex items-start space-x-6 hover:-translate-y-2 transition-transform duration-300`}>
            
              <div
              className={`w-20 h-20 rounded-2xl ${user.bg} flex items-center justify-center shrink-0`}>
              
                <user.icon className={`w-10 h-10 ${user.color}`} />
              </div>
              <div className="flex flex-col justify-center h-full">
                <h3 className="text-3xl font-bold text-[#1E3A5F] mb-3">
                  {user.title}
                </h3>
                <p className="text-xl text-slate-600 leading-snug">
                  {user.desc}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </SlideLayout>);

}