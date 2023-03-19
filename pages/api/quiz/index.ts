import nc from "next-connect";
import { getList, getUserTotal } from "./model";

const handler = nc();

/**
 * @swagger
 * /api/quiz:
 *   get:
 *     security:
 *        - basicAuth: []
 *     tags: [Quiz API]
 *     description: quiz 사용자 참여자 수
 *     summary: quiz 사용자 참여자 수
 *     responses:
 *       200:
 *         description: quiz 사용자 참여자 수
 *         content:
 *            application/json:
 *              schema:
 *                  $ref: '#/components/schemas/getQuizUser'
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
 *      getQuizUser:
 *          type: object
 *          properties:
 *              message:
 *               type: string
 *               example: succeess
 *              data:
 *               type: object
 *               example: {
 *                   "total": 100,
 *               }
 */
//퀴즈 리스트 list
handler.get(getUserTotal);

export default handler;
