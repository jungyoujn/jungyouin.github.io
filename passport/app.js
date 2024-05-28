const passport = require('passport');
const passportConfig = require('./passport');

const authRouter = require('./routes/auth'); //인증 라우터

const app = express();
passportConfig(); //패스포트 설정

app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
    session({
        resave: false,
        saveUninitialized: false,
        secret: process.env.COOKIE_SECRET,
        cookie: {
            httpOnly: true,
            secure: false,
        },
    }),
);

//req.session 객체는 express-session에서 생성, 뒤에 연결해야 함.
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRouter);