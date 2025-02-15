'use client'

import { HiOutlineMail } from "react-icons/hi"
import { FaInstagram } from "react-icons/fa"
import posthog from "posthog-js"

export default function SocialLinks() {
  return (
    <div className="flex flex-row items-center space-x-8">
      <a href="mailto:cabey@uwaterloo.ca" 
         className="text-highlight hover:text-accent transition-colors"
         aria-label="Email"
         onClick={() => posthog.capture('user-clicked-social', { platform: 'email' })}>
        <HiOutlineMail size={40} />
      </a>
      <a href="https://instagram.com/chris.mabey"
         target="_blank"
         rel="noopener noreferrer"
         className="text-highlight hover:text-accent transition-colors"
         aria-label="Instagram"
         onClick={() => posthog.capture('user-clicked-social', { platform: 'instagram' })}>
        <FaInstagram size={36} />
      </a>
    </div>
  )
} 