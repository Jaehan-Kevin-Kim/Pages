const express = require("express");
const app = express();
const path = require("path");
const postRouter = require("./routes/post");
const postsRouter = require("./routes/posts");
const userRouter = require("./routes/user");
const hashtagRouter = require("./routes/hashtag");
const db = require("./models");
const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const passportConfig = require("./passport");
const passport = require("passport");
const dotenv = require("dotenv");
const morgan = require("morgan");
const hpp = require("hpp");
const helmet = require("helmet");

dotenv.config();
db.sequelize
  .sync()
  .then(() => {
    console.log("db연결 성공!");
  })
  .catch(console.error);

passportConfig();

if (process.env.NODE_ENV === "production") {
  app.use(morgan("combined"));
  app.use(hpp());
  app.use(helmet());
} else {
  app.use(morgan("dev"));
}

// app.use(morgan("dev"));
app.use(
  cors({
    origin: ["http://localhost:3060", "nodebird.com", "http://3.98.125.190"],
    credentials: true, // 이걸 true로 하면 cookie도 전달이 됨.
  })
);
app.use("/", express.static(path.join(__dirname, "uploads"))); //static file들 (image, css, js)로 접근 할 수 있게 도와주는 미들웨어. 이 경우에는 upload 폴더로 접근 할 수 있게 함. 간단히 말해서 browser에서 127.0.0.1:3000/images로 접근한다면 express.static()자체는 back-end의 root directory가 됨. 따라서 뒤에 path.join(__dirname, 'uploads')를 이용해서 root/uploads로 접근 할 수 있게 해주는 것. (__dirname 은 현재 폴더: back folder)

app.use(express.json()); // front-end에서 json 형식의 값을 보내줄 때 사용
app.use(express.urlencoded({ extended: true })); // front-end에서 form submit을 했을 때 urlencoded로 넘어오기 때문에 사용
app.use(cookieParser("nodebirdsecret"));
app.use(
  session({
    saveUninitialized: false,
    resave: false,
    // secret: "nodebirdsecret", //secret: Cookie 전달을 위해 보통은 문자열을 바탕으로 cookie의 값을 생성하지만, secret을 이용해서 특정 값을 지정 할 수 있음 //이걸 .env에 보내줘서 code에 나오지 않도록 가림.
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
      domain: process.env.NODE_ENV === "production" && "http://3.98.97.180",
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.send("hello express");
});
app.get("/api", (req, res) => {
  res.send("hello api");
});

app.use("/post", postRouter);
app.use("/posts", postsRouter);
app.use("/user", userRouter);
app.use("/hashtag", hashtagRouter);

/*
app.get("/posts", (req, res) => {
  res.json([
    { id: 1, content: "hello" },
    { id: 2, content: "hello2" },
    { id: 3, content: "hello3" },
  ]);
});
*/
app.use((err, req, res, next) => {});

app.listen(80, () => {
  console.log("Server is running!");
});
