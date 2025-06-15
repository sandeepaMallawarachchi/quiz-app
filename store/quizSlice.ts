import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { QuizCard } from '@/types/quizTypes';

interface QuizState {
  selectedQuiz: QuizCard | null;
  isModalOpen: boolean;
}

const initialState: QuizState = {
  selectedQuiz: null,
  isModalOpen: false,
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    openQuizModal: (state, action: PayloadAction<QuizCard>) => {
      state.selectedQuiz = action.payload;
      state.isModalOpen = true;
    },
    closeQuizModal: (state) => {
      state.selectedQuiz = null;
      state.isModalOpen = false;
    },
  },
});

export const { openQuizModal, closeQuizModal } = quizSlice.actions;
export default quizSlice.reducer;
