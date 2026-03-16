import React from 'react';
import { motion } from 'framer-motion';
import { SlideLayout } from '../ui/SlideLayout';
import {
  Smartphone,
  MessageSquare,
  Image,
  Brain,
  Ticket,
  LayoutDashboard,
  Route,
  HardHat,
  Wrench,
  Upload,
  Bell,
  BarChart } from
'lucide-react';
export function WorkflowSlide({ slideNumber, totalSlides }: any) {
  const steps = [
  {
    icon: Smartphone,
    text: 'Fuqaro botni ochadi',
    color: 'bg-blue-500'
  },
  {
    icon: MessageSquare,
    text: "Bot nima bo'lganini so'raydi",
    color: 'bg-blue-500'
  },
  {
    icon: Image,
    text: 'Fuqaro matn, rasm va joylashuv yuboradi',
    color: 'bg-blue-500'
  },
  {
    icon: Brain,
    text: "Sun'iy intellekt muammo turi va shoshilinchligini aniqlaydi",
    color: 'bg-purple-500'
  },
  {
    icon: Ticket,
    text: 'Tiket yaratiladi',
    color: 'bg-purple-500'
  },
  {
    icon: LayoutDashboard,
    text: "Markaziy panelda paydo bo'ladi",
    color: 'bg-[#1E3A5F]'
  },
  {
    icon: Route,
    text: "To'g'ri bo'limga tayinlanadi",
    color: 'bg-[#1E3A5F]'
  },
  {
    icon: HardHat,
    text: 'Xodim vazifani oladi',
    color: 'bg-amber-500'
  },
  {
    icon: Wrench,
    text: 'Muammo hal qilinadi',
    color: 'bg-green-500'
  },
  {
    icon: Upload,
    text: 'Dalil yuklanadi',
    color: 'bg-green-500'
  },
  {
    icon: Bell,
    text: 'Fuqaro xabardor qilinadi',
    color: 'bg-blue-500'
  },
  {
    icon: BarChart,
    text: "Rahbariyat hisobotda ko'radi",
    color: 'bg-[#1E3A5F]'
  }];

  return (
    <SlideLayout
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      title="Ish jarayoni"
      bgVariant="light">

      <div className="flex-1 flex items-center justify-center mt-4">
        <div className="grid grid-cols-4 gap-x-6 gap-y-12 w-full max-w-6xl relative">
          {/* Connecting lines - simplified for grid */}
          <div className="absolute top-[3rem] left-[10%] right-[10%] h-1 bg-slate-200 -z-10" />
          <div className="absolute top-[12rem] left-[10%] right-[10%] h-1 bg-slate-200 -z-10" />
          <div className="absolute top-[21rem] left-[10%] right-[10%] h-1 bg-slate-200 -z-10" />

          {/* Vertical connectors */}
          <div className="absolute top-[3rem] bottom-[12rem] right-[10%] w-1 bg-slate-200 -z-10" />
          <div className="absolute top-[12rem] bottom-[3rem] left-[10%] w-1 bg-slate-200 -z-10" />

          {/* Reorder array to create snake path: 1-4 (L->R), 5-8 (R->L), 9-12 (L->R) */}
          {[
          steps[0],
          steps[1],
          steps[2],
          steps[3],
          steps[7],
          steps[6],
          steps[5],
          steps[4],
          steps[8],
          steps[9],
          steps[10],
          steps[11]].
          map((step, index) => {
            // Find original index to keep numbers correct
            const originalIndex = steps.findIndex((s) => s.text === step.text);
            return (
              <motion.div
                key={originalIndex}
                initial={{
                  opacity: 0,
                  scale: 0.8
                }}
                animate={{
                  opacity: 1,
                  scale: 1
                }}
                transition={{
                  duration: 0.4,
                  delay: originalIndex * 0.15
                }}
                className="flex flex-col items-center text-center relative bg-white p-4 rounded-xl shadow-sm border border-slate-100">

                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-sm shadow-md z-10">
                  {originalIndex + 1}
                </div>
                <div
                  className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center shadow-lg mb-4 text-white`}>

                  <step.icon className="w-8 h-8" />
                </div>
                <p className="text-sm font-medium text-slate-700 leading-tight h-10">
                  {step.text}
                </p>
              </motion.div>);

          })}
        </div>
      </div>
    </SlideLayout>);

}
