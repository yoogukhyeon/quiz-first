import nc from "next-connect";
import { getList, createUser } from "../model";

const handler = nc();

//퀴즈 리스트 list
handler.get(getList);

//퀴즈 리스트 list
handler.post(createUser);

export default handler;
