import { socialMedia } from "@/data";
import { HoverBorderGradient } from "./ui/Button";
import { ImConfused } from "react-icons/im";
import Link from "next/link";
import { chakra } from "./ui/fonts";

const Footer = () => {
  return (
    <footer id="contact" className="w-full relative overflow-hidden pt-20 px-10 pb-10">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img src="/assets/footer-grid.svg" alt="grid" className="w-full h-full opacity-50 " />
      </div>

      <div className="flex flex-col items-center">
        <h1 className={`${chakra.className} font-bold text-4xl lg:text-5xl text-center lg:max-w-[45vw]`}>
          Ready to take <span className="text-purple">your</span> digital presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 max-w-[60vh] text-center">Reach out to me today and let&apos;s discuss how I can help you achieve your goals.</p>
        <a href="mailto:derrenamadeo@gmail.com">
          <HoverBorderGradient containerClassName="rounded-xl" as="button" className="">
            <span className="flex items-center gap-2">
              <ImConfused />
              Contact Me
            </span>
          </HoverBorderGradient>
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">Copyright © 2024 Derren Amadeo</p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <Link key={info.id} href={info.link}>
              <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                <img src={info.img} alt="icons" width={20} height={20} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
