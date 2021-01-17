const initState ={
    quizSets:[
    {
    id: '1',
    title: 'About me Quiz',
    questions:[
        {id: '1', question: 'What is my name?', options: ['India', 'Dog', 'Lame', 'Bleh'], answer:'India', userAnswer: '', isAnswered : false},
        {id: '2', question: 'Which country am I from?', options: ['India', 'Nigeria', 'England', 'Siberia'], answer:'Nigeria', userAnswer: '', isAnswered : false},
        {id: '3', question: 'What is my dogs name?', options: ['Something', 'Gandu', 'Rocky', 'Rat'], answer:'Rocky', userAnswer: '', isAnswered : false},
    ]
}
]
}

const rootReducer = (state = initState, action) =>{
    //if (action.type === 'SET_ANSWER'){
      //  let question = state.questions.find(question => 
        //    action.id === question.id)
        //question.userAnswer = action.selectedAnswer;
        //question.isAnswered = true
        //console.log(question.id,question.userAnswer);
        //return {
          //  ...state,
        //}
   // }
    return state;
}

export default rootReducer;