import nc from "next-connect";
import { getList, createComment } from "./model";

const handler = nc();

//퀴즈 result
/**
 * @swagger
 * /api/quiz/comment:
 *   get:
 *     security:
 *        - basicAuth: []
 *     tags: [Quiz API]
 *     description: quiz 댓글 리스트
 *     summary: quiz 댓글 리스트
 *     responses:
 *       200:
 *         description: quiz 댓글 리스트
 *         content:
 *            application/json:
 *              schema:
 *                  $ref: '#/components/schemas/getCommentList'
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
 *      getCommentList:
 *          type: object
 *          properties:
 *              message:
 *               type: string
 *               example: succeess
 *              data:
 *               type: object
 *               example: [{
 *                   "no": 1,
 *                   "comment": "댓글 입니다.",
 *                   "writer": "관리자",
 *                   "regDate": "2023-03-24 12:54"
 *               }]
 */
handler.get(getList);

/**
 * @swagger
 * /api/quiz/comment:
 *   post:
 *     security:
 *        - basicAuth: []
 *     tags: [Quiz API]
 *     description: quiz 댓글 작성
 *     summary: quiz 댓글 작성
 *     responses:
 *       200:
 *         description: quiz 댓글 작성
 *         content:
 *            application/json:
 *              schema:
 *                  $ref: '#/components/schemas/getCommentList'
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
 *      getCommentList:
 *          type: object
 *          properties:
 *              message:
 *               type: string
 *               example: succeess
 */
handler.post(createComment);

export default handler;
