const express = require("express");
const app = express();
const postRouter = require("./routes/post");
const userRouter = require("./routes/user");
const db = require("./models");
const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const passportConfig = require("./passport");
const passport = require("passport");
const dotenv = require("dotenv");

dotenv.config();
db.sequelize
  .sync()
  .then(() => {
    console.log("db연결 성공!");
  })
  .catch(console.error);

passportConfig();

app.use(
  cors({
    origin: "*",
    credentials: false,
  })
);
app.use(express.json()); // front-end에서 json 형식의 값을 보내줄 때 사용
app.use(express.urlencoded({ extended: true })); // front-end에서 form submit을 했을 때 urlencoded로 넘어오기 때문에 사용
app.use(cookieParser("nodebirdsecret"));
app.use(
  session({
    saveUninitialized: false,
    resave: false,
    // secret: "nodebirdsecret", //secret: Cookie 전달을 위해 보통은 문자열을 바탕으로 cookie의 값을 생성하지만, secret을 이용해서 특정 값을 지정 할 수 있음 //이걸 .env에 보내줘서 code에 나오지 않도록 가림.
    secret: process.env.COOKIE_SECRET,
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
app.get("/posts", (req, res) => {
  res.json([
    { id: 1, content: "hello" },
    { id: 2, content: "hello2" },
    { id: 3, content: "hello3" },
  ]);
});

app.use("/post", postRouter);
app.use("/user", userRouter);

app.use((err, req, res, next) => {});

app.listen(3065, () => {
  console.log("Server is running!");
});
