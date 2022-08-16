const CHECK_STATUS = 'CHECK_STATUS';
const initialState = {
  categories: [],
};

const catReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHECK_STATUS:
      return { categories: 'Under Contstruction' };
    default: return state;
  }
};

export const checkStatusActionCreator = () => ({
  type: CHECK_STATUS,
});

export default catReducer;
