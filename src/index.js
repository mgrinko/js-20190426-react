import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PhonesPage from './PhonesPage';
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
  <BrowserRouter>
    <PhonesPage />
  </BrowserRouter>,

  document.getElementById('root')
);
