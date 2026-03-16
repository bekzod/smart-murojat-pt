import React from 'react';
import { motion } from 'framer-motion';
import { SlideLayout } from '../ui/SlideLayout';
import {
  Map,
  Filter,
  UserCheck,
  Clock,
  Image as ImageIcon,
  AlertTriangle,
  BarChart3,
  CheckCircle2,
  LayoutDashboard } from
'lucide-react';
export function DashboardSlide({ slideNumber, totalSlides }: any) {
  const features = [
  {
    icon: Map,
    text: "Jonli xarita va ro'yxat ko'rinishi"
  },
  {
    icon: Filter,
    text: "Tuman, mahalla, toifa, shoshilinchlik va holat bo'yicha filtrlash"
  },
  {
    icon: UserCheck,
    text: "Bo'lim yoki xodimga tayinlash"
  },
  {
    icon: Clock,
    text: 'SLA va javob vaqtini kuzatish'
  },
  {
    icon: ImageIcon,
    text: 'Foto dalillar'
  },
  {
    icon: AlertTriangle,
    text: 'Shoshilinch ogohlantirishlar'
  },
  {
    icon: BarChart3,
    text: 'Jamoa samaradorligini kuzatish'
  },
  {
    icon: CheckCircle2,
    text: 'Hal qilish dalili bilan yopish'
  }];

  return (
    <SlideLayout
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      title="Boshqaruv paneli: Hokimiyat interfeysi"
      bgVariant="dark">
      
      <div className="flex-1 grid grid-cols-[1fr_400px] gap-12 mt-6">
        {/* Left: Dashboard Mockup */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 0.7
          }}
          className="bg-[#111827] rounded-2xl border border-slate-700 shadow-2xl overflow-hidden flex flex-col">
          
          {/* Header */}
          <div className="h-14 bg-[#1F2937] border-b border-slate-700 flex items-center px-6 justify-between">
            <div className="flex items-center space-x-3">
              <LayoutDashboard className="w-5 h-5 text-blue-400" />
              <span className="text-white font-semibold">
                SmartMurojaat Admin
              </span>
            </div>
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
          </div>

          <div className="flex-1 p-6 flex flex-col space-y-6 bg-[#0F172A]">
            {/* Stats Row */}
            <div className="grid grid-cols-4 gap-4">
              {[
              {
                label: 'Jami',
                val: '1,248',
                color: 'text-blue-400'
              },
              {
                label: 'Faol',
                val: '342',
                color: 'text-yellow-400'
              },
              {
                label: 'Hal qilingan',
                val: '890',
                color: 'text-green-400'
              },
              {
                label: 'Shoshilinch',
                val: '16',
                color: 'text-red-400'
              }].
              map((stat, i) =>
              <div
                key={i}
                className="bg-[#1E293B] p-4 rounded-xl border border-slate-700">
                
                  <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">
                    {stat.label}
                  </p>
                  <p className={`text-2xl font-bold ${stat.color}`}>
                    {stat.val}
                  </p>
                </div>
              )}
            </div>

            {/* Main Content Area */}
            <div className="flex-1 grid grid-cols-[2fr_1fr] gap-6">
              {/* Map/List Area */}
              <div className="bg-[#1E293B] rounded-xl border border-slate-700 overflow-hidden relative">
                {/* Stylized Map Background */}
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cartographer.png')]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full p-4">
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1]
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 2
                      }}
                      className="absolute top-1/4 left-1/3 w-4 h-4 bg-red-500 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.8)]" />
                    
                    <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-yellow-500 rounded-full" />
                    <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-blue-500 rounded-full" />
                    <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-green-500 rounded-full" />
                  </div>
                </div>
                {/* Overlay List */}
                <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-[#1E293B] to-transparent" />
                <div className="absolute bottom-4 inset-x-4 space-y-2">
                  <div className="bg-[#0F172A]/90 backdrop-blur p-3 rounded-lg border border-slate-700 flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-red-500" />
                      <span className="text-white text-sm">
                        Suv quvuri yorilishi (Yunusobod)
                      </span>
                    </div>
                    <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded">
                      Shoshilinch
                    </span>
                  </div>
                  <div className="bg-[#0F172A]/90 backdrop-blur p-3 rounded-lg border border-slate-700 flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-yellow-500" />
                      <span className="text-white text-sm">
                        Chiroq o'chgan (Chilonzor)
                      </span>
                    </div>
                    <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded">
                      Jarayonda
                    </span>
                  </div>
                </div>
              </div>

              {/* Sidebar Details */}
              <div className="bg-[#1E293B] rounded-xl border border-slate-700 p-4 flex flex-col">
                <div className="w-full h-32 bg-slate-800 rounded-lg mb-4 flex items-center justify-center border border-slate-700">
                  <ImageIcon className="w-8 h-8 text-slate-600" />
                </div>
                <h4 className="text-white font-medium mb-2">
                  #SM-4092 Tafsilotlari
                </h4>
                <div className="space-y-2 flex-1">
                  <div className="h-2 bg-slate-700 rounded w-full" />
                  <div className="h-2 bg-slate-700 rounded w-4/5" />
                  <div className="h-2 bg-slate-700 rounded w-3/4" />
                </div>
                <button className="w-full py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-medium transition-colors mt-4">
                  Xodimga tayinlash
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Features List */}
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-white mb-8">Imkoniyatlar:</h3>
          <div className="space-y-5">
            {features.map((feature, i) =>
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                x: 20
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              transition={{
                duration: 0.4,
                delay: i * 0.1
              }}
              className="flex items-center space-x-4">
              
                <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
                  <feature.icon className="w-5 h-5 text-blue-400" />
                </div>
                <span className="text-slate-300 font-medium text-lg leading-tight">
                  {feature.text}
                </span>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </SlideLayout>);

}