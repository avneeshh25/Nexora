'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { userApi, testConnection } from '@/lib/api';
import { BackgroundBeams } from '@/components/ui/background-beams';
import * as Yup from 'yup';
import Orb from '@/components/Orb';
import { Vortex } from '@/components/ui/vortex';

// Validation Schema
const signupSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must not exceed 50 characters')
    .matches(/^[a-zA-Z\s]*$/, 'Name can only contain letters and spaces'),

  email: Yup.string()
    .required('Email is required')
    .email('Please enter a valid email address'),

  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
    ),

  confirmPassword: Yup.string()
    .required('Please confirm your password')
    .oneOf([Yup.ref('password')], 'Passwords must match')
});

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [backendConnected, setBackendConnected] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});

  useEffect(() => {
    // Test backend connection when component mounts
    const checkBackendConnection = async () => {
      try {
        await testConnection();
        setBackendConnected(true);
      } catch (err) {
        setError('Unable to connect to the server. Please check if the backend is running.');
        setBackendConnected(false);
      }
    };

    checkBackendConnection();
  }, []);

  const validateField = async (fieldName, value) => {
    try {
      await Yup.reach(signupSchema, fieldName).validate(value);
      setValidationErrors(prev => ({
        ...prev,
        [fieldName]: ''
      }));
      return true;
    } catch (err) {
      setValidationErrors(prev => ({
        ...prev,
        [fieldName]: err.message
      }));
      return false;
    }
  };

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Validate the field as user types
    if (name === 'confirmPassword') {
      // For confirm password, we need to validate against the current password
      await validateField(name, value);
    } else {
      await validateField(name, value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Validate all fields
      const isValid = await signupSchema.validate(formData, { abortEarly: false });

      if (!isValid) {
        setLoading(false);
        return;
      }

      // Remove confirmPassword before sending to backend
      const { confirmPassword, ...userData } = formData;

      // Call the API to create a new user
      const response = await userApi.createUser(userData);

      // If successful, redirect to login page
      router.push('/login');
    } catch (err) {
      console.error('Signup error:', err);
      if (err.name === 'ValidationError') {
        const errors = {};
        err.inner.forEach((error) => {
          errors[error.path] = error.message;
        });
        setValidationErrors(errors);
      } else if (err.message.includes('Email already Registered')) {
        setError('This email is already registered. Please use a different email or login.');
      } else if (err.message.includes('Failed to fetch')) {
        setError('Unable to connect to the server. Please check your internet connection and try again.');
      } else {
        setError(err.message || 'Failed to create account. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* <BackgroundBeams className="h"/> */}
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="w-full min-h-screen"
      >
        <div className="relative z-10 min-h-screen" >
          <header className="flex justify-between items-center p-8">
            <div className="text-3xl font-bold">
              Nexor<span className="text-indigo-500">a</span>
            </div>
            <button
              onClick={() => router.push('/login')}
              className="bg-indigo-600 text-white px-6 py-3 rounded-full text-lg hover:bg-indigo-700 transition-colors"
            >
              Login
            </button>
          </header>
          <div className="relative min-w-full min-h-screen ">
            {/* <Orb
    hoverIntensity={0.5}
    rotateOnHover={true}
    hue={0}
    forceHoverState={false}
  size={300}
  /> */}

            <div className="max-w-md mx-auto mt-20 p-8 bg-gray-900/50 backdrop-blur-sm rounded-xl">
              <h2 className="text-3xl font-bold text-center mb-8">
                Create your account
              </h2>

              {!backendConnected && (
                <div className="bg-yellow-500/20 border border-yellow-500 text-yellow-500 px-4 py-3 rounded-lg mb-4">
                  <span className="block sm:inline">Backend server is not connected. Please start the backend server.</span>
                </div>
              )}

              {error && (
                <div className="bg-red-500/20 border border-red-500 text-red-500 px-4 py-3 rounded-lg mb-4">
                  <span className="block sm:inline">{error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className={`w-full px-4 py-3 bg-gray-800 border ${validationErrors.name ? 'border-red-500' : 'border-gray-700'
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {validationErrors.name && (
                    <p className="mt-1 text-sm text-red-500">{validationErrors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className={`w-full px-4 py-3 bg-gray-800 border ${validationErrors.email ? 'border-red-500' : 'border-gray-700'
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {validationErrors.email && (
                    <p className="mt-1 text-sm text-red-500">{validationErrors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium mb-2">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className={`w-full px-4 py-3 bg-gray-800 border ${validationErrors.password ? 'border-red-500' : 'border-gray-700'
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                    placeholder="Create a password (min 8 characters)"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  {validationErrors.password && (
                    <p className="mt-1 text-sm text-red-500">{validationErrors.password}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">
                    Confirm Password <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    required
                    className={`w-full px-4 py-3 bg-gray-800 border ${validationErrors.confirmPassword ? 'border-red-500' : 'border-gray-700'
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                  {validationErrors.confirmPassword && (
                    <p className="mt-1 text-sm text-red-500">{validationErrors.confirmPassword}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading || !backendConnected}
                  className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Creating account...' : 'Sign Up'}
                </button>

                <p className="text-center text-gray-400">
                  Already have an account?{' '}
                  <button
                    onClick={() => router.push('/login')}
                    className="text-indigo-400 hover:text-indigo-300"
                  >
                    Login here
                  </button>
                </p>
              </form>
            </div>
          </div>

        </div>
      </Vortex>
    </div>
  );
} 