import React, { useState } from 'react';
import SurveyForm from './components/SurveyForm';
import ThankYouPage from './components/ThankYouPage';
import LoginForm from './components/LoginForm';
import ResultsPage from './components/ResultsPage';
import { Button } from '@/components/ui/button';

const App = () => {
  const [currentView, setCurrentView] = useState('survey');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSurveyComplete = () => {
    setCurrentView('thankYou');
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentView('results');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        {!isAuthenticated && (
          <div className="text-right mb-4">
            <Button 
              onClick={() => setCurrentView('login')}
              variant="outline"
            >
              Admin Login
            </Button>
          </div>
        )}
        
        {currentView === 'survey' && (
          <SurveyForm onComplete={handleSurveyComplete} />
        )}
        
        {currentView === 'thankYou' && (
          <ThankYouPage />
        )}
        
        {currentView === 'login' && (
          <LoginForm onLogin={handleLogin} />
        )}
        
        {currentView === 'results' && isAuthenticated && (
          <ResultsPage onBack={() => setCurrentView('survey')} />
        )}
      </div>
    </div>
  );
};

export default App;