import React from 'react';

const QuestionComponent = ({ question, answer, onAnswer }) => {
  switch (question.type) {
    case 'radio':
      return (
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <div key={index} className="flex items-center space-x-2">
              <input
                type="radio"
                id={`${question.id}-${index}`}
                name={`question-${question.id}`}
                value={option}
                checked={answer === option}
                onChange={(e) => onAnswer(question.id, e.target.value)}
                className="h-4 w-4 text-blue-600"
              />
              <label htmlFor={`${question.id}-${index}`} className="text-gray-700">
                {option} 
              </label>
            </div>
          ))}
        </div>
      );
    
    case 'checkbox':
      return (
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <div key={index} className="flex items-center space-x-2">
              <input
                type="checkbox"
                id={`${question.id}-${index}`}
                value={option}
                checked={answer?.includes(option)}
                onChange={(e) => {
                  const currentAnswers = answer || [];
                  const newAnswers = e.target.checked
                    ? [...currentAnswers, option]
                    : currentAnswers.filter(a => a !== option);
                  onAnswer(question.id, newAnswers);
                }}
                className="h-4 w-4 text-blue-600"
              />
              <label htmlFor={`${question.id}-${index}`} className="text-gray-700">
                {option}
              </label>
            </div>
          ))}
        </div>
      );

    case 'scale':
      return (
        <div className="space-y-4">
          <div className="flex justify-between text-sm text-gray-600">
            <span>{question.labels[1]}</span>
            <span>{question.labels[5]}</span>
          </div>
          <input
            type="range"
            min={question.min}
            max={question.max}
            value={answer || 3}
            onChange={(e) => onAnswer(question.id, parseInt(e.target.value))}
            className="w-full"
          />
        </div>
      );

    case 'text':
      return (
        <textarea
          value={answer || ''}
          onChange={(e) => onAnswer(question.id, e.target.value)}
          placeholder={question.placeholder}
          className="w-full p-2 border rounded-md h-24"
        />
      );

    default:
      return null;
  }
};

export default QuestionComponent;