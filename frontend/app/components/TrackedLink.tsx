'use client'

import posthog from "posthog-js"

interface TrackedLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

export default function TrackedLink({ href, children, className }: TrackedLinkProps) {
  const handleClick = () => {
    posthog.capture('user-clicked-link', { 
      url: href,
      type: 'github'
    });
  };

  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  );
} 