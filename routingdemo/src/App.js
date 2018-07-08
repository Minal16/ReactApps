


import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Title = () => {
  return (
      <div className="title">
        <h1>React Router demo</h1>
        <Link to="/list"><button>Show the List</button></Link>
      </div>
  )
}



export default Title;
// module.exports = {
//   Title,
//   List
// };