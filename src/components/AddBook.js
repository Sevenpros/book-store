import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    title: '',
    author: '',
    category: '',
  });
  const valueChangeHandler = (v) => {
    v.preventDefault();
    setValues({ ...values, [v.target.name]: v.target.value });
  };

  const addBookHandler = async (b) => {
    b.preventDefault();
    if (!values.title.trim()) {
      return;
    }

    const book = {
      item_id: uuidv4(),
      title: values.title,
      author: values.author,
      category: 'Technology',
    };

    dispatch(addBook(book));
    // dispatch(addBook(newBook.config.data));
    // reinitialize the values
    setValues({
      title: '',
      author: '',
      category: '',
    });
  };

  return (
    <div className="form-container">
      <h3 className="newBookTitle">ADD NEW BOOK</h3>
      <form onSubmit={addBookHandler} className="bookForm">
        <input
          className="form-title"
          name="title"
          type="text"
          placeholder="Book title"
          value={values.title}
          onChange={valueChangeHandler}
        />
        <input
          id="form-author"
          name="author"
          type="text"
          placeholder="Author"
          value={values.author}
          onChange={valueChangeHandler}
        />
        <button type="submit" className="updateBtn addBtn">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
