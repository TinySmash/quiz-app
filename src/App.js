import React from 'react'
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Main from './components/main/Main';

function App() {
  return (
    <>
      <Router>
        <nav className='navbar'>
          <ul className="menu">
            <li>
              <button className="menu-item" id='first-item'>
                <img src="menu-alt-1.png" alt="" className='icons' />
            </button>
            </li>
            <li>
              <button className="menu-item" id='second-item'>
                <img src="question-mark-circle.png" alt="" className='icons' />
              </button>
            </li>
            <li>
            <button className="menu-item" id='third-item'>
              <img src="plus.png" alt="" className='icons' />
            </button>
            </li>
            <li>
            <button className="menu-item" id='fourth-item'>
              <img src="star.png" alt="" className='icons' />
            </button>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route exact path='/' element={<Main/>}></Route>
        </Routes>

      </Router>
    </>
  );
}

export default App;
