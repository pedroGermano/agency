import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
// import { navItems } from "../assets/data";

const navItems = ["About", "Service", "Project", "Team", "Reviews"];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <header
      className={`fixed top-0 left-0 w-full z-0 p-5 lg:px-10
             transition-all duration-300 
        ${
          isScrolled
            ? "backdrop-blur-md bg-black/20 text-white"
            : "text-white-80"
        }`}
    >
      <div className="container mx-auto px-2 flex items-center justify-between">
        {/* LEFT */}
        <div className="flex items-center gap-6 lg:gap-16">
          {/* LOGO */}
          <div
            className="text-3xl lg:text-4xl relative space-font tracking-tight
             max-w-fit text-white"
          >
            Boulevard
            <sup className="text-[10px] font-thin absolute top-1 -right-4">
              TM
            </sup>
          </div>

          {/* LOCATION */}
          <p
            className={`text-xs lg:text-lg 2xl:text-xl hidden
               lg:inline-flex tracking-wide mt-1 
              ${isScrolled ? "text-zinc-500" : "text-white"}`}
          >
            • France, 03:45 PM (GMT+2)
          </p>
        </div>
        {/* RIGHT */}
        <div className="hidden lg:flex items-center gap-12 lg:gap-24">
          {/* NAV */}
          <nav
            className="flex items-center gap-2 text-[10px] lg:text-xs 
            font-bold uppercase tracking-widest"
          >
            {navItems.map((item, index) => (
              <div key={index} className="flex items-center">
                <a
                  className="cursor-pointer text-white/80 hover:underline 
                  underline-offset-2 transition hover:-translate-y-1"
                  href={`#${item.toLowerCase()}`}
                >
                  {item}
                </a>
                {index !== navItems.length - 1 && (
                  <span className="ml-1">,</span>
                )}
              </div>
            ))}
          </nav>
          {/* CTA */}
          <p
            className={`text-[10px] cursor-pointer text-white/90 
              lg:text-xs font-bold uppercase tracking-widest pb-0.5 
              hover:opacity-60 transition
                ${
                  isScrolled
                    ? "border-b border-white"
                    : "border-b border-white/40"
                }`}
          >
            Get Connected
          </p>
        </div>
        {/* Mobile */}
        <div className="lg:hidden cursor-pointer">
          <Menu className="size-8 text-white" />
        </div>
      </div>
    </header>
  );
};

export default Header;
