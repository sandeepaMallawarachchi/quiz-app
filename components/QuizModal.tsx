"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { closeQuizModal } from "@/store/quizSlice";
import { motion } from "framer-motion";
import { FaStar, FaStarHalfAlt, FaRegStar, FaTimes } from "react-icons/fa";

const QuizModal: React.FC = () => {
  const { selectedQuiz, isModalOpen } = useSelector((state: RootState) => state.quiz);
  const dispatch = useDispatch();

  if (!isModalOpen || !selectedQuiz) return null;

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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-[#111] p-6 rounded-xl w-full max-w-lg border border-white/10 text-white relative"
      >
        <button
          onClick={() => dispatch(closeQuizModal())}
          className="absolute cursor-pointer top-3 right-3 text-white hover:text-red-400"
        >
          <FaTimes />
        </button>

        <img src={selectedQuiz.image} alt={selectedQuiz.title} className="w-full h-48 rounded-lg object-cover mb-4" />
        <h2 className="text-2xl font-bold mb-2">{selectedQuiz.title}</h2>
        <p className="text-sm text-gray-300 mb-4">{selectedQuiz.description || "No description provided."}</p>
        <div className="flex justify-between">
          <p className="text-xs mb-4 text-gray-400 capitalize">Status: {selectedQuiz.status}</p>
          <div className="flex items-center gap-2 mb-4">
            {selectedQuiz.ratings && renderStars(selectedQuiz.ratings)}
          </div>
        </div>

        <button className="px-5 py-2 rounded-full bg-[#00CAFF] text-black hover:bg-[#00b6e5] transition">
          Start Quiz
        </button>
      </motion.div>
    </div>
  );
};

export default QuizModal;
