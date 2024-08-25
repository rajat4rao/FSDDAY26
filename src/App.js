import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Button } from 'react-bootstrap';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import 'bootstrap/dist/css/bootstrap.min.css';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

function App() {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(API_URL);
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleShowModal = (user = null) => {
    setCurrentUser(user);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentUser(null);
  };

  const handleSaveUser = async (userData) => {
    try {
      if (userData.id) {
        // Editing existing user
        //await axios.put(`${API_URL}/${userData.id}`, userData); /* doesn't work for new users, so commented */
        setUsers(users.map(user => user.id === userData.id ? userData : user));
      } else {
        // Adding new user
        const response = await axios.post(API_URL, userData);
        const maxId = Math.max(...users.map(user => user.id), 0);
        const newUser = { ...response.data, id: maxId + 1 }; 
        setUsers([...users, newUser]);
      }
      handleCloseModal();
    } catch (error) {
      console.error('Error saving user:', error);
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <Container fluid className="p-4" style={{ backgroundColor: '#141414', minHeight: '100vh' }}>
      <h1 className="mb-4 text-white">User Management</h1>
      <Button variant="danger" onClick={() => handleShowModal()} className="mb-4">
        Add New User
      </Button>
      <UserList 
        users={users} 
        onEdit={handleShowModal} 
        onDelete={handleDeleteUser} 
      />
      <UserForm
        show={showModal}
        onHide={handleCloseModal}
        onSave={handleSaveUser}
        user={currentUser}
      />
    </Container>
  );
}

export default App;