import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SingleBook from './SingleBook';
import { loadBook } from '../redux/books/books';

const BookList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadBook());
  }, []);
  const books = useSelector((state) => state.booksReducer.books);
  return (
    <ul className="bookList">
      {books.map((book, index) => (
        <SingleBook
          key={book.title}
          book={book}
          index={index}
        />
      ))}
    </ul>
  );
};

export default BookList;
