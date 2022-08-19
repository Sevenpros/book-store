import React from 'react';
import PropTypes, { string } from 'prop-types';
import { useDispatch } from 'react-redux/es/exports';
import { removeBook } from '../redux/books/books';

const SingleBook = (props) => {
  const dispatch = useDispatch();
  const { book } = props;
  const { title, author } = book;
  const onClickHandle = () => {
    dispatch(removeBook(book.item_id));
  };

  return (
    <>
      <li className="bookItem">
        {title}
        {' '}
        By
        {' '}
        {author}
        {' '}
        <button
          type="button"
          onClick={onClickHandle}
        >
          Delete
        </button>
      </li>
      <br />
      {' '}

    </>
  );
};

SingleBook.propTypes = {
  book: PropTypes.shape({ item_id: string, title: string, author: string }).isRequired,
};

export default SingleBook;
