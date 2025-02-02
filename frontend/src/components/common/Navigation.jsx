import React from 'react';
import { Button } from '@/components/ui/button';
import { useAuth } from '../../hooks/useAuth';

const Navigation = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold">Social Studies Survey</h1>
          <div className="flex space-x-4">
            <Button variant="ghost">About</Button>
            <Button variant="ghost">Contact</Button>
            {isAuthenticated && (
              <Button variant="outline" onClick={logout}>
                Logout
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;