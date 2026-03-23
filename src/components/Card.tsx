import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -8, scale: 1.02 } : {}}
      className={`bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 transition-all duration-300 ${
        hover ? 'hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20' : ''
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}
