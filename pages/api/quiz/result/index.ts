import nc from "next-connect";
import { createResult } from "./model";

const handler = nc();

//퀴즈 result
/**
 * @swagger
 * /api/quiz/result:
 *   post:
 *     security:
 *        - basicAuth: []
 *     tags: [Quiz API]
 *     requestBody:
 *      x-name: body
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *          properties:
 *           id:
 *            type: number
 *            example: 2
 *           no:
 *            type: number
 *            example: 1
 *           score:
 *            type: number
 *            example: 5
 *     description: quiz 결과 히스토리
 *     summary: quiz 결과 히스토리
 *     responses:
 *       200:
 *         description: quiz 결과 히스토리
 *         content:
 *            application/json:
 *              schema:
 *                  $ref: '#/components/schemas/createResult'
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
 *      createResult:
 *          type: object
 *          properties:
 *              message:
 *               type: string
 *               example: succeess
 */
handler.post(createResult);

export default handler;
