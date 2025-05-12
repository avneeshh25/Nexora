'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { userApi, testConnection } from '@/lib/api';
import { BackgroundBeams } from '@/components/ui/background-beams';
import * as Yup from 'yup';
import Orb from '@/components/Orb';
import { Vortex } from '@/components/ui/vortex';
import Button from '@/components/Buttoni';
import { motion } from 'framer-motion';

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
    .oneOf([Yup.ref('password')], 'Passwords must match'),
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
      // Build a partial form object so validateAt can see both fields
      const partial = { ...formData, [fieldName]: value };
      await signupSchema.validateAt(fieldName, partial);
      setValidationErrors(prev => ({ ...prev, [fieldName]: '' }));
      return true;
    } catch (err) {
      setValidationErrors(prev => ({ ...prev, [fieldName]: err.message }));
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
      // Validate entire form (throws if invalid)
      await signupSchema.validate(formData, { abortEarly: false });

      // Remove confirmPassword before sending
      const { confirmPassword, ...userData } = formData;
      await userApi.createUser(userData);
      router.push('/login');
    } catch (err) {
      // Collect all validation errors
      if (err.name === 'ValidationError') {
        const errors = {};
        err.inner.forEach(({ path, message }) => {
          errors[path] = message;
        });
        setValidationErrors(errors);
      } else {
        // …existing error handling…
        if (err.message.includes('Email already Registered')) {
          setError('This email is already registered. Please use a different email or login.');
        } else if (err.message.includes('Failed to fetch')) {
          setError('Unable to connect to the server. Please check your internet connection and try again.');
        } else {
          setError(err.message || 'Failed to create account. Please try again.');
        }
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative bg-black inset-0 p-20 overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={100}
        baseHue={120}
        className="absolute inset-0"
      />

      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          whileHover={{ scale: 1.03, boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}
          className="max-w-md w-full p-8 bg-gradient-to-br from-gray-800/60 to-gray-900/40 backdrop-blur-lg rounded-2xl border border-gray-700 shadow-xl opacity-70 hover:gradient-border"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-white">
            Create your account
          </h2>

          {!backendConnected && (
            <div className="bg-yellow-500/20 border border-yellow-500 text-yellow-500 px-4 py-3 rounded-lg mb-4">
              Backend server is not connected.
            </div>
          )}
          {error && (
            <div className="bg-red-500/20 border border-red-500 text-red-500 px-4 py-3 rounded-lg mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
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
              <label htmlFor="email" className="block text-sm text-white font-medium mb-2">
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
              <label htmlFor="password" className="block text-sm text-white font-medium mb-2">
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
              <label htmlFor="confirmPassword" className="block text-sm text-white font-medium mb-2">
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
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full text-lg font-medium transition"
            >
              {loading ? 'Creating account...' : 'Sign Up'}
            </button>

            <p className="text-center text-gray-400">
              Already have an account?{' '}
              <button
                onClick={() => router.push('/login')}
                className="text-indigo-400 hover:text-indigo-300 font-semibold"
              >
                Login here
              </button>
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
