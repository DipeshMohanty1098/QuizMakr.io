const setAnswer = (qid,id, selectedAnswer, status) => {
    return {
        type: 'SET_ANSWER',
        id: id,
        qid: qid,
        selectedAnswer: selectedAnswer,
        status: status,
    }
}

export default setAnswer;