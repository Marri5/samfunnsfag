import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Share2, ChevronRight, Camera } from 'lucide-react';

const HomePage = ({ onStartSurvey }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Card className="bg-white">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Social Media Usage Survey</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-gray-700">
              Welcome to our research project on social media usage patterns and their impact on society. 
              This survey aims to collect data about how young people use social media and its effects on daily life.
            </p>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Important Information</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>This survey is completely anonymous</li>
                <li>Data will be stored securely and deleted after 6 months</li>
                <li>Estimated completion time: 10-15 minutes</li>
              </ul>
            </div>

            <div className="flex justify-center space-x-4">
              <Button 
                onClick={onStartSurvey}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Start Survey <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              
              <Button variant="outline" className="flex items-center">
                <Share2 className="mr-2 h-4 w-4" />
                Share Survey
              </Button>
            </div>

            <div className="flex justify-center mt-4">
              <div className="p-4 border rounded-lg">
                <div className="text-center mb-2">Scan QR Code</div>
                <div className="w-32 h-32 bg-gray-200 flex items-center justify-center">
                  <Camera className="h-8 w-8 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HomePage;