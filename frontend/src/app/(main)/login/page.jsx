'use client';
import { useRouter } from 'next/navigation';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Vortex } from '@/components/ui/vortex';
import { motion } from 'framer-motion';

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string().min(6, 'Min 6 chars').required('Required'),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/user/authenticate`,
          values
        );
        localStorage.setItem('token', res.data.token);
        toast.success('Welcome back!');
        router.push('/');
      } catch {
        toast.error('Login failed');
      }
      setLoading(false);
    },
  });

  return (
    <div className="relative min-h-screen bg-black p-25 text-white overflow-hidden">
      <Vortex
        backgroundColor="black"
        particleCount={100}
        baseHue={200}
        rangeY={600}
        className="absolute inset-0"
      />

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center pt-12"
      >
        <h1 className="text-4xl font-extrabold tracking-tight mb-8 drop-shadow-lg">
          Nexor<span className="text-indigo-400">a</span>
        </h1>

        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="w-full max-w-md p-8 opacity-80 bg-gray-900/70 backdrop-blur-lg rounded-3xl shadow-2xl"
        >
          <h2 className="text-2xl font-semibold text-center mb-6">
            Welcome Back
          </h2>

          <form onSubmit={formik.handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm mb-2">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className={`w-full px-4 py-3 bg-gray-800 border ${
                  formik.touched.email && formik.errors.email
                    ? 'border-red-500'
                    : 'border-gray-700'
                } rounded-lg focus:ring-2 focus:outline-none focus:ring-indigo-500 transition`}
                placeholder="you@example.com"
                {...formik.getFieldProps('email')}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {formik.errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm mb-2">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                className={`w-full px-4 py-3 bg-gray-800 border ${
                  formik.touched.password && formik.errors.password
                    ? 'border-red-500'
                    : 'border-gray-700'
                } rounded-lg focus:ring-2 focus:outline-none focus:ring-indigo-500 transition`}
                placeholder="••••••••"
                {...formik.getFieldProps('password')}
              />
              {formik.touched.password && formik.errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {formik.errors.password}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-indigo-500 hover:bg-indigo-600 rounded-full font-medium transition-colors shadow-lg"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <p className="text-center text-gray-400 text-sm mt-6">
            Don’t have an account?{' '}
            <button
              onClick={() => router.push('/signup')}
              className="text-indigo-300 hover:text-indigo-400 font-semibold"
            >
              Sign up
            </button>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}