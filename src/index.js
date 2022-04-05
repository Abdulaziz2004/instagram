import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StrictMode>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </StrictMode>

  </React.StrictMode>
)

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

