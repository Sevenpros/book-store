import React, { useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { addBookActionCreator } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const onClickHandle = () => {
    if (title || author) {
      dispatch({
        type: addBookActionCreator().type,
        book: { title, author },
      });
    }
  };
  return (
    <form className="bookForm">
      <br />
      <input
        type="text"
        placeholder=" Enter Title"
        id="title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder=" Enter Author"
        id="author"
        onChange={(e) => {
          setAuthor(e.target.value);
        }}
      />
      <button
        type="button"
        onClick={onClickHandle}
      >
        Add New
      </button>
    </form>
  );
};

export default AddBook;
