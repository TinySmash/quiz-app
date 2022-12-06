import React, { Component } from 'react'
import './Quiz.css'

export default class Quiz extends Component {

    componentDidMount(){
        const getQuestions = new Promise(async (res,err) => {
           await fetch(`https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple`)
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.warn(err))
        })
    }
  render() {


    return (
      <div className='quiz-pannel'>
        <h2 className="question-number">Question  number : </h2>
      </div>
    )
  }
}
