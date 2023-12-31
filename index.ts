import express from "express";
import bookRouter from "./routers/book.js";

const app = express();
const PORT = 80;

app.use(express.json());


app.get("/", (req, res) => {
  res.send("Hello world")
})

app.get("/health", function (req, res) {
	res.sendStatus(200);
})

app.use("/books", bookRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
