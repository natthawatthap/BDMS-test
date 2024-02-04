export const shuffleArray = (array) => {
    const newArray = [...array];
    newArray.sort(() => Math.random() - 0.5);
    return newArray;
  };
  
  export const shuffleQuestions = (questions) => {
    // Shuffle questions
    const shuffledQuestionsCopy = shuffleArray(questions);
  
    // Shuffle answers for each question
    const shuffledQuestionsWithShuffledAnswers = shuffledQuestionsCopy.map((question) => {
      const shuffledAnswers = shuffleArray(question.answers);
      return { ...question, answers: shuffledAnswers };
    });
  
    return shuffledQuestionsWithShuffledAnswers;
  };