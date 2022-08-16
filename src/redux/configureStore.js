import { combineReducers } from 'redux';
import booksReducer from './books/books';
import catReducer from './categories/categories';

combineReducers = ({
  book: booksReducer,
  category: catReducer,
});

export default combineReducers;
