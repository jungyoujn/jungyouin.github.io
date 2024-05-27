//사용자 미들웨어함수 구현
//로그인을 꼭 해야하는 페이지와 하지 않아도 되는 페이지 구분
exports.isLoffedIn = (req, res, next) => {
    //req.isAuthenticated 함수로 요청에 인증여부 확인
    if(req.isAuthenticated()) {  
        next();
    } else {
        res.status(403).send('로그인 필요');
    }
};

exports.isNotLoggedIn = (req, res, next) => {
    if(!req.isAuthenticated()) {
        next();
    } else {
        const message = encodeURIComponent('로그인한 상태입니다.');
        res.redirect(`/?error=${message}`);
    }
};