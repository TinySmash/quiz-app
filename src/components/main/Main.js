import React from 'react'
import './Main.css';
import { useNavigate } from 'react-router';

export default function Main() {

  const navigate = useNavigate();

  return (
    <div className='mainPage'>
      <h1 className='mainTitle'>Test your Tech knowledge <br />in this <span className='appName'> Quiz app </span></h1>
      <h3 className="subtitle">With a lot of diversified questions about </h3>
      <ul className="subjects">
        <li className="subject-items">
          <h1 className="subject-titles">Politics</h1>
        </li>
        <li className="subject-items">
          <h1 className="subject-titles">Art</h1>
        </li>
        <li className="subject-items">
         <h1 className="subject-titles">Science</h1>
        </li>
      </ul>

      <h3>and more ... </h3>

      <button className='new-quiz' onClick={() => navigate("start-quiz")}>Start new quiz</button>
    </div>
  )
}
