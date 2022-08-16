import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import catReducer from './categories/categories';

const rootReducer = configureStore({
  book: booksReducer,
  category: catReducer,
});

export default rootReducer;
