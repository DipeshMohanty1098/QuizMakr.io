import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Question from './question'


class QuestionNav extends React.Component{
    state = {
        color: "green",
        status: ''
    }

    changeColor = () => {
        this.setState({
            color: "red"
        })
    }

    check = (question) => {
        if (question.isAnswered == true){
            return true
        }
        else{
            return false
        }
    }


    render(){
        const {questions,pid} = this.props
        
        console.log("array: "+questions)
        console.log("id: "+ pid)
        const questionLinks = questions.length ? questions.map(question => {
            return (
                <div key={question.id + question.question} className="questionNumber">
                <div className="rand">
                <nobr>
                <Link to={"/question/"+ pid + '/' + question.id}><h5 style={{color: question.isAnswered ? "green" : "red"}}>{question.id}{question.isAnswered ? <i className="material-icons" id="tick" style= {{color: "black"}}>check</i>: <p></p>}</h5></Link>
                </nobr>
                </div>
                </div>
            )
        }) : (
                <div>
                Nothing here
                </div>
        )
        return(
            <div className="questions">
                {questionLinks}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.pid
    return {
        questions: state.quizSets.find(quizSet => quizSet.id === id).questions
    }
}

export default connect(mapStateToProps)(QuestionNav);