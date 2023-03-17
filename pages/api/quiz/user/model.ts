import type { NextApiRequest, NextApiResponse } from "next";
import { mainExcuteQuery } from "@/config/db";
import moment from "moment";
import { Data } from "../types";

const createUser = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const { no } = req.body;
    const now = moment();
    const currentTime = now.format("YYYY-MM-DD HH:mm:ss");

    const query: string = `insert into quiz_user(q_no, qu_reg_date) value(?, ?)`;
    const values: string[] = [no, currentTime];
    const result: any = await mainExcuteQuery({ query, values });
    console.log(result);

    res.status(200).json({ message: "success" });
  } catch (err: any) {
    console.log("Error", err);
    return res.status(500).json({ message: err.message });
  }
};

export { createUser };
