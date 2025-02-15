'use client'

import { motion } from "framer-motion"
import Image from 'next/image'
import posthog from "posthog-js"
import { useEffect, useState } from 'react'

export default function ScrollArrow() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModeQuery.matches);

    const handler = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    darkModeQuery.addEventListener('change', handler);
    return () => darkModeQuery.removeEventListener('change', handler);
  }, []);

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
      className={`${isDarkMode ? 'text-highlight' : 'text-secondary'} hover:text-accent transition-colors cursor-pointer relative w-10 h-20`}
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