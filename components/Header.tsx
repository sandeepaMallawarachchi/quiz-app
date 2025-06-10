"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from '../public/logo.png';
import AuthModal from "./AuthModal";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`fixed rounded-2xl top-0 w-full z-50 transition-all duration-300 ${scrolled
                ? "bg-black/90 backdrop-blur border-b border-[#00CAFF] shadow-md"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                <Link href="/">
                    <Image
                        src={logo}
                        alt="QuizApp Logo"
                        width={120}
                        className="object-contain"
                    />
                </Link>

                <nav className="hidden md:flex gap-12">
                    <a
                        href="#hero"
                        className="text-white text-sm transition duration-200 hover:text-[#00CAFF] hover:[text-shadow:0_0_5px_#00CAFF,0_0_10px_#00CAFF]"
                    >
                        Home
                    </a>
                    <Link
                        href="/dashboard"
                        className="text-white text-sm transition duration-200 hover:text-[#00CAFF] hover:[text-shadow:0_0_5px_#00CAFF,0_0_10px_#00CAFF]"
                    >
                        Dashboard
                    </Link>
                    <a
                        href="#about"
                        className="text-white text-sm transition duration-200 hover:text-[#00CAFF] hover:[text-shadow:0_0_5px_#00CAFF,0_0_10px_#00CAFF]"
                    >
                        About
                    </a>
                    <a
                        href="#contact"
                        className="text-white text-sm transition duration-200 hover:text-[#00CAFF] hover:[text-shadow:0_0_5px_#00CAFF,0_0_10px_#00CAFF]"
                    >
                        Contact
                    </a>
                </nav>

                <div className="flex items-center gap-4">
                    {false ? (
                        <>
                            <span className="text-sm">Hello, John</span>
                            <Image
                                src="/profile.jpg"
                                alt="Profile"
                                width={36}
                                height={36}
                                className="rounded-full border border-[#00CAFF]"
                            />
                        </>
                    ) : (
                        <button
                            onClick={() => setShowModal(true)}
                            className="cursor-pointer bg-white text-black px-8 py-2 rounded-full font-medium hover:bg-gray-300 transition-colors"                        >
                            Login
                        </button>
                    )}
                </div>
            </div>
            {showModal && <AuthModal onClose={() => setShowModal(false)} />}
        </header>
    );
};

export default Header;
