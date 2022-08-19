import React from 'react';
import BookList from './BookList';
import AddBook from './AddBook';

const Books = () => (
  <div className="bookContainer">
    <BookList />
    <AddBook />
  </div>
);
export default Books;
