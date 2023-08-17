import express from "express";
export namespace Book {
  export interface Item {
    id: number;
    title: string;
    author: string;
    publicationYear: number;
  }

  export interface Request extends express.Request {
    body: {
      id: number;
      title: string;
      author: string;
      publicationYear: number;
    };
    query: {
      bookName: string;
      publishingYear: string;
    };
  }

  export interface Response extends express.Response {}
}

export default Book;
