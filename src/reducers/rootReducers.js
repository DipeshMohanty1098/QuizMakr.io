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
    },
    {
        id: '2',
        title: 'About me Quiz2',
        questions:[
            {id: '1', question: 'What is my name123?', options: ['India', 'Dog', 'Lame', 'Bleh'], answer:'India', userAnswer: '', isAnswered : false},
            {id: '2', question: 'Which country am I from123?', options: ['India', 'Nigeria', 'England', 'Siberia'], answer:'Nigeria', userAnswer: '', isAnswered : false},
            {id: '3', question: 'What is my dogs name123?', options: ['Something', 'Gandu', 'Rocky', 'Rat'], answer:'Rocky', userAnswer: '', isAnswered : false},
        ]
    }
]
}

const rootReducer = (state = initState, action) =>{
    if (action.type === 'SET_ANSWER'){
        let question = state.quizSets.find(quizSet => 
            action.qid === quizSet.id).questions.find(q => q.id === action.id)
        question.userAnswer = action.selectedAnswer;
        question.isAnswered = true
        console.log("rootReducer Question: " + question.id);
        return {
            ...state,
        }
    }
    if (action.type == 'CREATE_QUIZ'){
        let quizSet = {
            id: String(action.id),
            title: action.title,
            questions: action.questions,
        }
        let quizSetList = [...state.quizSets, quizSet];
        console.log(state.quizSets);
        return {
            ...state,
            quizSets: quizSetList
        }
        
    }
    return state;
}

export default rootReducer;