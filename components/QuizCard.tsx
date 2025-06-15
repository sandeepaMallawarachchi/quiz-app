"use client";

import React from "react";
import { useDispatch } from "react-redux";
import { openQuizModal } from "@/store/quizSlice";
import { QuizCard as QuizCardType } from "@/types/quizTypes";
import { motion } from "framer-motion";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

interface Props {
  quiz: QuizCardType;
}

const QuizCard: React.FC<Props> = ({ quiz }) => {
  const dispatch = useDispatch();

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) stars.push(<FaStar key={i} className="text-yellow-400" />);
      else if (rating >= i - 0.5) stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      else stars.push(<FaRegStar key={i} className="text-yellow-400" />);
    }
    return stars;
  };

  return (
    <motion.div
      onClick={() => dispatch(openQuizModal(quiz))}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="cursor-pointer bg-[#111] p-5 rounded-xl border border-white/10 shadow-md hover:scale-105 transition-transform"
    >
      <img src={quiz.image} alt={quiz.title} className="w-full h-40 rounded-lg object-cover mb-3" />
      <h3 className="text-lg font-bold mb-1">{quiz.title}</h3>
      {quiz.ratings && (
        <div className="flex items-center gap-1 mb-2">{renderStars(quiz.ratings)}</div>
      )}
      <p className="text-xs text-gray-400 capitalize">Status: {quiz.status}</p>
    </motion.div>
  );
};

export default QuizCard;
