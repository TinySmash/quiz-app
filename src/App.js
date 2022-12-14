import React  from 'react'
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Main from './components/main/Main';
import StartQuiz from './components/startQuiz/StartQuiz';
import Quiz from './components/quiz/Quiz';

function App() {
  
  
  const openMenu = (e) => {
    e.preventDefault();
    let navbar = document.querySelector('.navbar');
    let menuTitles = document.querySelectorAll('.menu-titles');
    navbar?.classList?.toggle('opened');    
    for(let i = 0; i < menuTitles.length; i++){
      menuTitles?.[i]?.classList?.toggle('show');
    }
  }




  return (
    <>
      <Router>
        <nav className='navbar'>
          <ul className="menu">
            <li>
              <button className="menu-item" id='first-item' onClick={openMenu}>
                <img src="menu-alt-1.png" alt="" className='icons' />
              </button>
              <h1 className="menu-titles">Menu</h1>
            </li>
            <li>
              <Link className="menu-item" id='second-item' to='/start-quiz'>
                <img src="question-mark-circle.png" alt="" className='icons' />
              </Link>
              <h1 className="menu-titles">Start quiz</h1>
            </li>
            <li>
            <Link className="menu-item" id='third-item'>
              <img src="plus.png" alt="" className='icons' />
            </Link>
            <h1 className="menu-titles">Add costum questions</h1>
            </li>
            <li>
            <Link className="menu-item" id='fourth-item'>
              <img src="star.png" alt="" className='icons' />
            </Link>
            <h1 className="menu-titles">Rate us</h1>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route exact path='/' element={<Main/>}></Route>
          <Route exact path='/start-quiz' element={<StartQuiz/>}></Route>
          <Route exact path='/quiz' element={<Quiz/>}></Route>
        </Routes>

      </Router>
    </>
  );
}

export default App;
