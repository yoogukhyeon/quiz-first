import nc from 'next-connect';
import { createComment } from './model';

const handler = nc();

//퀴즈 result
/**
 * @swagger
 * /api/quiz/comment:
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
 *           writer:
 *            type: string
 *            example: "유국현"
 *           comment:
 *            type: string
 *            example: "내용작성입니다."
 *           score:
 *            type: number
 *            example: 5
 *     description: quiz 댓글 작성
 *     summary: quiz 댓글 작성
 *     responses:
 *       200:
 *         description: quiz 댓글 작성
 *         content:
 *            application/json:
 *              schema:
 *                  $ref: '#/components/schemas/createComment'
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
 *      createComment:
 *          type: object
 *          properties:
 *              message:
 *               type: string
 *               example: succeess
 */
handler.post(createComment);

export default handler;
