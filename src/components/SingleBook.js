import React from 'react';
import PropTypes, { string } from 'prop-types';
import { useDispatch } from 'react-redux/es/exports';
import { removeBookActionCreator } from '../redux/books/books';

const SingleBook = (props) => {
  const dispatch = useDispatch();
  const { index, book } = props;
  const { title, author } = book;
  const onClickHandle = () => {
    dispatch({
      type: removeBookActionCreator().type,
      index,
    });
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
  book: PropTypes.shape({ title: string, author: string }).isRequired,
  index: PropTypes.number.isRequired,
};

export default SingleBook;
