import { ArrowRight } from "lucide-react";
import { navigateLinks, socialLinks } from "../assets/data";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white pt-24 mb-12">
      <div className="container mx-auto px-6 lg:px-4">
        {/* TOP: CTA */}
        <div
          className="flex flex-col md:flex-row justify-between items-start
          md:items-center md-16 gap-8"
        >
          <div>
            <p
              className="text-xs font-bold uppercase tracking-widest 
            text-zinc-400 mb-4"
            >
              Have any project in mind?
            </p>
            <h2
              className="text-4xl md:text-7xl lg:text-8xl font-semibold 
            tracking-tighter cursor-pointer bg-gradient-to-r from-blue-600
             via-blue-400 to-indigo-500 bg-clip-text text-transparent pb-4"
            >
              hello@boulevard.com
            </h2>
          </div>

          {/* CTA btn */}
          <button
            className="flex items-center gap-3 bg-white 
          text-zinc-900 px-6 py-3 rounded-full font-bold 
          transition-transform hover:scale-105"
          >
            Book a Call
            <div className="size-8 bg-zinc-900 rounded-full center-item">
              <span className="text-white text-lg">
                <ArrowRight className="text-white size-4" />
              </span>
            </div>
          </button>
        </div>

        <hr className="border-zinc-800 mb-16" />
        {/* MIDDLE: LINKS & INFO */}
        <div className="grid  md:grid-cols-12 gap-12 mb-24">
          {/* INFO */}
          <div className="md:col-span-6 lg:col-span-7">
            <p className="text-sm text-zinc-400 mb-6">
              &copy; {new Date().getFullYear()} Boulevard Creative.
            </p>
            <p className="text-xl md:text-2xl font-medium leading-snug max-w-sm">
              Work with our strategists, designers, and developers who deliver
              high-quality work with passion.
            </p>
          </div>
          {/* NavLinks */}
          <div className="md:col-span-3 lg:col-span-2">
            <p
              className="text-xs font-bold uppercase tracking-widest 
            text-zinc-500 mb-6"
            >
              Navigate
            </p>
            <ul className="flex flex-col gap-3">
              {navigateLinks.map((link) => (
                <li key={link}>
                  <a
                    className="text-zinc-300 hover:text-white transition-colors"
                    href={`#${link.toLowerCase()}`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* SocialMedia */}
        </div>
        {/* BOTTOM: BRANDING */}
        <div className=""></div>
      </div>
    </footer>
  );
};

export default Footer;
