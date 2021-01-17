import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import QuestionNav from './components/questionNumbers'
import Question from './components/question'
import Result from './components/result'
import StartQuiz from './components/startQuiz';
import TimerStart from './components/timerStart';
import BrowseQuiz from './components/browseQuizzes';
import Form from './components/createQuizForm'
import Test from './components/test'


const Routes = () => {
    return (
        <div>
            <Route exact path="/" component={BrowseQuiz}/>
            <Switch>
            <Route exact path="/createQuiz" component={Form}/>
            <Route path="/timerStart/:quizSet_id" component={TimerStart}/>
            <Route path="/startQuizSet=:quizSet_id" component={StartQuiz}/>
            <Route path="/test" component={Test}/>
            </Switch>
            <Switch>
            <Route path="/question/:quizSet_id/:question_id" component={Question}/>
            <Route path="/result/:quizSet_id" component={Result}/>
            </Switch>
        </div>
    )
}

export default Routes;