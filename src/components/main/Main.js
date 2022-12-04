import React from 'react'
import './Main.css';

export default function Main() {
  return (
    <div className='mainPage'>
      <h1 className='mainTitle'>Test your Tech knowledge <br />in this <span className='appName'> Quiz app </span></h1>
      <h3 className="subtitle">With a lot of diversified questions about </h3>
      <ul className="subjects">
        <li className="subject-items">
          <h1 className="subject-titles">Javascript</h1>
        </li>
        <li className="subject-items">
          <h1 className="subject-titles">Coding</h1>
        </li>
        <li className="subject-items">
         <h1 className="subject-titles">Linux</h1>
        </li>
      </ul>

      <button className='new-quiz'>Start new quiz</button>
    </div>
  )
}
