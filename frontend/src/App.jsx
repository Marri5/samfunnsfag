import React, { useState } from 'react';
import { AuthProvider } from '../contexts/AuthContext';
import Navigation from '../components/common/Navigation';
import Footer from '../components/common/Footer';
import HomePage from '../components/survey/HomePage';
import SurveyForm from '../components/survey/SurveyForm';
import ThanksPage from '../components/survey/ThanksPage';
import AdminDashboard from '../components/admin/AdminDashboard';
import { useAuth } from '../hooks/useAuth';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <AdminDashboard />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navigation />
      {currentPage === 'home' && <HomePage onStartSurvey={() => setCurrentPage('survey')} />}
      {currentPage === 'survey' && <SurveyForm onComplete={() => setCurrentPage('thanks')} />}
      {currentPage === 'thanks' && <ThanksPage onReturn={() => setCurrentPage('home')} />}
      <Footer />
    </div>
  );
};

export default App;