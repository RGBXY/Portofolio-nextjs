import React from "react";
import { StickyScroll } from "./ui/StickyScroll";
import { chakra } from "./ui/fonts";
import Image from "next/image";

const content = [
  {
    title: "Experienced Software Developer",
    description:
      "I am a dedicated Full-Stack Developer with two years of experience in the tech industry. My expertise includes working with technologies like Next.js, React, and Laravel. I thrive in creating dynamic and responsive web applications, and I am passionate about delivering high-quality solutions that meet user needs and business objectives.",
    content: <Image height={200} width={200} alt="asb" src="/assets/about_1.jpg" loading="lazy"  className="object-cover h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white" />,
  },
  {
    title: "Strong Educational Foundation",
    description:
      "I school in SMK Negeri 1 Bangsri, where i specialized in Software Engineering (PPLG). My education provided me with a solid grounding in software development principles and practices. The hands-on learning environment and rigorous curriculum equipped me with the skills necessary to excel in the fast-paced tech industry.",
    content: <Image height={200} width={200} alt="asb" src="/assets/about_2.png" loading="lazy"  className="object-cover h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white" />,
  },
  {
    title: "Tech Enthusiast",
    description:
      "I am deeply passionate about the ever-evolving world of technology. In my spare time, I enjoy exploring new programming languages and frameworks, staying updated with the latest tech trends, and participating in online coding communities. This continuous learning process fuels my creativity and helps me stay at the forefront of technological advancements.",
    content: <Image height={200} width={200} alt="asb" src="/assets/about_3.jpg" loading="lazy" className="object-cover h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white" />,
  },
  {
    title: "A Balanced Lifestyle",
    description:
      "Outside of my professional life, I pursue various hobbies that keep me balanced and inspired. I enjoy reading philosophical books and novels, which broaden my imagination and knowledge. Apart from that, I love spending time outdoors looking for new experiences, which can help me recharge and stay creative.",
    content: <Image height={200} width={200} alt="asb" src="/assets/about_5.jpg" loading="lazy" className="object-cover h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white" />,
  },
];

const About = () => {
  return (
    <div id="about" className="flex justify-center flex-col items-center pt-20">
      <div className="text-start w-[90%] max-w-2xl  lg:w-fit">
        <h1 className={`${chakra.className} mb-10 pb-3 text-3xl border-b-2 border-white`}>About Me</h1>
      </div>
      <StickyScroll content={content} />
    </div>
  );
};

export default About;
