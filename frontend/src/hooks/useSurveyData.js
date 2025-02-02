import { useState } from 'react';

export const useSurveyData = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  const questions = [
    {
      id: 1,
      type: 'radio',
      question: 'How often do you use social media?',
      options: [
        'Multiple times per day',
        'Once per day',
        'A few times per week',
        'Rarely',
        'Never'
      ]
    },
    // ... (include all 15 questions from the previous survey component)
  ];

  const handleAnswer = (questionId, answer) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  return {
    currentQuestion,
    questions,
    answers,
    handleAnswer,
    handleNext,
    handlePrevious
  };
};