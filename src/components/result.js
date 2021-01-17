import React from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


class Result extends React.Component {
    state = {
        string: '',
        result: 0,
    }
    componentDidMount(){
    let questions = this.props.questions
    let result = 0
    for (let i = 0; i< questions.length ; i++ ){
        if (questions[i].userAnswer == questions[i].answer){
            this.setState({
                result: Number(this.state.result) + 1
            })
        }
    }
    let string = ''
    if ((result / questions.length)*100 > 90){
        this.setState({
        string : "Congrats! You aced it!"
        })
    }
    else{
        this.setState({
        string : "You did Okay"
        })
    }
}
    render(){
    return (
        <div className="center">
        <h1>{this.state.result}</h1>
        <h1>{this.state.string}</h1>
        <br/> 
        <br/> 
        <br/>
        <Link to="/" class="waves-effect waves-light btn grey" className="home">Back to home!</Link>
        </div>
    )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.quizSet_id
    return{
    questions: state.quizSets.find(quizSet=> quizSet.id === id).questions
    }
}


export default connect(mapStateToProps)(Result);