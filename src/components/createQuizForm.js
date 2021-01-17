import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import createQuiz from '../actions/createQuizSet'

class Form extends React.Component{
    state = {
        id: 0,
        title: '',
        questions: [],
        question: '',
        questionID: 1,
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        answer: '',
        userAnswer: '',
        isAnswered: false,
        error: ''
    }

    componentDidMount(){
        this.setState({
            id: Number(this.props.quizSets.length) + 1
        })
    }


    onChangeHandler = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })  
    }

    addQuestion = (e) => {
        let answer = this.state.answer;
        e.preventDefault();
        if (answer != this.state.option1 &&
            answer != this.state.option2 &&
            answer != this.state.option3 &&
            answer != this.state.option4 ){
                this.setState({
                    error: "Answer matches none of the options!"
                })
        }else{
        let question = {
            id: String(this.state.questionID),
            question: this.state.question,
            options: [this.state.option1,this.state.option2,this.state.option3,this.state.option4],
            answer: this.state.answer,
            userAnswer: "",
            isAnswered: false,   
        }
        let questionList = this.state.questions
        questionList.push(question);
        this.setState({
            questions: questionList
        })
        this.setState({
            question: '',
            questionID: Number(this.state.questionID) + 1,
            option1: '',
            option2: '',
            option3: '',
           option4: '',
            answer: '',
           userAnswer: '',
           error: ''
        })
        console.log(this.state.questions);
    }
    }

    submitQuiz = (e) => {
        if (this.state.answer == '' ||
        this.state.question == '' ||
        this.state.option1 == ''||
        this.state.option2 == ''||
        this.state.option3== '' ||
        this.state.option4 == '' ||
        this.state.title == '' ||
        this.state.answer == '' ){
            this.setState({
                error: "Enter all fields to submit!"
            })
        }
        else{
            let answer = this.state.answer;
            e.preventDefault();
            if (answer != this.state.option1 &&
                answer != this.state.option2 &&
                answer != this.state.option3 &&
                answer != this.state.option4 ){
                    this.setState({
                        error: "Answer matches none of the options!"
                    })
            }else{
            let question = {
                id: String(this.state.questionID),
                question: this.state.question,
                options: [this.state.option1,this.state.option2,this.state.option3,this.state.option4],
                answer: this.state.answer,
                userAnswer: "",
                isAnswered: false,   
            }
            let questionList = this.state.questions
            questionList.push(question);
            this.setState({
                questions: questionList
            })
            this.setState({
                question: '',
                questionID: Number(this.state.questionID) + 1,
                option1: '',
                option2: '',
                option3: '',
               option4: '',
                answer: '',
               userAnswer: '',
               error: ''
            })
            console.log(this.state.questions);
        }
        this.props.createQuiz(
            this.state.id,
            this.state.title,
            this.state.questions,
            this.state.answer,
            this.state.userAnswer,
            this.state.isAnswered
        )
        this.props.history.push("/")
        }

    }

    render(){
        return (
            <div className="center">
            <form>
                <label htmlFor="title">Quiz Title:</label>
                <input type="text" id="title" onChange = {this.onChangeHandler} placeholder="Enter title" value={this.state.title} required/>
                <label htmlFor="question">Question:</label>
                <input type="text" onChange = {this.onChangeHandler} id = "question" placeholder={"Enter Question " + this.state.questionID} value={this.state.question} required/>
                <label htmlFor="option1">Option 1:</label>
                <input type="text" onChange = {this.onChangeHandler} id = "option1" placeholder="Enter option 1" value={this.state.option1} required/>
                <label htmlFor="option2">Option 2:</label>
                <input type="text" onChange = {this.onChangeHandler} id = "option2" placeholder="Enter option 2" value={this.state.option2} required/>
                <label htmlFor="option3">Option 3:</label>
                <input type="text" onChange = {this.onChangeHandler} id = "option3" placeholder="Enter option 3" value={this.state.option3} required/>
                <label htmlFor="option4">Option 4:</label>
                <input type="text" onChange = {this.onChangeHandler} id = "option4" placeholder="Enter option 4" value={this.state.option4} required/>
                <label htmlFor="option4">Answer:</label>
                <input type="text" onChange = {this.onChangeHandler} id = "answer" placeholder="Enter answer (case senstitive)" value={this.state.answer} required/>
                <p style={{color: "red"}}>{this.state.error}</p>
                <button className="waves-effect waves-light btn grey darken-2" onClick={this.addQuestion} disabled={this.state.questions.length == 10 ? true : false}>Add Question</button> 
                <br/>
                <br/>
                <button onClick = {this.submitQuiz} className="waves-effect waves-light btn grey darken-2">Submit Quiz</button>
                </form>
            </div>
            
            
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        quizSets: state.quizSets
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createQuiz: (id, title, questions, answer, userAnswer, isAnswered) => {
            dispatch(
                createQuiz(id, title, questions, answer, userAnswer, isAnswered)
            )
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Form);