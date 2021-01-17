import { render } from '@testing-library/react';
import React from 'react';

class TimerStart extends React.Component {
    state = {
        counter: 5
    }

    componentDidMount(){
       let timer = setInterval(()=>{
            this.setState({
                counter: Number(this.state.counter) - 1
            })
            if (this.state.counter == 0){
                this.props.history.push('/question/' + this.props.match.params.quizSet_id + '/' +1)
                clearInterval(timer);
            }
        },1000)
    }

    componentWillUnmount(){
    }


    
    render(){
        return(
        <div className="center">
        <h1>Quiz Starts in 5 seconds!</h1>
        <h2>{this.state.counter}</h2> 
        </div>
        )
    }
}

export default TimerStart;