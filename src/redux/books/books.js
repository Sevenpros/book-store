const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const initialState = [
  {
    title: 'programming',
    author: 'Seth Bizimana',
  },
  {
    title: 'learn Python',
    author: 'Brandon H',
  },
  {
    title: 'The best of REACT',
    author: 'React Tutor',
  },
];

const booksRecuder = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1),
      ];

    default: return state;
  }
};
export const addBookActionCreator = () => ({ type: ADD_BOOK });

export const remmoveBookActionCreator = () => ({ type: REMOVE_BOOK });

export default booksRecuder;
