import React, { useState } from 'react';
import { DollarSign, Users, Calendar, Target } from 'lucide-react';

const SetupInvestment = () => {
  const [investmentData, setInvestmentData] = useState({
    title: '',
    description: '',
    targetAmount: '',
    minimumInvestment: '',
    duration: '',
    expectedReturn: '',
    purpose: ''
  });

  const handleInputChange = (e) => {
    setInvestmentData({
      ...investmentData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Investment setup:', investmentData);
    // Handle form submission
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Setup Investment Opportunity</h2>
        <p className="text-gray-600">Create a new investment opportunity for your farm project</p>
      </div>

      {/* Investment Form */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Investment Title
              </label>
              <input
                type="text"
                name="title"
                value={investmentData.title}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="e.g., Almond Grove Expansion Project"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Investment Purpose
              </label>
              <select
                name="purpose"
                value={investmentData.purpose}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              >
                <option value="">Select Purpose</option>
                <option value="expansion">Farm Expansion</option>
                <option value="equipment">New Equipment</option>
                <option value="irrigation">Irrigation System</option>
                <option value="organic">Organic Certification</option>
                <option value="storage">Storage Facilities</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Project Description
            </label>
            <textarea
              name="description"
              value={investmentData.description}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Describe your investment project, goals, and how funds will be used..."
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Target Amount ($)
              </label>
              <input
                type="number"
                name="targetAmount"
                value={investmentData.targetAmount}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="50000"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Minimum Investment ($)
              </label>
              <input
                type="number"
                name="minimumInvestment"
                value={investmentData.minimumInvestment}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="1000"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Duration (months)
              </label>
              <input
                type="number"
                name="duration"
                value={investmentData.duration}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="24"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Expected Return (%)
              </label>
              <input
                type="number"
                step="0.1"
                name="expectedReturn"
                value={investmentData.expectedReturn}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="8.5"
                required
              />
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Save Draft
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              Publish Investment
            </button>
          </div>
        </form>
      </div>

      {/* Current Investments */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Investment Opportunities</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-start justify-between mb-3">
              <h4 className="font-medium text-gray-900">Almond Grove Expansion</h4>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                Active
              </span>
            </div>
            
            <div className="space-y-2 text-sm text-gray-600 mb-4">
              <div className="flex items-center">
                <Target className="h-4 w-4 mr-2 text-green-600" />
                <span>Target: $75,000</span>
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2 text-blue-600" />
                <span>8 investors</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2 text-orange-600" />
                <span>24 months</span>
              </div>
              <div className="flex items-center">
                <DollarSign className="h-4 w-4 mr-2 text-purple-600" />
                <span>9.2% expected return</span>
              </div>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
              <div className="bg-green-600 h-2 rounded-full" style={{ width: '68%' }}></div>
            </div>
            <div className="text-sm text-gray-600">$51,000 raised (68% of goal)</div>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-start justify-between mb-3">
              <h4 className="font-medium text-gray-900">Irrigation System Upgrade</h4>
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                Funded
              </span>
            </div>
            
            <div className="space-y-2 text-sm text-gray-600 mb-4">
              <div className="flex items-center">
                <Target className="h-4 w-4 mr-2 text-green-600" />
                <span>Target: $35,000</span>
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2 text-blue-600" />
                <span>12 investors</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2 text-orange-600" />
                <span>18 months</span>
              </div>
              <div className="flex items-center">
                <DollarSign className="h-4 w-4 mr-2 text-purple-600" />
                <span>7.8% expected return</span>
              </div>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '100%' }}></div>
            </div>
            <div className="text-sm text-gray-600">$35,000 raised (100% of goal)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetupInvestment;