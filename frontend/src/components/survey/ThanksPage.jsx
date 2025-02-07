import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';

const ThanksPage = ({ onReturn }) => {
  return (
    <Card className="max-w-2xl mx-auto m-6 text-center">
      <CardHeader>
        <CardTitle>Thank You!</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 mb-4">
          Your response has been recorded. Thank you for participating in our survey!
        </p>
        <Button 
          variant="outline" 
          onClick={onReturn}
        >
          Return to Home
        </Button>
      </CardContent>
    </Card>
  );
};

export default ThanksPage;