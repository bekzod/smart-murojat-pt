import React from 'react';
import { motion } from 'framer-motion';
import { SlideLayout } from '../ui/SlideLayout';
import {
  Map,
  Rocket,
  Star,
  Flame,
  PhoneCall,
  Smartphone,
  LineChart,
  QrCode,
  LayoutDashboard,
  Radio,
  Bell,
  Eye,
  Calculator } from
'lucide-react';
export function RoadmapSlide({ slideNumber, totalSlides }: any) {
  const phase2 = [
  {
    icon: Star,
    text: 'Fuqaro baholashi'
  },
  {
    icon: Flame,
    text: 'Takroriy muammo issiqlik xaritalari'
  },
  {
    icon: Bell,
    text: 'Favqulodda eskalatsiya'
  },
  {
    icon: PhoneCall,
    text: "Qo'ng'iroq markazi integratsiyasi"
  },
  {
    icon: Smartphone,
    text: 'Dala xodimlari uchun mobil ilova'
  },
  {
    icon: LineChart,
    text: 'Bashoratli tahlillar'
  },
  {
    icon: QrCode,
    text: 'QR-kod orqali xabar berish'
  },
  {
    icon: LayoutDashboard,
    text: 'Hokim uchun ijroiya paneli'
  }];

  const phase3 = [
  {
    icon: Radio,
    text: 'Aqlli shahar sensorlari integratsiyasi'
  },
  {
    icon: Bell,
    text: 'Avtomatik uzilish xabarnomasi'
  },
  {
    icon: Eye,
    text: 'Ommaviy shaffoflik portali'
  },
  {
    icon: Calculator,
    text: 'Byudjet va texnik xizmat rejalashtirish uchun AI prognozlash'
  }];

  return (
    <SlideLayout
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      title="Yo'l xaritasi: Kelajak rejalari"
      bgVariant="light">
      
      <div className="flex-1 grid grid-cols-2 gap-12 mt-8">
        {/* Phase 2 */}
        <motion.div
          initial={{
            opacity: 0,
            x: -30
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 0.6
          }}
          className="bg-white rounded-3xl shadow-xl border border-blue-100 overflow-hidden flex flex-col">
          
          <div className="bg-blue-600 p-6 flex items-center space-x-4 text-white">
            <Rocket className="w-10 h-10" />
            <div>
              <h3 className="text-2xl font-bold">2-Bosqich</h3>
              <p className="text-blue-200">Kengaytirish va chuqurlashtirish</p>
            </div>
          </div>
          <div className="p-8 flex-1 bg-slate-50">
            <ul className="space-y-5">
              {phase2.map((item, i) =>
              <motion.li
                key={i}
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
                  delay: 0.2 + i * 0.1
                }}
                className="flex items-center space-x-4">
                
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-lg text-slate-700 font-medium">
                    {item.text}
                  </span>
                </motion.li>
              )}
            </ul>
          </div>
        </motion.div>

        {/* Phase 3 */}
        <motion.div
          initial={{
            opacity: 0,
            x: 30
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 0.6,
            delay: 0.3
          }}
          className="bg-white rounded-3xl shadow-xl border border-green-100 overflow-hidden flex flex-col">
          
          <div className="bg-green-600 p-6 flex items-center space-x-4 text-white">
            <Map className="w-10 h-10" />
            <div>
              <h3 className="text-2xl font-bold">3-Bosqich</h3>
              <p className="text-green-200">
                To'liq aqlli shahar integratsiyasi
              </p>
            </div>
          </div>
          <div className="p-8 flex-1 bg-slate-50">
            <ul className="space-y-6">
              {phase3.map((item, i) =>
              <motion.li
                key={i}
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
                  delay: 0.6 + i * 0.1
                }}
                className="flex items-center space-x-4">
                
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <span className="text-xl text-slate-700 font-medium">
                    {item.text}
                  </span>
                </motion.li>
              )}
            </ul>
          </div>
        </motion.div>
      </div>
    </SlideLayout>);

}