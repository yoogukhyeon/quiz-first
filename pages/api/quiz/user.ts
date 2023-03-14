import nc from 'next-connect';
import { createUser } from './model';

const handler = nc();

//퀴즈 리스트 list
handler.post(createUser);

export default handler;
