'use client'

import { motion } from "framer-motion"
import Image from 'next/image'
import posthog from "posthog-js"

export default function ScrollArrow() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      posthog.capture('user-clicked-scroll-arrow');
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ 
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="text-secondary hover:text-accent transition-colors cursor-pointer relative w-10 h-20"
      onClick={scrollToAbout}
    >
      <Image 
        src="/drawn-arrow.svg"
        alt="Scroll down"
        fill
        className="object-contain"
      />
    </motion.div>
  )
} 