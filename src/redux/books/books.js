const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const initialState = {
  books: [],
};

const booksRecuder = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_BOOK: return [...state, action.book];
    case REMOVE_BOOK:
      return state.books.map((book) => book.id !== action.id);

    default: return state;
  }
};
export const addBookActionCreator = () => ({ type: ADD_BOOK });

export const remmoveBookActionCreator = () => ({ type: REMOVE_BOOK });

export default booksRecuder;
