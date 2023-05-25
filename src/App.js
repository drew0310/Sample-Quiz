import React, { useState } from 'react';
import './App.css';
const Quiz = () => {
  const questions = [
    {
      question: 'What is the capital of Australia?',
      options: ['Perth', 'Canberra', 'Sydney'],
      answer: 'Canberra'
    },
    {
      question: 'Which city hosted the 2008 Summer Olympic Games?',
      options: ['Beijing', 'Athens', 'Rio de Janeiro'],
      answer: 'Beijing'
    },
    {
      question: 'How many total Parliamentary constituencies is India currently divided into?',
      options: ['550', '528', '543'],
      answer: '543'
    },
    {
      question: 'Which scientist is considered as the \'Father of Genetics\'?',
      options: ['Carl Linnaeus', 'Charles Darwin', 'Gregor Johann Mendel'],
      answer: 'Gregor Johann Mendel'
    },
    {
      question: 'Where is ISRO\'s Vikram Sarabhai Space Centre located?',
      options: ['Thiruvananthapuram', 'Sriharikota', 'Bangalore'],
      answer: 'Thiruvananthapuram'
    },
    {
      question: 'Which is currently the highest-rated film of all time on IMDb?',
      options: ['12 Angry Men', 'The Shawshank Redemption', 'Schindler\'s list'],
      answer: 'The Shawshank Redemption'
    },
    {
      question: 'Niko Bellic is the main protagonist of which GTA game?',
      options: ['GTA V', 'GTA III', 'GTA IV'],
      answer: 'GTA IV'
    },
    {
      question: 'Which automobile company manufactures the sports car \'Camaro\'?',
      options: ['Toyota', 'Chevrolet', 'Mitsubishi'],
      answer: 'Chevrolet'
    }
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }

    setSelectedOption('');
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const renderOptions = () => {
    const currentQuestion = questions[currentQuestionIndex];

    return currentQuestion.options.map((option, index) => (
      <div key={index} className="option">
        <label>
          <input
            type="radio"
            name="option"
            value={option}
            checked={selectedOption === option}
            onChange={() => handleOptionSelect(option)}
          />
          {option}
        </label>
      </div>
    ));
  };

  const renderQuiz = () => {
    if (currentQuestionIndex >= questions.length) {
      // Display the score in an alert box
      alert(`Your score is: ${score}/${questions.length}`);
      return null;
    }

    const currentQuestion = questions[currentQuestionIndex];

    return (
      <div className="quiz-container">
        <h3>{currentQuestion.question}</h3>
        {renderOptions()}
        <button className="next-button" onClick={handleNextQuestion}>
          Next
        </button>
      </div>
    );
  };

  return (
    <div className="quiz-wrapper">
      <h1>ONLINE QUIZ</h1>
      {renderQuiz()}
    </div>
  );
};

export default Quiz;
