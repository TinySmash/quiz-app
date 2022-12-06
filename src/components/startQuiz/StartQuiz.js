import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './StartQuiz.css';

export default class StartQuiz extends Component {
  render() {
    return (
      <div className='start-quiz-pannel'>
        <h1 className="start-quiz-title">Are you ready ?</h1>

        <form action="" className="actions">
            <Link className="start-actions" to="/">back</Link>
            <Link className="start-actions" to="/quiz">Start</Link>
        </form>

      </div>
    )
  }
}
