'use client'

import posthog from "posthog-js"

interface VideoProjectProps {
  description: string | React.ReactNode
  videoId?: string  // Made optional
  videoUrl?: string // Added for direct video files
  videoKey: string
  isReversed?: boolean
}

export default function VideoProject({ description, videoId, videoUrl, videoKey, isReversed = false }: VideoProjectProps) {
  const handleClick = () => {
    posthog.capture('user-clicked-video', { 
      video: videoKey
    });
  };

  const VideoContent = () => {
    if (videoId) {
      return (
        <iframe 
          className="w-full aspect-video"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
          onClick={handleClick}
        />
      )
    }
    
    if (videoUrl) {
      return (
        <video 
          className="w-full aspect-video"
          controls
          onClick={handleClick}
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )
    }

    return null;
  }

  const content = [
    <div key="text" className="flex-1 text-center md:text-left">
      <p className="text-primary font-montserrat text-xl md:text-2xl font-medium">{description}</p>
    </div>,
    <div key="video" className="flex-1 w-full">
      <VideoContent />
    </div>
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-12">
      {isReversed ? content.reverse() : content}
    </div>
  );
} 