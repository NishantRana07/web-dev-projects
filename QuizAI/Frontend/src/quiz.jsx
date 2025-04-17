import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Quiz() {
  const { state } = useLocation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  if (!state?.quizData) {
    return (
      <div>
        <h2>No quiz data found</h2>
        <button onClick={() => navigate('/')}>Go Back</button>
      </div>
    );
  }

  const { quizData, topic } = state;
  const currentQuestion = quizData.questions[currentIndex];

  const handleAnswer = (optionIndex) => {
    setSelectedOption(optionIndex);
    if (optionIndex === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    setSelectedOption(null);
    setCurrentIndex(currentIndex + 1);
  };

  const handleRestart = () => {
    navigate('/');
  };

  return (
    <div className="quiz-container">
      <h1>{topic} Quiz</h1>
      <div className="progress">
        Question {currentIndex + 1}/{quizData.questions.length}
      </div>
      
      <div className="question">
        <h3>{currentQuestion.question}</h3>
        <div className="options">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              className={`option ${selectedOption === index ? 'selected' : ''}`}
              onClick={() => handleAnswer(index)}
              disabled={selectedOption !== null}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {selectedOption !== null && (
        <div className="feedback">
          {selectedOption === currentQuestion.correctAnswer ? (
            <p>✅ Correct!</p>
          ) : (
            <p>❌ The correct answer was: {
              currentQuestion.options[currentQuestion.correctAnswer]
            }</p>
          )}
          <button onClick={handleNext}>
            {currentIndex < quizData.questions.length - 1 ? 'Next' : 'Finish'}
          </button>
        </div>
      )}

      {currentIndex === quizData.questions.length && (
        <div className="results">
          <h2>Your Score: {score}/{quizData.questions.length}</h2>
          <button onClick={handleRestart}>Start New Quiz</button>
        </div>
      )}
    </div>
  );
}