import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Chris's Portfolio",
  description: 'Personal portfolio and projects by Chris',
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black items-center justify-center">
      <h1 className="text-white text-4xl font-bold">Hi, I'm Chris</h1>
      <div className="video-responsive">
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/qGRQFSKhwzI?si=cq3mZ1HFEBZ-RAyq" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
        />
      </div>
    </div>
  );
}
