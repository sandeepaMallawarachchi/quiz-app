"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaUserCircle, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { desc, image } from "framer-motion/client";
import QuizModal from "@/components/QuizModal";
import QuizCard from "@/components/QuizCard";

const dummyQuizzes = [
  {
    id: 1,
    title: "General Knowledge",
    image: "https://codewithmosh.com/_next/image?url=https%3A%2F%2Fcdn.filestackcontent.com%2F8MbtJ4hTAaOk3KPcptqZ&w=3840&q=75",
    ratings: 4.5,
    status: "completed",
    description: "Test your general knowledge with a variety of questions across different topics.",
  },
  {
    id: 2,
    title: "Science & Nature",
    image: "https://apacinsider.digital/wp-content/uploads/2023/01/image1-2.jpg",
    ratings: 4.7,
    status: "onprogress",
    description: "Explore the wonders of science and nature with this engaging quiz."
  },
  {
    id: 3,
    title: "History Quiz",
    image: "https://miro.medium.com/v2/resize:fit:1400/1*9LpURd6x_QgHlsQM29Myew.png",
    ratings: 4.0,
    status: "completed",
    description: "Test your knowledge of historical events, figures, and milestones."
  },
  {
    id: 4,
    title: "Geography",
    image: "https://admin.wac.co/uploads/Node_js_Architecture_A_Comprehensive_Guide_1_af37a73e1e.png",
    ratings: 4.2,
    status: "onprogress",
    description: "Challenge yourself with questions about countries, capitals, and landmarks."
  },
  {
    id: 5,
    title: "Pop Culture",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrV5rgO6meF6AoHwYRNz_nmWtD4_-1FMIr2w&s",
    ratings: 4.1,
    status: "completed",
    description: "Test your knowledge of movies, music, and celebrities in this fun quiz."
  },
];

const dummyLeaderboard = [
  { name: "Alice", score: 950 },
  { name: "Bob", score: 870 },
  { name: "Charlie", score: 820 },
];

const isLoggedIn = true;

const AllQuizzes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const quizzesPerPage = 3;

  const filtered = dummyQuizzes.filter((quiz) => {
    if (filter === "completed") return quiz.status === "completed";
    if (filter === "onprogress") return quiz.status === "onprogress";
    return true;
  }).filter((quiz) => quiz.title.toLowerCase().includes(searchTerm.toLowerCase()));

  const indexOfLast = currentPage * quizzesPerPage;
  const indexOfFirst = indexOfLast - quizzesPerPage;
  const currentQuizzes = filtered.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filtered.length / quizzesPerPage);

  return (
    <div className="min-h-screen bg-black text-white flex pt-20">
      {/* Left Panel */}
      <aside className="w-1/4 border-r border-white/10 p-6">
        <h3 className="text-2xl mb-4">Learning Overview</h3>
        {isLoggedIn ? (
          <>
            <div className="mb-6">
              <h4 className="text-sm mb-2">Progress</h4>
              <div className="space-y-4">
                <div>
                  <span className="text-xs">Science & Nature</span>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "66%" }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-2 bg-[#00CAFF] rounded-full"
                    />
                  </div>
                </div>
                <div>
                  <span className="text-xs">Geography</span>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "50%" }}
                      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                      className="h-2 bg-[#00CAFF] rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-sm mb-2">Leaderboard</h4>
              <ul className="space-y-2">
                {dummyLeaderboard.map((user, i) => (
                  <li key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FaUserCircle />
                      <span className="text-sm">{user.name}</span>
                    </div>
                    <span className="text-xs text-[#00CAFF]">{user.score} pts</span>
                  </li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <p className="text-sm text-gray-400">Please log in to view your progress.</p>
        )}
      </aside>

      {/* Right Panel */}
      <main className="w-3/4 p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <input
            type="text"
            placeholder="Search quizzes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/3 px-4 py-2 rounded-full bg-white/10 text-white focus:outline-none"
          />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 bg-gray-900 rounded-full text-white text-sm"
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="onprogress">In Progress</option>
          </select>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentQuizzes.map((quiz) => (
            <QuizCard key={quiz.id} quiz={quiz} />
          ))}
        </motion.div>

        {/* Quiz Modal */}
        <QuizModal />

        <div className="mt-6 flex justify-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded-full text-sm ${currentPage === i + 1
                ? "bg-[#00CAFF] text-black"
                : "bg-white/10 text-white"
                }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AllQuizzes;