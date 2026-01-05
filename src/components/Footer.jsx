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
          <p
            className="text-[10px] font-bold uppercase tracking-widest 
            text-zinc-400 mb-4"
          >
            Have any project in mind?
          </p>
          <h2
            className="text-4xl md:text-7xl lg:text-8xl font-semibold 
            tracking-tighter cursor-pointer bg-gradient-to-r from-blue-600 via-blue-400
           to-indigo-500 bg-clip-text text-transparent"
          >
            hello@boulevard.com
          </h2>
        </div>

        {/* CTA btn */}
        <button
          className="flex items-center gap-3 bg-white 
        text-zinc-900 px-6 py-3 rounded-full font-bold transition-transform
         hover:scale-105"
        >
          Book a Call
        </button>

        <hr className="border-zinc-800 mb-16" />
        {/* MIDDLE: LINKS & INFO */}
        <div className=""></div>
        {/* BOTTOM: BRANDING */}
        <div className=""></div>
      </div>
    </footer>
  );
};

export default Footer;
