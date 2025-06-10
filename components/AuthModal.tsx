"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaGoogle } from "react-icons/fa";

const AuthModal = ({ onClose }: { onClose: () => void }) => {
    const [isLogin, setIsLogin] = useState(true);
    const modalRef = useRef<HTMLDivElement>(null);

    // Close modal when clicking outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
                onClose();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [onClose]);

    return (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
            <div
                ref={modalRef}
                className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-md shadow-[0_8px_30px_rgb(0,202,255,0.4)] rounded-3xl w-full max-w-md px-6 py-10 text-white relative overflow-hidden"
            >
                {/* Toggle Button */}
                <div className="flex justify-center mb-6">
                    <div className="bg-[#1a1a1a] rounded-full p-1 flex">
                        <button
                            className={`px-5 py-1.5 cursor-pointer text-sm font-medium rounded-full transition-all duration-300 ${isLogin
                                ? "bg-[#00CAFF] text-black shadow-md"
                                : "text-white"
                                }`}
                            onClick={() => setIsLogin(true)}
                        >
                            Login
                        </button>
                        <button
                            className={`px-5 py-1.5 cursor-pointer text-sm font-medium rounded-full transition-all duration-300 ${!isLogin
                                ? "bg-[#00CAFF] text-black shadow-md"
                                : "text-white"
                                }`}
                            onClick={() => setIsLogin(false)}
                        >
                            Sign Up
                        </button>
                    </div>
                </div>

                {/* Slide Form Area */}
                <div className="relative w-full h-full min-h-[450px]">
                    <AnimatePresence mode="wait" initial={false}>
                        <motion.div
                            key={isLogin ? "login" : "register"}
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -100, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="absolute inset-0 px-2"
                        >
                            <h2 className="text-xl mb-6 text-center">
                                {isLogin ? "Login to Quiz Time" : "Create an Account"}
                            </h2>

                            <form className="space-y-4">
                                {!isLogin && (
                                    <input
                                        type="text"
                                        placeholder="Username"
                                        className="w-full bg-white/10 text-white px-4 py-2 rounded-full focus:outline-none placeholder:text-gray-300 shadow-inner"
                                    />
                                )}
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full bg-white/10 text-white px-4 py-2 rounded-full focus:outline-none placeholder:text-gray-300 shadow-inner"
                                />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="w-full bg-white/10 text-white px-4 py-2 rounded-full focus:outline-none placeholder:text-gray-300 shadow-inner"
                                />
                                {!isLogin && (
                                    <input
                                        type="date"
                                        className="w-full bg-white/10 text-gray-300 px-4 py-2 rounded-full focus:outline-none shadow-inner"
                                    />
                                )}
                                <button
                                    type="submit"
                                    className="w-full cursor-pointer bg-[#00CAFF] text-black py-2 rounded-full hover:bg-cyan-400 transition-colors shadow-md"
                                >
                                    {isLogin ? "Login" : "Sign Up"}
                                </button>
                                {/* Google Login */}
                                <div className="mt-4">
                                    <p className="text-center text-sm text-gray-400 mb-2">or continue with</p>
                                    <button
                                        type="button"
                                        onClick={() => alert("Connect to Google OAuth here")}
                                        className="w-full flex items-center justify-center gap-3 bg-white text-black py-2 rounded-full hover:bg-gray-100 transition-colors shadow-md"
                                    >
                                        <FaGoogle />
                                        Continue with Google
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default AuthModal;
