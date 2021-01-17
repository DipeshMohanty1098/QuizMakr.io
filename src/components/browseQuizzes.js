import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


class BrowseQuiz extends React.Component{
    render(){
    const {quizSets} = this.props;
    console.log(quizSets);
    const quizList = quizSets.length ? quizSets.map(quizSet => {
        return (
          <div className="row" key={quizSet.id}>
          <div className="col s12 m6">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">{quizSet.title}</span>
              </div>
              <div className="card-action">
                <Link to ={"/startQuizSet=" + quizSet.id}>Attempt Quiz</Link>
              </div>
            </div>
          </div>
        </div>
        ) 
    }) : (
      <div><h1>Nothing here...</h1></div>
    )
    return (
      <div>
      {quizList}
      </div>
    )
    
}
}

const mapStateToProps = (state) => {
    return {
        quizSets: state.quizSets
    }
}

export default connect(mapStateToProps)(BrowseQuiz);