import type { NextApiRequest, NextApiResponse } from 'next';
import { mainExcuteQuery } from '@/config/db';
import moment from 'moment';
import { Data } from '../types';
import { decrypt } from '@/utils/crypto';

const createResult = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
	try {
		let { id, no, score } = req.body;
		id = decrypt(id);
		no = decrypt(no);

		console.log('id ::', id);
		console.log('no ::', no);
		const now = moment();
		const currentTime = now.format('YYYY-MM-DD HH:mm:ss');

		const query: string = `insert into quiz_result(q_no, qu_no, qr_score, qr_reg_date) value(?, ?, ?, ?)`;
		const values: string[] = [id, no, score, currentTime];
		const result: any = await mainExcuteQuery({ query, values });

		res.status(200).json({ message: 'success' });
	} catch (err: any) {
		console.log('Error', err);
		return res.status(500).json({ message: err.message });
	}
};

export { createResult };
