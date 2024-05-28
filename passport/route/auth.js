const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt'); //bcrypt => 비번 저장위해 설계된 암호화 알고리즘
const { isLoggedIn, isNotLoggedIn } = require('./middlewares'); //사용자 미들웨어
const User = require('../models/user');

const router = express.Router();

//화원가입
router.post('/join', isLoggedIn, async(req, res, next) => {
    const { email, nick, password } = req.body;

    try {
        const exUser = await User.findOne({ where: {email} });  //중복되는 사람 찾고 있으면 에러페이지 리다이렉트
        if(exUser) {
          return res.redirect('/join?error=exist');  //에러페이지
        }

        const hash = await bcrypt.hash(password, 12);

        await User.create({
            email,
            nick,
            password: hash,
        });

        return res.redirect('/');
    } catch(E) {
        console.error(e);
        return next(e);    
    }
});

//로그인 요청
router.post 