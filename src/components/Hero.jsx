import { ArrowRight } from "lucide-react";
const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center pt-20 
      overflow-hidden text-white bg-gradient-to-tr from-zinc-950 via-blue-700 to-indigo-300/60"
    >
      {/* GRAIN TEXTURE */}
      <div className="" />
      {/* HERO ELEMENTS */}
      <div className="container mx-auto px-8 lg:px-4 relative z-10 mb-45">
        <div className="max-w-4xl">
          {/* Subtitle */}
          <p
            className="uppercase text-white/60 text-xs lg:text-sm 2xl:text-base 
        font-bold tracking-[0.3rem] mb-8"
          >
            AGENCY THAT MOVES CULTURE
          </p>
          {/* Heading */}
          <h2 className="text-4xl lg:text-5xl 2xl:text-7xl max-w-2xl 2xl:max-w-4xl font-medium tracking-tighter">
            Design studio that not only creates digital products but
            alsoexperiences.
          </h2>
          {/* CTA Button */}
          <button
            className="mt-12 p-3 px-6 flex items-center gap-4 
           tracking-tight cursor-pointer rounded-full bg-prime-accent 
           text-zinc-900 font-semibold transition-all duration-300 hover:scale-105"
          >
            Let's Collaborate
            <div className="size-10 bg-zinc-900 rounded-full center-item">
              <ArrowRight className="text-white " size={20} />
            </div>
          </button>
        </div>
      </div>

      {/* HUGE BRAND-TEX */}
      <div className="relative w-full">
        <div className="absolute text-white"></div>
      </div>
    </section>
  );
};

export default Hero;
