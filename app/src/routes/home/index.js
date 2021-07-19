"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);

/**
 * @swagger
 * tags:
 *   name: User
 *   description: User API
 */

/**
 * @swagger
 * /login/:
 *   post:
 *     summary: 사용자 로그인
 *     tags: [User]
 *     parameters:
 *       - in: body
 *         name: UserInfo
 *         required: true
 *         description: |
 *          사용자 로그인 정보
 *         schema:
 *            type: object
 *            required:
 *              - id
 *              - password
 *            properties:
 *              id:
 *                type: string
 *              password:
 *                type: string
 *     responses:
 *       200:
 *         description: Success
 *       403:
 *         description: Forbidden
 *       404:
 *         description: NotFound
 *       500:
 *         description: BadRequest
 */
router.post("/login", ctrl.process.login);

/**
 * @swagger
 * /register/:
 *   post:
 *     summary: 사용자 회원가입
 *     tags: [User]
 *     parameters:
 *       - in: body
 *         name: UserInfo
 *         required: true
 *         description: |
 *          사용자 회원가입 정보
 *         schema:
 *            type: object
 *            required:
 *              - id
 *              - name
 *              - password
 *              - confirmPassword
 *            properties:
 *              id:
 *                type: string
 *              name:
 *                type: string
 *              password:
 *                type: string
 *              confirmPassword:
 *                type: string
 *     responses:
 *       200:
 *         description: Success
 *       403:
 *         description: Forbidden
 *       404:
 *         description: NotFound
 *       500:
 *         description: BadRequest
 */
router.post("/register", ctrl.process.register);

module.exports = router;
