'use client';

import { useState, useEffect } from 'react';
import { userApi } from '../lib/api';

export default function UserComponent() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const data = await userApi.getUser();
      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateUser = async (userData) => {
    try {
      setLoading(true);
      await userApi.createUser(userData);
      await fetchUsers(); // Refresh the list
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <div className="space-y-4">
        {users.map((user) => (
          <div key={user._id} className="p-4 border rounded">
            <h2 className="text-xl">{user.name}</h2>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 