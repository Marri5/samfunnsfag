import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ResultsPage = ({ onBack }) => {
  const [results, setResults] = useState([]);
  const [token] = useState(localStorage.getItem('token'));

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/results', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const data = await response.json();
        setResults(data);
      } catch (error) {
        console.error('Error fetching results:', error);
      }
    };

    fetchResults();
  }, [token]);

  return (
    <Card className="w-full max-w-4xl mx-auto mt-8">
      <CardHeader className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Survey Results</h2>
        <Button onClick={onBack} variant="outline">Back to Survey</Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {results.map((result, index) => (
            <div key={index} className="border p-4 rounded">
              <p className="font-bold">Response {index + 1}</p>
              <pre className="mt-2 whitespace-pre-wrap">{JSON.stringify(result.answers, null, 2)}</pre>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ResultsPage;