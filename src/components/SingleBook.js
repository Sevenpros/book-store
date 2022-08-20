import React from 'react';
import PropTypes, { string } from 'prop-types';
import { useDispatch } from 'react-redux/es/exports';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { removeBook } from '../redux/books/books';

const SingleBook = (props) => {
  const dispatch = useDispatch();
  const { book } = props;
  const { title, author, category } = book;
  const onClickHandle = () => {
    dispatch(removeBook(book.item_id));
  };

  return (
    <>
      <li className="bookItem">
        <section className="bookInfo">
          <span className="catName">{category}</span>
          <h2 className="title">{title}</h2>
          <h4 className="author">{author}</h4>
          <ul className="actionList">
            <li><button type="button" className="actionBtn">Comment</button></li>
            <li>
              <button type="button" onClick={onClickHandle} className="actionBtn">
                Remove
              </button>
            </li>
            <li><button type="button" className="actionBtn">Edit</button></li>
          </ul>
        </section>
        <section className="bookProgress">
          <div className="progressBar">
            <CircularProgressbar value="65" text="65" />
          </div>
          <div className="progressPercent">
            <h3 className="progPerc">65%</h3>
            <h3 className="completed">Completed</h3>
          </div>
        </section>
        <section className="bookChapter">
          <h3 className="chapName">CURRENT CHAPTER</h3>
          <h3 className="chapNumber">Chapter 17</h3>
          <button className="updateBtn" type="button">
            UPDATE PROGRESS
          </button>
        </section>
      </li>
      <br />
      {' '}

    </>
  );
};

SingleBook.propTypes = {
  book: PropTypes.shape({
    item_id: string, title: string, author: string, category: string,
  }).isRequired,
};

export default SingleBook;
