import React from 'react';
import PropTypes, { string } from 'prop-types';

const SingleBook = (props) => {
  const { book } = props;
  const { title, author } = book;
  return (
    <li>
      {title}
      {' '}
      By
      {author}
      <button type="button">Delete</button>
    </li>
  );
};

SingleBook.propTypes = {
  book: PropTypes.shape({ title: string, author: string }).isRequired,

};

export default SingleBook;
