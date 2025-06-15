"use client";
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { QuizType } from '../types/quizTypes'
import Link from "next/link";
import QuizModal from "@/components/QuizModal";
import { useAppDispatch } from "@/store/hooks";
import { openQuizModal } from "@/store/quizSlice";

const dummyQuizzes = [
    {
        id: 1,
        title: 'General Knowledge',
        description: 'Challenge your brain with 15 trivia questions.',
        tag: 'Trending',
        color: '#00CAFF',
        image: 'https://apacinsider.digital/wp-content/uploads/2023/01/image1-2.jpg'
    },
    {
        id: 2,
        title: 'Science & Nature',
        description: 'Explore the wonders of biology, physics, and more.',
        tag: 'New',
        color: '#7C3AED',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrV5rgO6meF6AoHwYRNz_nmWtD4_-1FMIr2w&s'
    },
    {
        id: 3,
        title: 'History Quiz',
        description: 'Test how much you know about world events.',
        tag: 'Hot',
        color: '#EF4444',
        image: 'https://miro.medium.com/v2/resize:fit:1400/1*9LpURd6x_QgHlsQM29Myew.png'
    },
    {
        id: 4,
        title: 'Pop Culture',
        description: 'Test your knowledge of movies, music, and celebrities.',
        tag: 'Popular',
        color: '#F59E0B',
        image: 'https://codewithmosh.com/_next/image?url=https%3A%2F%2Fcdn.filestackcontent.com%2F8MbtJ4hTAaOk3KPcptqZ&w=3840&q=75'
    },
    {
        id: 5,
        title: 'Geography',
        description: 'Explore countries, capitals, and landmarks.',
        tag: 'Featured',
        color: '#10B981',
        image: 'https://admin.wac.co/uploads/Node_js_Architecture_A_Comprehensive_Guide_1_af37a73e1e.png'
    },
]
const FeaturedQuiz = () => {

    const [visibleCards, setVisibleCards] = useState([
        ...dummyQuizzes.slice(0, 3),
    ])
    const [exitingCard, setExitingCard] = useState<QuizType | null>(null)

    useEffect(() => {
        const interval = setInterval(() => {
            setExitingCard(visibleCards[visibleCards.length - 1])
            setTimeout(() => {
                setVisibleCards((current) => {
                    const removedCard = current[current.length - 1]
                    const nextCardIndex =
                        (dummyQuizzes.findIndex((q) => q.id === removedCard.id) + 1) %
                        dummyQuizzes.length
                    const nextCard = dummyQuizzes[nextCardIndex]
                    return [nextCard, ...current.slice(0, current.length - 1)]
                })
                setExitingCard(null)
            }, 600)
        }, 2000)
        return () => clearInterval(interval)
    }, [visibleCards])

    const dispatch = useAppDispatch();

    return (
        <motion.section
            id='quizzes'
            className="bg-black py-10 pt-20 px-4 md:px-16 text-white min-h-screen relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
        >
            <h2 className="text-3xl md:text-4xl mb-12 text-center tracking-wide">
                Featured Quizzes
            </h2>
            <div className="relative h-[300px] w-full max-w-5xl mx-auto">
                <AnimatePresence>
                    {visibleCards.map((quiz, index) => (
                        <motion.div
                            key={quiz.id}
                            initial={{
                                x: -100,
                                opacity: 0,
                                scale: 0.8,
                            }}
                            animate={{
                                x: index * 350,
                                opacity: 1,
                                scale: 1,
                                transition: {
                                    duration: 0.5,
                                },
                            }}
                            exit={
                                exitingCard && exitingCard.id === quiz.id
                                    ? {
                                        y: 300,
                                        opacity: 0,
                                        transition: {
                                            duration: 0.6,
                                        },
                                    }
                                    : {}
                            }
                            className="absolute top-0 left-0 w-[300px]"
                        >
                            <div
                                onClick={() => dispatch(openQuizModal(quiz))}
                                className="relative cursor-pointer bg-[#111] rounded-3xl p-6 border border-white/10 backdrop-blur-md shadow-[0_15px_35px_rgba(0,202,255,0.15)] transition-transform duration-300 hover:scale-105"
                            >
                                <div className="absolute -top-2 -right-2 w-16 h-16 bg-[#00caff33] blur-2xl rounded-full z-0" />
                                <div className="mb-4 relative z-10">
                                    <span
                                        className="text-xs uppercase px-3 py-1 rounded-full"
                                        style={{
                                            backgroundColor: quiz.color + '22',
                                            color: quiz.color,
                                        }}
                                    >
                                        {quiz.tag}
                                    </span>
                                </div>
                                <div>
                                    <div className="mb-4 relative z-10">
                                        <img
                                            src={quiz.image}
                                            alt={quiz.title}
                                            className="w-full h-40 object-cover rounded-lg"
                                        />
                                    </div>
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-xl font-semibold mb-2">{quiz.title}</h3>
                                    <p className="text-gray-400 text-sm">{quiz.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Quiz Modal */}
            <QuizModal />

            <div className="flex justify-center mt-20">
                <Link
                    href="/all-quizzes"
                    prefetch={false}
                    className="cursor-pointer mt-4 px-6 py-2 bg-white text-black rounded-full hover:bg-gray-300 transition-colors"
                >
                    Browse All Quizzes
                </Link>
            </div>
        </motion.section>
    )
}
export default FeaturedQuiz
