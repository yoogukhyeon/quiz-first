import { mainExcuteQuery } from '@/config/db';
import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	const method: string | undefined = req.method;
	switch (method) {
		case 'GET':
			res.status(200).json({ message: 'hello' });
			break;
		default:
			res.status(404).json({ message: 'api' });
	}
}
