import React from 'react';
import { Card, Button } from 'react-bootstrap';
import DataItem from './DataItem';

function UserCard({ user, onEdit, onDelete }) {
  return (
    <Card className="h-100" style={{ backgroundColor: '#181818', color: 'white' }}>
      <Card.Body>
        <Card.Title className="mb-3">{user.name}</Card.Title>
        <DataItem label="Username" value={user.username} />
        <DataItem label="Email" value={user.email} />
        <DataItem label="Phone" value={user.phone} />
        <DataItem label="Website" value={user.website} />
        <hr className="my-2" />
        <h6 className="mb-2">Address</h6>
        <DataItem label="Street" value={user.address.street} />
        <DataItem label="Suite" value={user.address.suite} />
        <DataItem label="City" value={user.address.city} />
        <DataItem label="Zipcode" value={user.address.zipcode} />
        <DataItem label="Geo" value={`${user.address.geo.lat}, ${user.address.geo.lng}`} />
        <hr className="my-2" />
        <h6 className="mb-2">Company</h6>
        <DataItem label="Name" value={user.company.name} />
        <DataItem label="Catch Phrase" value={user.company.catchPhrase} />
        <DataItem label="BS" value={user.company.bs} />
      </Card.Body>
      <Card.Footer>
        <Button variant="outline-light" onClick={() => onEdit(user)} className="me-2">
          Edit
        </Button>
        <Button variant="outline-danger" onClick={() => onDelete(user.id)}>
          Delete
        </Button>
      </Card.Footer>
    </Card>
  );
}

export default UserCard;