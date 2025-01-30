import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ThankYouPage = () => (
  <Card className="w-full max-w-md mx-auto mt-8 text-center">
    <CardContent className="p-6">
      <h2 className="text-2xl font-bold">Thank You!</h2>
      <p className="mt-4">Your response has been recorded.</p>
    </CardContent>
  </Card>
);

export default ThankYouPage;