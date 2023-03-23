import type { NextApiRequest, NextApiResponse } from 'next';
import { mainExcuteQuery } from '@/config/db';
import { Data } from '../types';

const createComment = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
	try {
		const { id, writer, comment, score } = req.body;

		const query: string = `insert into quiz_comment(qu_no, c_writer, c_comment, c_score) value(?, ?, ?, ?)`;
		const values: string[] = [id, writer, comment, score];
		const result: any = await mainExcuteQuery({ query, values });
		if (!result) return res.status(404).json({ message: 'fail' });

		res.status(200).json({ message: 'success' });
	} catch (err: any) {
		console.log('Error', err);
		return res.status(500).json({ message: err.message });
	}
};

export { createComment };
