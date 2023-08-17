import express from "express";
import bookRouter from "./routers/book.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server UP!");
});

app.use("/books", bookRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
