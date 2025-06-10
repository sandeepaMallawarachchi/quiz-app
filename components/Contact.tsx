"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Contact = () => {
    return (
        <section
            id="contact"
            className="min-h-screen bg-black text-white flex flex-col md:flex-row items-center justify-center px-6 md:px-24 overflow-hidden"
        >
            <motion.div
                className="w-full md:w-1/2 mb-12 md:mb-0 "
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
            >
                <div className="max-w-md">
                    <div className="mb-10">
                        <Image
                            src="/logo.png"
                            alt="QuizApp Logo"
                            width={200}
                            height={100}
                            className="object-contain"
                        />
                    </div>
                    <h2 className="text-4xl mb-4">Get in touch.</h2>
                    <p className="text-gray-400">
                        Need some help? Let us know what you need and we'll get straight back to you.
                    </p>
                </div>
            </motion.div>

            <motion.form
                className=" w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
            >
                <div className="col-span-1">
                    <label className="text-sm text-gray-400 block mb-1">First Name</label>
                    <input
                        type="text"
                        className="rounded w-full bg-transparent border-b border-[#00CAFF] focus:outline-none focus:border-b-2 focus:border-[#00CAFF] transition"
                        placeholder="John"
                    />
                </div>
                <div className="col-span-1">
                    <label className="text-sm text-gray-400 block mb-1">Last Name</label>
                    <input
                        type="text"
                        className="rounded w-full bg-transparent border-b border-[#00CAFF] focus:outline-none focus:border-b-2 focus:border-[#00CAFF] transition"
                        placeholder="Doe"
                    />
                </div>
                <div className="col-span-1">
                    <label className="text-sm text-gray-400 block mb-1">Company</label>
                    <input
                        type="text"
                        className="rounded w-full bg-transparent border-b border-[#00CAFF] focus:outline-none focus:border-b-2 focus:border-[#00CAFF] transition"
                        placeholder="ABC Company"
                    />
                </div>
                <div className="col-span-1">
                    <label className="text-sm text-gray-400 block mb-1">Email Address</label>
                    <input
                        type="email"
                        className="rounded w-full bg-transparent border-b border-[#00CAFF] focus:outline-none focus:border-b-2 focus:border-[#00CAFF] transition"
                        placeholder="example@gmail.com"
                    />
                </div>
                <div className="col-span-2">
                    <label className="text-sm text-gray-400 block mb-1">Message</label>
                    <textarea
                        rows={4}
                        className="rounded w-full bg-transparent border-b border-[#00CAFF] focus:outline-none focus:border-b-2 focus:border-[#00CAFF] transition resize-none"
                        placeholder="Start typing here..."
                    />
                </div>
                <div className="col-span-2 text-right">
                    <button
                        type="submit"
                        className="mt-4 px-6 py-2 bg-white text-black rounded-full hover:bg-gray-300 transition-colors"
                    >
                        Send
                    </button>
                </div>
            </motion.form>
        </section>
    );
};

export default Contact;
