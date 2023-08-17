import express from "express";
import data from "../data/Sample_data.js";
import Book from "../types/book.js";

const router = express.Router();

router.get("/", (req: express.Request, res: express.Response) => {
  res.send(data);
});

router.get("/:id", (req: express.Request, res: express.Response) => {
  const id = +req.params.id;
  const book = data.find((it) => it.id === id);
  if (book) {
    res.status(200).send(book);
  } else {
    res.status(404).send("Book not found!");
  }
  res.send("Book by id");
});
router.post("/", (req: express.Request, res: express.Response) => {
  if (!req.body.title || req.body.author || req.body.publicationYear) {
    res.status(400).send("Missing required fields");
    return;
  }
  const newBook: Book.Item = {
    id: 1,
    title: req.body.title,
    author: req.body.author,
    publicationYear: parseInt(req.body.publicationYear),
  };
  data.unshift(newBook);
  res.status(201).send("newBook created");
});
router.put("/:id", (req: express.Request, res: express.Response) => {
  res.send("Book Updated");
});

router.delete("/:id", (req: express.Request, res: express.Response) => {
  res.send("Book Deleted");
});

router.get("/", (req: express.Request, res: express.Response) => {
  const bookName = req.query.bookName;
  const publishingYear = req.query.publishingYear;

  if (!bookName && !publishingYear) {
    return res.send(data);
  } else if (bookName) {
    const result = data.filter((Book) => {
      return Book.title.includes(bookName as string);
    });
    res.status(200).send(result);
  } else if (publishingYear) {
    const result = data.filter((Year) => {
      return Year.publicationYear === Number(publishingYear);
    });
    res.status(200).send(result);
  }
});

export default router;
