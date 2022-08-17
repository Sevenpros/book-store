import React from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { checkStatusActionCreator } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const onClickHandle = () => {
    dispatch({
      type: checkStatusActionCreator().type,
    });
  };
  const categories = useSelector((state) => state.catReducer.categories);
  return (
    <div className="container">
      <button
        type="button"
        onClick={onClickHandle}
      >
        Check Status
      </button>
      <div><h1>{categories}</h1></div>
    </div>
  );
};

export default Categories;
