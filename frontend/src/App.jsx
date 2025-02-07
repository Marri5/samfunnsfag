import React, { useState } from 'react';
import { AuthProvider, useAuthContext } from './contexts/AuthContext';
import Navigation from './components/common/Navigation';
import Footer from './components/common/Footer';
import HomePage from './components/survey/HomePage';
import SurveyForm from './components/survey/SurveyForm';
import ThanksPage from './components/survey/ThanksPage';
import AdminDashboard from './components/admin/AdminDashboard';

function AppContent() {
  const [currentPage, setCurrentPage] = useState('home');
  const { isAuthenticated } = useAuthContext(); // Changed from useAuth to useAuthContext

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
}

// Wrap the main app with AuthProvider
function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;