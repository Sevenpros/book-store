import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const initialState = [
  {
    id: uuidv4(),
    title: 'programming',
    author: 'Seth Bizimana',
  },
  {
    id: uuidv4(),
    title: 'learn Python',
    author: 'Brandon H',
  },
  {
    id: uuidv4(),
    title: 'The best of REACT',
    author: 'React Tutor',
  },
];

const booksRecuder = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default: return state;
  }
};
export const addBookActionCreator = () => ({ type: ADD_BOOK });

export const removeBookActionCreator = () => ({ type: REMOVE_BOOK });

export default booksRecuder;
