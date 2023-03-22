export interface QuizList {
	questionNo: number;
	question: string;
	correct_answer: string;
	answer: string[];
}

export interface QuizState extends QuizList {
	answer: string[];
}

export interface UserChk {
	correct: boolean;
	answer: string;
	correctAnswer: string;
}
