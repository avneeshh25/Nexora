import { API_BASE_URL, API_ENDPOINTS } from './config';

// Helper function to handle API responses
const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Something went wrong');
  }
  return response.json();
};

// Test backend connection
export const testConnection = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.TEST}`);
    return handleResponse(response);
  } catch (error) {
    console.error('Backend connection error:', error);
    throw new Error('Unable to connect to the server. Please check if the backend is running.');
  }
};

// User related API calls
export const userApi = {
  // Sign up new user
  createUser: async (userData) => {
    try {
      const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.SIGNUP}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      return handleResponse(response);
    } catch (error) {
      console.error('Signup error:', error);
      throw error;
    }
  },

  // Login user
  login: async (credentials) => {
    try {
      const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.LOGIN}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
      return handleResponse(response);
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  },

  // Get all users
  getUsers: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.GET_USERS}`);
      return handleResponse(response);
    } catch (error) {
      console.error('Get users error:', error);
      throw error;
    }
  },

  // Get user by ID
  getUserById: async (userId) => {
    try {
      const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.GET_USER_BY_ID}/${userId}`);
      return handleResponse(response);
    } catch (error) {
      console.error('Get user by ID error:', error);
      throw error;
    }
  },

  // Update user
  updateUser: async (userId, userData) => {
    try {
      const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.UPDATE_USER}/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      return handleResponse(response);
    } catch (error) {
      console.error('Update user error:', error);
      throw error;
    }
  },

  // Delete user
  deleteUser: async (userId) => {
    try {
      const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.DELETE_USER}/${userId}`, {
        method: 'DELETE',
      });
      return handleResponse(response);
    } catch (error) {
      console.error('Delete user error:', error);
      throw error;
    }
  },
}; 