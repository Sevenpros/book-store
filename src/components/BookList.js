import React from 'react';
import SingleBook from './SingleBook';

const BookList = () => {
  const books = [
    {
      id: 1,
      title: 'Learn Programming',
      author: 'Seth.B',
    },
    {
      id: 2,
      title: 'Learn Programming',
      author: 'Seth.B',
    },
  ];
  return (
    <ul>
      {books.map((book) => <SingleBook key={book.id} book={book} />)}
    </ul>
  );
};

export default BookList;
