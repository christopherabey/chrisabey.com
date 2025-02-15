import Image from 'next/image'
import Navigation from './components/Navigation'
import SocialLinks from './components/SocialLinks'
import VideoProject from './components/VideoProject'
import TrackedLink from './components/TrackedLink'
import ScrollArrow from './components/ScrollArrow'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <section id="hero" className="flex flex-col min-h-screen bg-background items-center justify-center px-4">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
            <h1 className="text-black italic text-6xl md:text-8xl">Hello,</h1>
            <h1 className="text-primary text-6xl md:text-8xl">
              I'm <span className="relative inline-block">
                Chris!
                <span className="absolute -bottom-2 left-1/2 w-full h-8 -translate-x-1/2 bg-[url('/brush-stroke.svg')] bg-no-repeat bg-cover z-10"></span>
              </span>
            </h1>
          </div>
          <div className="mt-5">
            <p className="text-secondary font-montserrat text-xl md:text-2xl font-medium text-center"> 
              Software Engineer and Creator 
            </p>
          </div>
          <div className="absolute bottom-10">
            <ScrollArrow />
          </div>
        </section>

        <section id="about" className="min-h-screen bg-primary flex flex-col items-center justify-start pt-20 px-4 md:px-20">
          <h2 className="text-5xl md:text-6xl font-radley text-highlight mb-10 md:mb-20 text-center">About Me</h2>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12 max-w-6xl">
            <Image 
              src="/profile.png" 
              alt="Chris Abey" 
              width={300}
              height={300}
              className="rounded-t-[60px] md:rounded-t-[100px] w-3/4 md:w-auto"
            />
            <p className="text-highlight font-montserrat text-xl md:text-2xl font-medium text-center md:text-left">
              I'm a fourth year Software Engineering student at the University of Waterloo. I'm passionate about healthcare and building products that help people.
            </p>
          </div>
        </section>

        <section id="projects" className="min-h-screen bg-background flex flex-col items-center justify-start py-20 px-4 md:px-20 gap-10 md:gap-20">
          <h2 className="text-5xl md:text-6xl font-radley text-primary text-center">Projects</h2>
          
          <div className="flex flex-col gap-16 md:gap-20 w-full max-w-6xl">
            <VideoProject 
              description="I made an Amazing Spider-Man inspired smartlock. It's still on my door today."
              videoId="qGRQFSKhwzI?si=cq3mZ1HFEBZ-RAyq"
              videoKey="smartlock"
            />
            
            <VideoProject 
              description="My friends and I played Five Nights at Freddy's. I made this intro for the recording of that night."
              videoId="ZAKR2jGZ9ow?si=1Yy3jm8SyTCsE4DU"
              videoKey="fnaf"
              isReversed
            />

            <VideoProject 
              description={<>An AI tutor that generates 3Blue1Brown style videos for teaching and visualizing any concept. Created at the Berkeley AI hackathon. 50+ stars on <TrackedLink href="https://github.com/christopherabey/3brown1blue" className="text-secondary hover:text-accent transition-colors">GitHub</TrackedLink>.</>}
              videoUrl="https://github.com/christopherabey/3brown1blue/assets/50386081/87427cef-c2a4-4848-911d-749cd125e6fc"
              videoKey="3b1b"
            />

            <div className="flex flex-col gap-20 w-full max-w-6xl">
              
            </div>
          </div>
        </section>

        <section id="contact" className="bg-secondary flex flex-col items-center py-10 px-4">
          <h2 className="text-5xl md:text-6xl font-radley text-highlight mb-12 text-center">Contact</h2>
          <SocialLinks />
        </section>
      </main>
    </>
  );
}
