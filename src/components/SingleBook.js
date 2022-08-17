import React from 'react';
import PropTypes, { string } from 'prop-types';
import { useDispatch } from 'react-redux/es/exports';
import { removeBookActionCreator } from '../redux/books/books';

const SingleBook = (props) => {
  const dispatch = useDispatch();
  const { book } = props;
  const { id, title, author } = book;
  const onClickHandle = (e) => {
    const { id } = e.target;
    if (id) {
      dispatch({
        type: removeBookActionCreator().type,
        id,
      });
    }
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
          id={id}
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
  book: PropTypes.shape({ id: string, title: string, author: string }).isRequired,
};

export default SingleBook;
