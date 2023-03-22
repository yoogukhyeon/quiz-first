import type { NextApiRequest, NextApiResponse } from 'next';
import { mainExcuteQuery } from '@/config/db';
import { Data } from '../types';

const getList = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
	const { no } = req.query;
	try {
		//mbti list query 찾기
		let query: string = `
			select q.qq_no as qqNo,
			q.qq_title as qqTitle,
			a.qa_no as qaNo,
			a.qq_no as qaqNo,
			a.qa_answer as aAnswer,
			case when c.qc_correct is null then null else a.qa_answer end as qcCorrect 
		from quiz_question q
		inner join quiz_answer a
		on a.qq_no = q.qq_no
    left join quiz_correct c 
    on a.qa_no =  c.qc_correct
		where 1 = 1
		and q.q_no = ? 
    order by q.qq_no asc, a.qa_no desc `;

		const values: any[] = [no];
		const quiz: any = await mainExcuteQuery({ query, values });

		let questionList = [];
		let answer = [];
		let quesPrev = 0;

		for (let i = 0; i < quiz.length; i++) {
			if (i === 0) {
				quesPrev = quiz[i].qqNo;
			}

			if (i !== 0) {
				answer.push(quiz[i - 1].aAnswer);
			}

			if (i === quiz.length - 1) {
				answer.push(quiz[i].aAnswer);
			}

			if (quesPrev !== quiz[i].qqNo || i === quiz.length - 1) {
				const questionObj = {
					questionNo: quiz[i - 1].qqNo,
					question: quiz[i - 1].qqTitle,
					correct_answer: i === quiz.length - 1 ? quiz[i].qcCorrect : quiz[i - 1].qcCorrect,
					answer,
				};

				answer = [];
				questionList.push(questionObj);
			}

			quesPrev = quiz[i].qqNo;
		}

		res.status(200).json({ message: 'success', data: questionList });
	} catch (err: any) {
		console.log('Error', err);
		return res.status(500).json({ message: err.message });
	}
};
export { getList };
