import type { NextApiRequest, NextApiResponse } from "next";
import { mainExcuteQuery } from "@/config/db";
import { Data } from "../types";

const getList = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const query: string = `
		select c_no as no,
				c_writer as writer,
				c_comment as comment,
				c_score as score,
				date_format(c_reg_date, '%Y-%m-%d %H:%i') as regDate
		from quiz_comment
		order by no desc `;
    const values: string[] = [];
    const result: any = await mainExcuteQuery({ query, values });
    if (!result) return res.status(404).json({ message: "fail" });

    res.status(200).json({ message: "success", data: { commentList: result } });
  } catch (err: any) {
    console.log("Error", err);
    return res.status(500).json({ message: err.message });
  }
};

const createComment = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const { id, writer, comment, score } = req.body;

    const query: string = `insert into quiz_comment(qu_no, c_writer, c_comment, c_score) value(?, ?, ?, ?)`;
    const values: string[] = [id, writer, comment, score];
    const result: any = await mainExcuteQuery({ query, values });
    if (!result) return res.status(404).json({ message: "fail" });

    res.status(200).json({ message: "success" });
  } catch (err: any) {
    console.log("Error", err);
    return res.status(500).json({ message: err.message });
  }
};

export { getList, createComment };
