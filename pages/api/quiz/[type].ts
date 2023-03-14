import nc from 'next-connect';
import { getList } from './model';

const handler = nc();

//퀴즈 리스트 list
handler.get(getList);

export default handler;
