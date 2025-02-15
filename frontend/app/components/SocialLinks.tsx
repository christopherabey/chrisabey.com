'use client'

import { HiOutlineMail } from "react-icons/hi"
import { FaLinkedin, FaYoutube } from "react-icons/fa"
import posthog from "posthog-js"

export default function SocialLinks() {
  return (
    <div className="flex flex-row items-center space-x-8">
      <a 
        href="mailto:cabey@uwaterloo.ca" 
        className="text-highlight hover:text-accent transition-colors"
        aria-label="Email"
        onClick={() => posthog.capture('user-clicked-social', { platform: 'email' })}
      >
        <HiOutlineMail size={40} />
      </a>
      <a 
        href="https://www.linkedin.com/in/chrisabey"
        target="_blank"
        rel="noopener noreferrer"
        className="text-highlight hover:text-accent transition-colors"
        aria-label="LinkedIn"
        onClick={() => posthog.capture('user-clicked-social', { platform: 'linkedin' })}
      >
        <FaLinkedin size={36} />
      </a>
      <a 
        href="https://www.youtube.com/@chrisabey"
        target="_blank"
        rel="noopener noreferrer"
        className="text-highlight hover:text-accent transition-colors"
        aria-label="YouTube"
        onClick={() => posthog.capture('user-clicked-social', { platform: 'youtube' })}
      >
        <FaYoutube size={40} />
      </a>
    </div>
  )
} 