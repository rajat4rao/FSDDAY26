import React from 'react';
import { Row, Col } from 'react-bootstrap';
import UserCard from './UserCard';

function UserList({ users, onEdit, onDelete }) {
  return (
    <Row>
      {users.map(user => (
        <Col key={user.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
          <UserCard user={user} onEdit={onEdit} onDelete={onDelete} />
        </Col>
      ))}
    </Row>
  );
}

export default UserList;