import React from 'react';

const AddBook = () => {
 return (
    <form className="bookForm">
    <input type="text" placeholder=" Enter Title" />
    <input type="text" placeholder=" Enter Author" />
    <button type="button"> Add </button>
  </form>
 ) 
 };

export default AddBook;
