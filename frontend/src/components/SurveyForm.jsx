import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const SurveyForm = ({ onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  const questions = [
    "What is your age group?",
    "How often do you use social media?",
    "What is your preferred platform?"
  ];

  const handleSubmit = async () => {
    try {
      await fetch('http://localhost:5000/api/survey', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ answers }),
      });
      onComplete();
    } catch (error) {
      console.error('Error submitting survey:', error);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto mt-8">
      <CardHeader>
        <h2 className="text-2xl font-bold">Survey Question {currentQuestion + 1}/{questions.length}</h2>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-lg">{questions[currentQuestion]}</p>
          <Input
            type="text"
            value={answers[currentQuestion] || ''}
            onChange={(e) => setAnswers({
              ...answers,
              [currentQuestion]: e.target.value
            })}
            className="w-full"
          />
          <div className="flex justify-between mt-4">
            {currentQuestion > 0 && (
              <Button
                onClick={() => setCurrentQuestion(curr => curr - 1)}
                variant="outline"
              >
                Previous
              </Button>
            )}
            {currentQuestion < questions.length - 1 ? (
              <Button
                onClick={() => setCurrentQuestion(curr => curr + 1)}
                className="ml-auto"
              >
                Next
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                className="ml-auto"
              >
                Submit
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SurveyForm;