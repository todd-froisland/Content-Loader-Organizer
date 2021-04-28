import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SkeletonLoader from './SkeletonLoader';

ReactDOM.render(
  <React.StrictMode>
    <SkeletonLoader recipe="EXAMPLE RECIPE"/> //this is how you would implement a recipe
  </React.StrictMode>,
  document.getElementById('root')
);
