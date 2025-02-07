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
    {
      id: 2,
      type: 'checkbox',
      question: 'Which social media platforms do you use regularly? (Select all that apply)',
      options: [
        'Instagram',
        'TikTok',
        'Snapchat',
        'Facebook',
        'Twitter/X',
        'LinkedIn',
        'Other'
      ]
    },
    {
      id: 3,
      type: 'scale',
      question: 'How concerned are you about privacy on social media?',
      min: 1,
      max: 5,
      labels: {
        1: 'Not concerned at all',
        5: 'Very concerned'
      }
    },
    {
      id: 4,
      type: 'radio',
      question: 'How many hours per day do you spend on social media?',
      options: [
        'Less than 1 hour',
        '1-2 hours',
        '2-4 hours',
        '4-6 hours',
        'More than 6 hours'
      ]
    },
    {
      id: 5,
      type: 'text',
      question: 'What is the main reason you use social media?',
      placeholder: 'Type your answer here...'
    },
    {
      id: 6,
      type: 'radio',
      question: 'Has social media ever influenced your purchasing decisions?',
      options: [
        'Yes, frequently',
        'Yes, occasionally',
        'Rarely',
        'Never',
        'Not sure'
      ]
    },
    {
      id: 7,
      type: 'checkbox',
      question: 'What type of content do you most often engage with? (Select all that apply)',
      options: [
        'News',
        'Entertainment',
        'Educational content',
        'Friends\' updates',
        'Sports',
        'Fashion/Lifestyle',
        'Gaming'
      ]
    },
    {
      id: 8,
      type: 'radio',
      question: 'How do you feel social media has impacted your mental health?',
      options: [
        'Very positively',
        'Somewhat positively',
        'No impact',
        'Somewhat negatively',
        'Very negatively'
      ]
    },
    {
      id: 9,
      type: 'text',
      question: 'What changes would you like to see in social media platforms?',
      placeholder: 'Share your thoughts...'
    },
    {
      id: 10,
      type: 'radio',
      question: 'Do you fact-check information you see on social media?',
      options: [
        'Always',
        'Often',
        'Sometimes',
        'Rarely',
        'Never'
      ]
    },
    {
      id: 11,
      type: 'scale',
      question: 'How important is social media in maintaining your friendships?',
      min: 1,
      max: 5,
      labels: {
        1: 'Not important at all',
        5: 'Very important'
      }
    },
    {
      id: 12,
      type: 'radio',
      question: 'Have you ever taken a break from social media?',
      options: [
        'Yes, frequently',
        'Yes, once or twice',
        'No, but I\'ve considered it',
        'No, never',
        'Currently taking a break'
      ]
    },
    {
      id: 13,
      type: 'checkbox',
      question: 'What negative experiences have you had on social media? (Select all that apply)',
      options: [
        'Cyberbullying',
        'Privacy concerns',
        'Misinformation',
        'FOMO (Fear of Missing Out)',
        'Addiction',
        'None of the above'
      ]
    },
    {
      id: 14,
      type: 'radio',
      question: 'How often do you post on social media?',
      options: [
        'Multiple times per day',
        'Daily',
        'Weekly',
        'Monthly',
        'Rarely or never'
      ]
    },
    {
      id: 15,
      type: 'text',
      question: 'How do you think social media will evolve in the next 5 years?',
      placeholder: 'Share your prediction...'
    }
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