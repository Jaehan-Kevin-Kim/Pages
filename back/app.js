const express = require("express");
const app = express();
const postRouter = require("./routes/post");
const userRouter = require("./routes/user");
const db = require("./models");

db.sequelize
  .sync()
  .then(() => {
    console.log("db연결 성공!");
  })
  .catch(console.error);

app.use(express.json()); // front-end에서 json 형식의 값을 보내줄 때 사용
app.use(express.urlencoded({ extended: true })); // front-end에서 form submit을 했을 때 urlencoded로 넘어오기 때문에 사용

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

app.listen(3065, () => {
  console.log("Server is running!");
});
