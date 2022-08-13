import React from 'react';
import SingleBook from './SingleBook';

const BookList = () => {
  const books = [
    {
      id: 1,
      title: 'Learn Programming',
      author: 'Seth.B',
    },
  ];
  return (
    <ul className="bookList">
      {
            books.map((book) => {
              const { id } = book;
                <SingleBook
                  key={id}
                  book={book}
                />;
            })
           }
    </ul>
  );
};

export default BookList;
