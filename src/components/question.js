import React from 'react';
import {connect} from 'react-redux'
import setAnswer from '../actions/setAnswers';
import {Link} from 'react-router-dom'
import QuestionNav from './questionNumbers';


class Question extends React.Component {
    state = {
        selectedAnswer: '',
        color: "red",
        status: [],
        timer: 300,
    }

    componentDidMount(){
        let timer = setInterval(()=>{
            this.setState({
                timer: Number(this.state.timer) -1
            })
            if (this.state.timer == 0){
                this.props.history.push("/result/" + this.props.match.params.quizSet_id)
                clearInterval(timer);
            }
            
        },1000)
    }
 
    onChangeHandler =(option)=>{
        this.setState({
            selectedAnswer: option,
            status: true
        })
        this.props.setAnswer(this.props.match.params.quizSet_id,this.props.match.params.question_id, option);
        this.setState({
            status: [...this.state.status],
        })
        console.log(this.state.status)
        //if (this.props.match.params.question_id < 3){
        //this.props.history.push('/question/' + (Number(this.props.match.params.question_id)+1))
        //}
    }
    
    render(){
    const questions = this.props.questions;
    let id = Number(this.props.match.params.question_id) - 1
    console.log(questions);
    return(
        <div>
        <div className="right"><p>{this.state.timer} seconds left</p></div>
        <h5 className="navi">Navigate Questions</h5>
        <QuestionNav status={this.state.status} pid = {this.props.match.params.quizSet_id}/>
        <div className="center" id="question">
        <h1>{questions[id].id + '. ' + questions[id].question}</h1>
        </div>
        <form >
        {questions[id].options.map(option =>{
            return(
                <p>
                <label>
                <div key={questions[id].id + option} className ="option">
                <input value={option} type="radio" className="with-gap" onChange={() => this.onChangeHandler(option)} 
                checked={option == questions[id].userAnswer}/>
                    <span>{option}</span>
                </div>
                </label>
                </p>
            )
        })}
        </form>
        <br/>
        <div className="center">
        <Link to={"/result/" + this.props.match.params.quizSet_id} className="waves-effect waves-light btn grey darken-2">SUBMIT QUIZ</Link>
        </div>
        </div>
    )
    }
}

const mapStateToProps = (state,ownProps)=>{
    return {
        questions: state.quizSets.find(quizSet => quizSet.id === ownProps.match.params.quizSet_id).questions
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setAnswer: (qid,id, selectedAnswer) => {
            dispatch(
                setAnswer(qid,id, selectedAnswer)
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Question);