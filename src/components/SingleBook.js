import React from 'react';
import PropTypes from 'prop-types';

const SingleBook = () => {
    console.log('this is props');
//   const { book } = props;
//   const { title, author } = book;
  return (
    <li> hello
      {/* {title}
      {' '}
      By
      {author}
      <button type="button">Delete</button> */}
    </li>
  );
};

SingleBook.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default SingleBook;
