import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const LOAD_BOOKS = 'LOAD_BOOKS';
const api = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/tNwigDt836fu3RHgnb2P/books';

const initialState = {
  books: [],
};

const booksRecuder = (state = initialState, action) => {
  switch (action.type) {
    case `${LOAD_BOOKS}/fulfilled`:
      return { ...state, books: action.payload };
    case `${ADD_BOOK}/fulfilled`:
      return { ...state, books: [...state.books, action.payload] };

    case `${REMOVE_BOOK}/fulfilled`:
      return { ...state, books: state.books.filter((book) => book.item_id !== action.payload) };
    default:
      return state;
  }
};

export const addBook = createAsyncThunk(ADD_BOOK, async (book) => {
  await axios.post(api, book);

  return book;
});

export const removeBook = createAsyncThunk(REMOVE_BOOK, async (id) => {
  await axios.delete(`${api}/${id}`, id);

  return id;
});

const transformData = (newObj) => Object.keys(newObj).map((obj) => ({
  item_id: obj,
  title: newObj[obj][0].title,
  author: newObj[obj][0].author,
  category: newObj[obj][0].category,
}));
export const loadBook = createAsyncThunk(LOAD_BOOKS, async () => {
  const res = await fetch(api);
  const data = await res.json();
  const toSend = transformData(data);
  return toSend;
});

export default booksRecuder;
