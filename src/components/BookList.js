import React from 'react';
import { useSelector } from 'react-redux';
import SingleBook from './SingleBook';

const BookList = () => {
  const books = useSelector((state) => state.booksReducer);
  return (
    <ul className="bookList">
      {books.map((book, index) => (
        <SingleBook
          key={book.id}
          book={book}
          index={index}
        />
      ))}
    </ul>
  );
};

export default BookList;
