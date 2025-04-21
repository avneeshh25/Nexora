'use client';

import { useRouter } from 'next/navigation';
import { userApi } from '@/lib/api';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useEffect } from 'react';
import { BackgroundGradient } from '@/components/ui/background-gradient';
import { Vortex } from '@/components/ui/vortex';

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    }),
    onSubmit: async (values) => {
      setError('');
      setLoading(true);

      axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/authenticate`, values)
        .then((result) => {
          console.log(result.data);
          toast.success('Login successful!');
          localStorage.setItem('token', result.data.token);

          router.push('/');
        }).catch((err) => {
          console.log(err);
          toast.error('Login failed!');
        });
    },
  });

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* <BackgroundBeams className=""/> */}
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="w-full h-full"
      >
      <div className="relative z-10">
        <header className="flex justify-between items-center p-8">
          <div className="text-3xl font-bold">
            Nexor<span className="text-indigo-500">a</span>
          </div>
          <button
            onClick={() => router.push('/signup')}
            className="bg-indigo-600 text-white px-6 py-3 rounded-full text-lg hover:bg-indigo-700 transition-colors"
          >
            Sign Up
          </button>
        </header>
       
        <div className="max-w-md mx-auto mt-20 p-8 bg-gray-900/50 backdrop-blur-sm rounded-xl">
        <BackgroundGradient className="mx-auto p-10" containerClassName="z-10">
          <h2 className="text-3xl font-bold text-center mb-8">
            Welcome Back
          </h2>

          {error && (
            <div className="bg-red-500/20 border border-red-500 text-red-500 px-4 py-3 rounded-lg mb-4">
              {error}
            </div>
          )}

          <form onSubmit={formik.handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className={`w-full px-4 py-3 bg-gray-800 border ${formik.touched.email && formik.errors.email
                    ? 'border-red-500'
                    : 'border-gray-700'
                  } rounded-lg focus:outline-none focus:ring-2 ${formik.touched.email && formik.errors.email
                    ? 'focus:ring-red-500'
                    : 'focus:ring-indigo-500'
                  }`}
                placeholder="Enter your email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                className={`w-full px-4 py-3 bg-gray-800 border ${formik.touched.password && formik.errors.password
                    ? 'border-red-500'
                    : 'border-gray-700'
                  } rounded-lg focus:outline-none focus:ring-2 ${formik.touched.password && formik.errors.password
                    ? 'focus:ring-red-500'
                    : 'focus:ring-indigo-500'
                  }`}
                placeholder="Enter your password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.password}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Login
            </button>

            <p className="text-center text-gray-800">
              Don't have an account?{' '}
              <button
                onClick={() => router.push('/signup')}
                className="text-indigo-800 hover:text-indigo-500"
              >
                Sign up here
              </button>
            </p>
          </form>
          </BackgroundGradient>
        </div>

       
      </div>
      </Vortex>
    </div>
  );
}