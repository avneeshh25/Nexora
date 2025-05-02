'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import './globals.css'; // Ensure this imports your Tailwind CSS

const App = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', project: '', dataUsage: 0, apiKeyUsage: 0 });
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('/api/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error.message);
    }
  };

  const addUser = async () => {
    try {
      await axios.post('/api/users', newUser);
      setNewUser({ name: '', project: '', dataUsage: 0, apiKeyUsage: 0 });
      fetchUsers();
    } catch (error) {
      console.error('Error adding user:', error.message);
    }
  };

  const editUser = (user) => {
    setEditingUser(user);
    setNewUser(user);
  };

  const updateUser = async () => {
    try {
      await axios.put(`/api/users/${editingUser.id}`, newUser);
      setEditingUser(null);
      setNewUser({ name: '', project: '', dataUsage: 0, apiKeyUsage: 0 });
      fetchUsers();
    } catch (error) {
      console.error('Error updating user:', error.message);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`/api/users/${id}`);
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error.message);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-5">
      <h1 className="text-3xl font-bold text-center">Admin Dashboard</h1>
      <h2 className="text-2xl mt-5">User Management</h2>
      <div className="flex flex-col gap-4 mt-4">
        <input
          className="border p-2 rounded"
          type="text"
          placeholder="Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          className="border p-2 rounded"
          type="text"
          placeholder="Project"
          value={newUser.project}
          onChange={(e) => setNewUser({ ...newUser, project: e.target.value })}
        />
        <input
          className="border p-2 rounded"
          type="number"
          placeholder="Data Usage"
          value={newUser.dataUsage}
          onChange={(e) => setNewUser({ ...newUser, dataUsage: parseInt(e.target.value, 10) || 0 })}
        />
        <input
          className="border p-2 rounded"
          type="number"
          placeholder="API Key Usage"
          value={newUser.apiKeyUsage}
          onChange={(e) => setNewUser({ ...newUser, apiKeyUsage: parseInt(e.target.value, 10) || 0 })}
        />
        <button
          className="bg-blue-500 text-white p-2 rounded"
          onClick={editingUser ? updateUser : addUser}
        >
          {editingUser ? 'Update User' : 'Add User'}
        </button>
      </div>

      {/* User List */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold">User List</h3>
        <ul className="mt-4">
          {users.map((user) => (
            <li
              key={user.id}
              className="flex justify-between items-center border-b py-2"
            >
              <div>
                <p className="font-medium">{user.name}</p>
                <p className="text-sm text-gray-600">{user.project}</p>
              </div>
              <div className="flex gap-2">
                <button
                  className="bg-yellow-500 text-white px-3 py-1 rounded"
                  onClick={() => editUser(user)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
