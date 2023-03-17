import type { NextApiRequest, NextApiResponse } from "next";
import { mainExcuteQuery } from "@/config/db";
import { Data } from "./types";

/**
 * @swagger
 * /api/quiz/{no}:
 *   get:
 *     security:
 *        - basicAuth: []
 *     tags: [Quiz API]
 *     parameters:
 *        - name: no
 *          in: path
 *          description: quiz 번호
 *          required: true
 *          example: 1
 *     description: quiz 조회
 *     summary: quiz 조회
 *     responses:
 *       200:
 *         description: quiz 조회
 *         content:
 *            application/json:
 *              schema:
 *                  $ref: '#/components/schemas/getQuizList'
 *       404:
 *        description: NotFound
 *        content:
 *         application/json:
 *          schema:
 *             type: object
 *             properties:
 *              status:
 *               type: number
 *               example: 404
 *              message:
 *                  type: string
 *                  example: 오류가 발생했습니다.
 *       500:
 *        description: Server Error
 *        content:
 *         application/json:
 *          schema:
 *             type: object
 *             properties:
 *              status:
 *               type: number
 *               example: 500
 *              message:
 *                  type: string
 *                  example: 서버 오류가 발생했습니다.
 * components:
 *  securitySchemes:
 *   basicAuth:
 *     type: http
 *     scheme: basic
 *  schemas:
 *      getQuizList:
 *          type: object
 *          properties:
 *              message:
 *               type: string
 *               example: succeess
 *              data:
 *               type: object
 *               example: [{
 *                     "categoryTotal": 4,
 * 					   "categoryList": [{
 * 							"categoryNo": 1,
 *       					"categoryTitle": "당신의 돈 관리 기질",
 *       					"categoryName": "temperament",
 *       					"questionTotal": 7,
 *							"questionList": [{
 *								"questionNo": 1,
 *           					"questionSubject": "통장 잔액과 최근 지출 내역을 얼마나 자주 확인하는가?",
 *           					"questionDesc": null,
 *								"answerList": [{
 *									"answerNo": 1,
 *									"answerSubject": "매일 확인하는 편이다",
 *									"answerScore": 4
 *								}]
 *							}]
 * 						}]
 *                  }]
 */
const getList = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  console.log("api 통신");
  console.log(req.query);
  try {
    //mbti list query 찾기
    let query: string = `
			select q.qq_no as qqNo,
			q.qq_title as qqTitle,
			a.qa_no as qaNo,
			a.qq_no as qaqNo,
			a.qa_answer as aAnswer,
			case when c.qc_correct is null then null else a.qa_answer end as qcCorrect 
		from quiz_question q
		inner join quiz_answer a
		on a.qq_no = q.qq_no
    left join quiz_correct c 
    on a.qa_no =  c.qc_correct
		where 1 = 1
		and q.q_no = 1 
    order by q.qq_no asc, a.qa_no desc `;

    const values: string[] = [""];
    const quiz: any = await mainExcuteQuery({ query, values });

    let questionList = [];
    let answer = [];
    let quesPrev = 0;

    for (let i = 0; i < quiz.length; i++) {
      if (i === 0) {
        quesPrev = quiz[i].qqNo;
      }

      if (i !== 0) {
        answer.push(quiz[i - 1].aAnswer);
      }

      if (i === quiz.length - 1) {
        answer.push(quiz[i].aAnswer);
      }

      if (quesPrev !== quiz[i].qqNo || i === quiz.length - 1) {
        const questionObj = {
          questionNo: quiz[i - 1].qqNo,
          question: quiz[i - 1].qqTitle,
          correct_answer: i === quiz.length - 1 ? quiz[i].qcCorrect : quiz[i - 1].qcCorrect,
          answer,
        };

        answer = [];
        questionList.push(questionObj);
      }

      quesPrev = quiz[i].qqNo;
    }

    res.status(200).json({ message: "success", data: questionList });
  } catch (err: any) {
    console.log("Error", err);
    return res.status(500).json({ message: err.message });
  }
};

export { getList };
