import React, { useState } from 'react';
import { ArrowLeft, Mail, Lock, User, Phone, Eye, EyeOff, Sprout } from 'lucide-react';

export const Auth = ({ onBack, mode = 'login', onModeChange }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    phone: '',
    userType: 'investor'
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      if (mode === 'signup') {
        alert('Account created successfully! Please check your email to verify your account.');
      } else {
        alert('Login successful! Welcome to M-Shamba.');
      }
      setIsLoading(false);
      onBack();
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white w-full">
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md w-full">
          {/* Back Button */}
          <button 
            onClick={onBack}
            className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Dashboard</span>
          </button>

          {/* Logo and Title */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                <Sprout className="w-6 h-6 text-white" />
              </div>
              <span className="text-3xl font-bold">M-Shamba</span>
            </div>
            <h1 className="text-2xl font-bold mb-2">
              {mode === 'login' ? 'Welcome Back' : 'Join M-Shamba'}
            </h1>
            <p className="text-gray-400">
              {mode === 'login' 
                ? 'Sign in to your agricultural investment account' 
                : 'Start your agricultural investment journey today'
              }
            </p>
          </div>

          {/* Auth Form */}
          <div className="bg-gray-800 rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* User Type Selection (Sign Up Only) */}
              {mode === 'signup' && (
                <div>
                  <label className="block text-sm font-medium mb-3">I am a:</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setFormData({...formData, userType: 'investor'})}
                      className={`p-4 rounded-lg border transition-colors ${
                        formData.userType === 'investor'
                          ? 'border-green-500 bg-green-600 bg-opacity-20 text-green-400'
                          : 'border-gray-600 bg-gray-700 hover:border-gray-500'
                      }`}
                    >
                      <div className="font-medium">Investor</div>
                      <div className="text-sm text-gray-400">Invest in farms</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({...formData, userType: 'farmer'})}
                      className={`p-4 rounded-lg border transition-colors ${
                        formData.userType === 'farmer'
                          ? 'border-green-500 bg-green-600 bg-opacity-20 text-green-400'
                          : 'border-gray-600 bg-gray-700 hover:border-gray-500'
                      }`}
                    >
                      <div className="font-medium">Farmer</div>
                      <div className="text-sm text-gray-400">List your farm</div>
                    </button>
                  </div>
                </div>
              )}

              {/* Full Name (Sign Up Only) */}
              {mode === 'signup' && (
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:border-green-500"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>
              )}

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:border-green-500"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Phone (Sign Up Only) */}
              {mode === 'signup' && (
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:border-green-500"
                      placeholder="+254 700 123 456"
                    />
                  </div>
                </div>
              )}

              {/* Password */}
              <div>
                <label className="block text-sm font-medium mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg pl-10 pr-12 py-3 focus:outline-none focus:border-green-500"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Confirm Password (Sign Up Only) */}
              {mode === 'signup' && (
                <div>
                  <label className="block text-sm font-medium mb-2">Confirm Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg pl-10 pr-12 py-3 focus:outline-none focus:border-green-500"
                      placeholder="Confirm your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                    >
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-green-600 hover:bg-green-700 py-3 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isLoading ? (
                  <>
                    <div className="spinner"></div>
                    <span>{mode === 'login' ? 'Signing In...' : 'Creating Account...'}</span>
                  </>
                ) : (
                  <span>{mode === 'login' ? 'Sign In' : 'Create Account'}</span>
                )}
              </button>

              {/* Mode Switch */}
              <div className="text-center">
                <span className="text-gray-400">
                  {mode === 'login' ? "Don't have an account? " : "Already have an account? "}
                </span>
                <button
                  type="button"
                  onClick={() => onModeChange(mode === 'login' ? 'signup' : 'login')}
                  className="text-green-400 hover:text-green-300 font-medium"
                >
                  {mode === 'login' ? 'Sign Up' : 'Sign In'}
                </button>
              </div>
            </form>

            {/* Additional Options */}
            {mode === 'login' && (
              <div className="mt-6 pt-6 border-t border-gray-700">
                <button className="w-full text-green-400 hover:text-green-300 text-sm">
                  Forgot your password?
                </button>
              </div>
            )}

            {/* Terms (Sign Up Only) */}
            {mode === 'signup' && (
              <div className="mt-6 pt-6 border-t border-gray-700 text-center text-sm text-gray-400">
                By creating an account, you agree to our{' '}
                <a href="#" className="text-green-400 hover:text-green-300">Terms of Service</a>
                {' '}and{' '}
                <a href="#" className="text-green-400 hover:text-green-300">Privacy Policy</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};