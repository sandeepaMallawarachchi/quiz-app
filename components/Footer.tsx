"use client";
import React from "react";
import { FaFacebookF, FaGoogle, FaGithub, FaArrowUp } from "react-icons/fa";

const Footer = () => {

    const email = "quiztime@gmail.com"
    const phone = "+1 (123) 456-7890";

    return (
        <footer className="bg-gray-900 text-white py-12 px-6 md:px-10 rounded-t-3xl">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 text-sm">
                {/* Logo & About */}
                <div>
                    <div className="flex items-center mb-4">
                        <img src="/logo.png" alt="Logo" className="w-32 h-12 mr-2" />
                    </div>
                    <p className="text-gray-400">About</p>
                    <ul className="mt-2 space-y-1 text-gray-400">
                        <li>About</li>
                        <li>Services</li>
                        <li>Careers</li>
                    </ul>
                </div>

                {/* Account */}
                <div>
                    <p className="text-gray-400 mb-2">Account</p>
                    <ul className="space-y-1 text-gray-400">
                        <li>Account</li>
                        <li>My Tasks</li>
                        <li>Projects</li>
                        <li>Invite Friends</li>
                    </ul>
                </div>

                {/* Contacts */}
                <div>
                    <p className="text-gray-400 mb-2">Contacts</p>
                    <ul className="space-y-1 text-gray-400">
                        <li className="mt-6">
                            <a href={`mailto:${email}`} className="text-sm hover:underline">
                                Email: {email}
                            </a>
                        </li>
                        <li>
                            <a href={`tel:${phone}`} className="text-sm hover:underline">
                                Phone: {phone}
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Subscribe */}
                <div className="md:col-span-2">
                    <p className="text-gray-400 mb-2">Subscribe</p>
                    <div className="flex items-center max-w-md">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="w-full px-4 py-2 text-sm text-white rounded-l-md focus:outline-none border-b border-b-[#00bfe3]"
                        />
                        <button className="bg-[#00CAFF] px-4 py-2 rounded-r-md hover:bg-[#00bfe3] transition">
                            <FaArrowUp />
                        </button>
                    </div>

                    {/* Social Icons */}
                    <p className="text-gray-400 mt-6 mb-2">Stay in touch</p>
                    <div className="flex space-x-4 text-white text-lg">
                        <FaFacebookF className="hover:text-[#00CAFF] cursor-pointer" />
                        <FaGoogle className="hover:text-[#00CAFF] cursor-pointer" />
                        <FaGithub className="hover:text-[#00CAFF] cursor-pointer" />
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-10 text-center text-gray-500 text-xs">
                © Quiz Time {new Date().getFullYear()} - All Rights Reserved.
                Built with <span className="animate-pulse inline-block">❤️</span> by{" "}
                <a
                    href="https://www.linkedin.com/in/sandeepa-mallawarachchi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                >
                    Sandeepa Mallawarachchi
                </a>
            </div>

        </footer>
    );
};

export default Footer;
