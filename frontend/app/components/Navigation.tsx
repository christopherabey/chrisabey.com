'use client'

import Link from 'next/link'
import posthog from "posthog-js"

export default function Navigation() {
  const handleClick = (section: string) => {
    posthog.capture('user-clicked-section', { section });
  };

  return (
    <nav className="top-2 w-full p-6">
      <div className="flex justify-center space-x-8">
        <Link href="#about" className="text-xl text-secondary font-montserrat hover:text-accent transition-colors"
          onClick={() => handleClick("About Me")}>About Me</Link>
        <Link href="#projects" className="text-xl text-secondary font-montserrat hover:text-accent transition-colors"
          onClick={() => handleClick("Projects")}>Projects</Link>
        <Link href="#contact" className="text-xl text-secondary font-montserrat hover:text-accent transition-colors"
          onClick={() => handleClick("Contact")}>Contact</Link>
      </div>
    </nav>
  )
} 