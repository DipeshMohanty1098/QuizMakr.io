import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
        <div className = "nav-wrapper blue-grey">
        <a className ="left">QuizMakr.io</a>
        <ul className = "right hide-on-med-and-down">
        <li><Link to="/">Browse Quizzes</Link></li>
        <li><Link to="/createQuiz">Create a quiz</Link></li>
        </ul>
        </div>
        </nav>
    )
}

export default NavBar;