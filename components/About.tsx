"use client"

import React, { useEffect, useRef, useState } from "react";
import { ArcImage } from './ArcImage'

const About = () => {
    const baseImages = [
        "https://www.urduitacademy.com/quiz/quiz.jpg",
        "https://i.guim.co.uk/img/media/d4b256e746b79a35f6ae76347238900ec3b63d11/67_276_3433_2060/master/3433.jpg?width=465&dpr=1&s=none&crop=none",
        "https://horizoncampus.edu.lk/assets/images/courses/all_img/med_degree.webp",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpjydUkf3lFhBmAxjKDG_oUSjujzUuYete_A&s",
        "https://live-production.wcms.abc-cdn.net.au/d6e9e95b2d8a556b8680aac2c190de62?impolicy=wcms_crop_resize&cropH=1629&cropW=2906&xPos=94&yPos=368&width=862&height=485",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIWRXxxyM84WrD3d0h40EkBzGjwHCvlQKeDg&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlliXL-c8pety6DMSnv39KbM6ExzcgcV0yI-IdB0He-JfayFpVIzZgAu-NIEZ8Gp4-tFU&usqp=CAU",
        "https://media.istockphoto.com/id/492198113/photo/setting-the-page-on-fire-with-some-hard-work.jpg?s=612x612&w=0&k=20&c=DhXAJmUwDL309H4J_YmydmSR8HjMGIB14fWlR14krtI=",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRSLcOF6Aa-03GW797gyT1WjnZoc8Fe9URXg&s",
        "https://spunout.ie/wp-content/uploads/2023/09/student_taking_a_college_exam.jpg",
    ]

    const images = [...baseImages, ...baseImages];

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
        <div id='about' className="h-[60vh] overflow-hidden">
            <section className="relative min-h-screen bg-black text-white flex flex-col items-center justify-start pt-48 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center mt-[500px]">
                    <div className="w-[1080px] h-[1080px] relative">
                        <div className="absolute inset-0 [animation:spin_50s_linear_infinite]">
                            {images.map((src, index) => {
                                const angle = (2 * Math.PI * index) / images.length;
                                const radius = 50;
                                const xPercent = 50 + radius * Math.cos(angle)
                                const yPercent = 50 + radius * Math.sin(angle)

                                // const scale = 0.8 + 0.2 * Math.sin(angle)
                                return (
                                    <ArcImage
                                        key={index}
                                        src={src}
                                        style={{
                                            left: `${xPercent}%`,
                                            top: `${yPercent}%`,
                                            transform: `translate(-50%, -50%) rotate(${angle * (180 / Math.PI)}deg)`,
                                        }}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div
                    ref={contentRef}
                    className={`relative z-10 text-center max-w-2xl mx-auto px-4 ${inView ? "animate-slideUpFade" : "opacity-0"
                        }`}
                >
                    <h1 className="text-3xl md:text-4xl mb-6">About Quiz Time</h1>
                    <p className="text-gray-400 text-md md:text-md mb-8 max-w-lg mx-auto">
                        Explore a world of interactive quizzes and collaborative learning.
                        Designed for curious minds to test knowledge and grow smarter together.
                    </p>
                    <button className="cursor-pointer bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-300 transition-colors">
                        Learn More
                    </button>
                </div>
                <div className="absolute top-[410px] left-0 w-full h-[50px] z-20 pointer-events-none">
                    <div className="w-full h-full bg-gray-100 blur-3xl rounded-full opacity-50" />
                </div>
            </section>
        </div>
    )
}

export default About
