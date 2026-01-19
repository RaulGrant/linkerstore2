'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CountdownTimerProps {
  targetHours?: number;
  size?: 'small' | 'medium' | 'large';
  color?: 'red' | 'green';
}

export function CountdownTimer({ 
  targetHours = 48, 
  size = 'medium',
  color = 'red'
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setHours(targetDate.getHours() + targetHours);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          hours: Math.floor(distance / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetHours]);

  const sizeClasses = {
    small: 'text-2xl p-2 min-w-[60px]',
    medium: 'text-4xl p-4 min-w-[80px]',
    large: 'text-5xl p-6 min-w-[100px]'
  };

  const colorClasses = {
    red: 'bg-red-600 border-red-700',
    green: 'bg-green-600 border-green-700'
  };

  return (
    <div className="flex gap-2 sm:gap-4 justify-center">
      <TimeBox 
        value={timeLeft.hours} 
        label="Horas" 
        size={sizeClasses[size]}
        color={colorClasses[color]}
      />
      <TimeBox 
        value={timeLeft.minutes} 
        label="Minutos" 
        size={sizeClasses[size]}
        color={colorClasses[color]}
      />
      <TimeBox 
        value={timeLeft.seconds} 
        label="Segundos" 
        size={sizeClasses[size]}
        color={colorClasses[color]}
      />
    </div>
  );
}

function TimeBox({ value, label, size, color }: any) {
  return (
    <motion.div
      className="text-center"
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 1, repeat: Infinity }}
    >
      <div className={`${color} ${size} rounded-lg border-2 text-white font-black`}>
        {String(value).padStart(2, '0')}
      </div>
      <div className="text-xs sm:text-sm text-gray-600 mt-1 font-medium">
        {label}
      </div>
    </motion.div>
  );
}
