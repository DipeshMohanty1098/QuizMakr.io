const createQuiz = (id, title, questions, answer, userAnswer, isAnswered) => {
    return {
        type: 'CREATE_QUIZ',
        id: id,
        title: title,
        questions: questions,
        answer: answer,
        userAnswer: userAnswer,
        isAnswered: isAnswered
    }
}

export default createQuiz;