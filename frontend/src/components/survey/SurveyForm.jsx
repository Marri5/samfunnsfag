import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import QuestionComponent from './QuestionComponent';
import { useSurveyData } from '../../hooks/useSurveyData';

const SurveyForm = ({ onComplete }) => {
  const { currentQuestion, questions, answers, handleAnswer, handleNext, handlePrevious } = useSurveyData();

  return (
    <Card className="max-w-2xl mx-auto m-6">
      <CardHeader>
        <CardTitle>Question {currentQuestion + 1} of {questions.length}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">{questions[currentQuestion].question}</h3>
          <QuestionComponent 
            question={questions[currentQuestion]}
            answer={answers[questions[currentQuestion].id]}
            onAnswer={handleAnswer}
          />
          
          <div className="flex justify-between pt-4">
            <Button 
              variant="outline" 
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              >
                Previous
              </Button>
              <Button 
                onClick={currentQuestion === questions.length - 1 ? onComplete : handleNext}
              >
                {currentQuestion === questions.length - 1 ? 'Submit' : 'Next'}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };
  
  export default SurveyForm;