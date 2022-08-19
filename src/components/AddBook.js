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
      category: values.category,
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
      <h3>add New BoOk</h3>
      <form onSubmit={addBookHandler}>
        <input
          className="form-title"
          name="title"
          type="text"
          placeholder="Book title"
          value={values.title}
          onChange={valueChangeHandler}
        />
        <input
          className="form-author"
          name="author"
          type="text"
          placeholder="Which Author?"
          value={values.author}
          onChange={valueChangeHandler}
        />
        <select
          className="form-category"
          name="category"
          type="text"
          placeholder="Which Category?"
          value={values.category}
          onChange={valueChangeHandler}
        >
          <option value="action">action</option>
          <option value="Fiction">Fiction</option>
          <option value="Tech">Tech</option>
          <option value="Education">Education</option>
          <option value="magazine">magazine</option>
        </select>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
