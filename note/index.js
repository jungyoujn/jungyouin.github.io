//express.js는 json데이터를 처리하지 못함
//그렇기 때문에 express.json()미들웨어 사용
application.use(express.json());

//오류처리 미들웨어
app.use((err, req, res, next) => {
    res.status(500);

    res.json({
        result: 'fail',
        error: err.message,
    });
});

//Route Handler(직접 처리 필요한 경우 추가)
app.use((req, res, next) => {
    res.status(404);
    res.send({
        result: 'fail',
        error: `Page not found ${req.path}`
    });
});