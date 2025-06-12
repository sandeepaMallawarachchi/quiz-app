"use client";
import React, { useEffect, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";

const Hero = () => {

  const contentRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (contentRef.current) observer.observe(contentRef.current);
    return () => {
      if (contentRef.current) observer.unobserve(contentRef.current);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/hero2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div
        ref={contentRef}
        className={`relative z-20 flex flex-col items-center justify-center h-full space-y-6 ${inView ? "animate-slideUpFade" : "opacity-0"
          }`}
      >
        <div className="text-white px-6">
          <h1 className="text-5xl font drop-shadow-lg">Welcome to Quiz Time</h1>
          <p className="mt-4 text-xl text-[#00CAFF] drop-shadow-neon">
            Test your knowledge. Play. Learn. Win.
          </p>
        </div>

        <div className="w-full max-w-xl px-4">
          <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md">
            <svg className="text-gray-500 text-xl mr-2" width="20" height="20" fill="none" stroke="currentColor"><path d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z" /></svg>
            <input
              type="text"
              placeholder="Search classes or quizzes..."
              className="w-full bg-transparent outline-none text-black text-sm h-6"
            />
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-black/50 z-[1]" />
    </section>
  );
};

export default Hero;
