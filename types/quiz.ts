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

export interface CommentData {
	id: number;
	score: string;
	writer: string;
	comment: string;
}
