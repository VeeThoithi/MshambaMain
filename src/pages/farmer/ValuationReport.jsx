import React from 'react';
import { TrendingUp, DollarSign, Calendar, FileText } from 'lucide-react';

const ValuationReport = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Farm Valuation Report</h2>
        <p className="text-gray-600">Professional assessment of your farm's current market value</p>
      </div>

      {/* Current Valuation */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl shadow-sm p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-medium mb-2">Current Farm Valuation</h3>
            <p className="text-4xl font-bold">$3,250,000</p>
            <p className="text-green-100 mt-1">Last updated: January 15, 2024</p>
          </div>
          <div className="text-center">
            <div className="bg-white bg-opacity-20 rounded-full p-4">
              <TrendingUp className="h-12 w-12" />
            </div>
            <p className="mt-2 text-sm">+12.5% from last year</p>
          </div>
        </div>
      </div>

      {/* Valuation Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <DollarSign className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Land Value</p>
              <p className="text-2xl font-bold text-gray-900">$2.1M</p>
            </div>
          </div>
          <p className="text-sm text-gray-500">$8,400 per acre</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center mb-4">
            <div className="bg-green-100 p-3 rounded-lg">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Tree Assets</p>
              <p className="text-2xl font-bold text-gray-900">$850K</p>
            </div>
          </div>
          <p className="text-sm text-gray-500">15,000 mature trees</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center mb-4">
            <div className="bg-orange-100 p-3 rounded-lg">
              <FileText className="h-6 w-6 text-orange-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Equipment</p>
              <p className="text-2xl font-bold text-gray-900">$200K</p>
            </div>
          </div>
          <p className="text-sm text-gray-500">Machinery & tools</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center mb-4">
            <div className="bg-purple-100 p-3 rounded-lg">
              <Calendar className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Infrastructure</p>
              <p className="text-2xl font-bold text-gray-900">$100K</p>
            </div>
          </div>
          <p className="text-sm text-gray-500">Buildings & systems</p>
        </div>
      </div>

      {/* Historical Valuation */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Valuation History</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Date</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Total Value</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Change</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Appraiser</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-4 text-sm text-gray-900">Jan 15, 2024</td>
                <td className="px-4 py-4 text-sm font-medium text-gray-900">$3,250,000</td>
                <td className="px-4 py-4">
                  <span className="text-sm text-green-600">+$362,500 (+12.5%)</span>
                </td>
                <td className="px-4 py-4 text-sm text-gray-600">AgriValue Pro</td>
              </tr>
              <tr>
                <td className="px-4 py-4 text-sm text-gray-900">Jan 20, 2023</td>
                <td className="px-4 py-4 text-sm font-medium text-gray-900">$2,887,500</td>
                <td className="px-4 py-4">
                  <span className="text-sm text-green-600">+$225,000 (+8.5%)</span>
                </td>
                <td className="px-4 py-4 text-sm text-gray-600">FarmAppraisal Inc.</td>
              </tr>
              <tr>
                <td className="px-4 py-4 text-sm text-gray-900">Feb 10, 2022</td>
                <td className="px-4 py-4 text-sm font-medium text-gray-900">$2,662,500</td>
                <td className="px-4 py-4">
                  <span className="text-sm text-green-600">+$162,500 (+6.5%)</span>
                </td>
                <td className="px-4 py-4 text-sm text-gray-600">Rural Value Associates</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Market Analysis */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Market Analysis</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Factors Increasing Value</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                Premium almond variety with high market demand
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                Excellent water rights and modern irrigation
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                Prime location in Sacramento Valley
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                Organic certification pending
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Market Comparison</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Similar farms in area</span>
                <span className="text-sm font-medium text-gray-900">$7,800 - $9,200/acre</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Your farm per acre</span>
                <span className="text-sm font-medium text-green-600">$8,400/acre</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Regional average</span>
                <span className="text-sm font-medium text-gray-900">$8,100/acre</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Actions</h3>
        <div className="flex flex-wrap gap-4">
          <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
            Request New Appraisal
          </button>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Download Full Report
          </button>
          <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors">
            Share with Investors
          </button>
        </div>
      </div>
    </div>
  );
};

export default ValuationReport;