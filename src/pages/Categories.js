import React from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { checkStatusActionCreator } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const onClickHandle = () => {
    dispatch({
      type: checkStatusActionCreator().type,
    });
  };
  return (
    <div className="container">
      <button
        type="button"
        onClick={onClickHandle}
      >
        Check Status
      </button>
    </div>
  );
};

export default Categories;
