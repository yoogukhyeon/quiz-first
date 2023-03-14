import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(_: NextApiRequest, res: NextApiResponse) {
	res.setHeader('WWW-authenticate', 'Basic realm="Secure Area"');
	res.statusCode = 401;
	res.end(`정확한 Basic Auth key를 입력해주세요.`);
}
