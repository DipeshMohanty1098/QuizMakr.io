import React from 'react';
import {Link} from 'react-router-dom'


const StartQuiz = (props) => {
    const id = props.match.params.quizSet_id
    return (
        <div className = "center">
        <h2>You get 5 minutes to complete the quiz!</h2>
        <h2>Click on the question numbers on the top left to navigate between questions!</h2>
        <h2>The question numbers will turn green with a check sign upon attempting the question!</h2>
        <h2>All the best!</h2>
        <center>
        <Link to={"/timerStart/" + id} className="waves-effect waves-light btn grey darken-2">Start Quiz</Link>
        </center>
        </div>
    )
}

export default StartQuiz;