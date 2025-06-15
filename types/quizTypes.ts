export type QuizType = {
  id: number;
  title: string;
  description: string;
  tag?: string;
  color?: string;
  image: string;
  status: "completed" | "onprogress";
  ratings?: number;
};
