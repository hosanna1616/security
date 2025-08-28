'use client';

import { useState, useRef, useEffect } from 'react';

export default function FaydaAuth() {
  const [authStep, setAuthStep] = useState<'role' | 'fayda' | '2fa'>('role');
  const [selectedRole, setSelectedRole] = useState<string>('');
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (authStep === '2fa') {
      inputsRef.current[0]?.focus();
    }
  }, [authStep]);

  const handleRoleSelect = (role: string) => {
    setSelectedRole(role);
    setAuthStep('fayda');
  };

  const handleFaydaLogin = () => {
    setAuthStep('2fa');
  };

  const handleVerify = () => {
    // Handle verification logic
    console.log('Verification complete');
  };

  const handleInputChange = (index: number, value: string) => {
    if (value.length === 1 && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !e.currentTarget.value && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <div className="max-w-4xl w-full flex flex-col md:flex-row rounded-xl overflow-hidden shadow-[0_10px_25px_-5px_rgba(0,0,0,0.3)]">
      {/* Left Panel - Information */}
      <div className="bg-gradient-to-br from-primary to-secondary text-white p-8 md:w-2/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%233182ce\" fill-opacity=\"0.1\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        <div className="relative z-10">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold">SecureGov<span className="text-accent">ET</span></h1>
          </div>
          
          <h2 className="text-2xl font-bold mb-4">Fayda National ID Authentication</h2>
          <p className="text-blue-100 mb-6">Secure authentication for government administrators and managers using Ethiopia's National ID system.</p>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent mt-1 mr-3" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p>Multi-factor authentication with Fayda ID</p>
            </div>
            <div className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent mt-1 mr-3" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p>Role-based access control for Admins & Managers</p>
            </div>
            <div className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent mt-1 mr-3" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p>End-to-end encrypted sessions</p>
            </div>
            <div className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent mt-1 mr-3" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p>Real-time security monitoring</p>
            </div>
          </div>
          
          <div className="bg-blue-900 bg-opacity-50 rounded-lg p-4 border-l-4 border-accent">
            <p className="text-sm">This system is compliant with Ethiopian Digital Government Security Standards</p>
          </div>
        </div>
      </div>
      
      {/* Right Panel - Authentication */}
      <div className="bg-white p-8 md:w-3/5">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Admin & Manager Portal</h2>
          <p className="text-gray-600">Sign in with your Fayda National ID</p>
        </div>
        
        <div>
          {/* Role Selection Step */}
          {authStep === 'role' && (
            <div className="animate-fadeIn">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div 
                  className="border-2 border-gray-200 rounded-xl p-6 text-center cursor-pointer transition-all hover:border-accent hover:shadow-md"
                  onClick={() => handleRoleSelect('admin')}
                >
                  <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800">Administrator</h3>
                  <p className="text-sm text-gray-600 mt-2">System administrators with full access rights</p>
                </div>
                <div 
                  className="border-2 border-gray-200 rounded-xl p-6 text-center cursor-pointer transition-all hover:border-accent hover:shadow-md"
                  onClick={() => handleRoleSelect('manager')}
                >
                  <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800">Manager</h3>
                  <p className="text-sm text-gray-600 mt-2">Department managers with elevated privileges</p>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-gray-600 text-sm">Select your role to continue authentication</p>
              </div>
            </div>
          )}
          
          {/* Fayda Authentication Form */}
          {authStep === 'fayda' && (
            <div className="animate-fadeIn">
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="faydaId">Fayda ID Number</label>
                <div className="relative">
                  <input id="faydaId" type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition" placeholder="Enter your Fayda ID" />
                  <div className="absolute right-3 top-3.5 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="password">Password</label>
                <div className="relative">
                  <input id="password" type="password" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition" placeholder="Enter your password" />
                  <div className="absolute right-3 top-3.5 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="mb-6 flex items-center">
                <input id="rememberMe" type="checkbox" className="h-4 w-4 text-accent focus:ring-accent border-gray-300 rounded" />
                <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700">Remember this device</label>
              </div>
              
              <button 
                onClick={handleFaydaLogin}
                className="w-full bg-primary text-white py-3 px-4 rounded-lg font-medium hover:bg-secondary transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent shadow-lg hover:shadow-accent/30"
              >
                Authenticate with Fayda
              </button>
              
              <div className="mt-6 text-center">
                <a href="#" className="text-sm text-accent hover:underline">Having trouble signing in?</a>
              </div>
            </div>
          )}
          
          {/* Two-Factor Authentication */}
          {authStep === '2fa' && (
            <div className="animate-fadeIn">
              <div className="text-center mb-6">
                <div className="w-20 h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Two-Factor Authentication</h3>
                <p className="text-gray-600">Enter the verification code sent to your registered device</p>
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-medium mb-2 text-center">Verification Code</label>
                <div className="flex justify-center space-x-4">
                  {[...Array(6)].map((_, index) => (
                    <input
                      key={index}
                      type="text"
                      maxLength={1}
                      ref={(el) => (inputsRef.current[index] = el)}
                      onChange={(e) => handleInputChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      className="w-14 h-14 text-center text-xl font-semibold border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition"
                    />
                  ))}
                </div>
              </div>
              
              <div className="text-center text-sm text-gray-600 mb-6">
                <p>Haven't received the code? <a href="#" className="text-accent hover:underline">Resend</a></p>
              </div>
              
              <button 
                onClick={handleVerify}
                className="w-full bg-primary text-white py-3 px-4 rounded-lg font-medium hover:bg-secondary transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent shadow-lg hover:shadow-accent/30"
              >
                Verify & Sign In
              </button>
            </div>
          )}
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-gray-600">Your authentication is secured with Fayda's National ID system and end-to-end encryption</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}