import nc from 'next-connect';
import { getList } from './model';

const handler = nc();

/**
 * @swagger
 * /api/quiz/type:
 *   get:
 *     security:
 *        - basicAuth: []
 *     tags: [Quiz API]
 *     parameters:
 *        - name: no
 *          in: query
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
 *                   "questionNo": 1,
 *                   "question": "사람들이 보통 알고 있거나 알아야 하는 지식?",
 *                   "correct_answer": "상식",
 *                   "answer": [
 *                     "박식",
 *                     "학식",
 *                     "지식",
 *                     "상식"
 *                   ],
 *               }]
 */
//퀴즈 리스트 list
handler.get(getList);

export default handler;
