import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import catReducer from './categories/categories';

const reducer = {
  booksReducer,
  catReducer,
};
const store = configureStore({ reducer });
export default store;
