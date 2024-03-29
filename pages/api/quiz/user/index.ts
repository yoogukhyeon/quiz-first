import nc from "next-connect";
import { createUser } from "./model";

const handler = nc();

//퀴즈 리스트 list
/**
 * @swagger
 * /api/quiz/user:
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
 *           referUrl:
 *            type: string
 *            example: https://cidermics.com
 *           no:
 *            type: number
 *            example: 2
 *     description: quiz 사용자 히스토리
 *     summary: quiz 사용자 히스토리
 *     responses:
 *       200:
 *         description: quiz 사용자 히스토리
 *         content:
 *            application/json:
 *              schema:
 *                  $ref: '#/components/schemas/createUser'
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
 *      createUser:
 *          type: object
 *          properties:
 *              message:
 *               type: string
 *               example: succeess
 *              data:
 *               type: object
 *               example: {
 *                     "id": 4,
 *                  }
 */
handler.post(createUser);

export default handler;
