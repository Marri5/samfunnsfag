import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { LogOut, PieChart, Users, Activity } from 'lucide-react';
import { useAuthContext } from '../../contexts/AuthContext';

const AdminDashboard = () => {
  const { logout } = useAuthContext();

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold">Survey Admin Dashboard</h1>
            <Button 
              variant="outline" 
              onClick={logout}
              className="flex items-center"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto py-6 px-4">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <Card>
            <CardContent className="flex items-center p-6">
              <Users className="h-8 w-8 text-blue-500 mr-4" />
              <div>
                <p className="text-sm text-gray-600">Total Responses</p>
                <h3 className="text-2xl font-bold">280</h3>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="flex items-center p-6">
              <Activity className="h-8 w-8 text-green-500 mr-4" />
              <div>
                <p className="text-sm text-gray-600">Response Rate</p>
                <h3 className="text-2xl font-bold">68%</h3>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center p-6">
              <PieChart className="h-8 w-8 text-purple-500 mr-4" />
              <div>
                <p className="text-sm text-gray-600">Completion Rate</p>
                <h3 className="text-2xl font-bold">92%</h3>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Responses Table */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Recent Responses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Platform
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Usage
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[
                    { date: '2024-02-01', platform: 'Instagram', usage: '2-4 hours', status: 'Complete' },
                    { date: '2024-02-01', platform: 'TikTok', usage: '4-6 hours', status: 'Complete' },
                    { date: '2024-02-01', platform: 'Snapchat', usage: '1-2 hours', status: 'Partial' },
                  ].map((response, idx) => (
                    <tr key={idx}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {response.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {response.platform}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {response.usage}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                          ${response.status === 'Complete' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                          {response.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;