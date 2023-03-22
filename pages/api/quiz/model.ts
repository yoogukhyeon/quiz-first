import type { NextApiRequest, NextApiResponse } from 'next';
import { mainExcuteQuery } from '@/config/db';
import { Data } from './types';

const getUserTotal = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
	try {
		//mbti list query 찾기
		let query: string = `
      select count(*) as totalCnt 
      from quiz_user;`;

		const values: any[] = [];
		const totalCnt: any = await mainExcuteQuery({ query, values });

		const total = totalCnt[0].totalCnt;

		res.status(200).json({ message: 'success', data: { total } });
	} catch (err: any) {
		console.log('Error', err);
		return res.status(500).json({ message: err.message });
	}
};

export { getUserTotal };
