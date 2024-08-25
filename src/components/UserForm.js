import React, { useState, useEffect } from 'react';
import { Modal, Form, Button, Row, Col } from 'react-bootstrap';

function UserForm({ show, onHide, onSave, user }) {
  const [formData, setFormData] = useState({
    name: '', username: '', email: '', phone: '', website: '',
    address: { street: '', suite: '', city: '', zipcode: '', geo: { lat: '', lng: '' } },
    company: { name: '', catchPhrase: '', bs: '' }
  });

  useEffect(() => {
    if (user) {
      setFormData(user);
    } else {
      setFormData({
        name: '', username: '', email: '', phone: '', website: '',
        address: { street: '', suite: '', city: '', zipcode: '', geo: { lat: '', lng: '' } },
        company: { name: '', catchPhrase: '', bs: '' }
      });
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child, grandchild] = name.split('.');
      if (grandchild) {
        setFormData(prev => ({
          ...prev,
          [parent]: {
            ...prev[parent],
            [child]: {
              ...prev[parent][child],
              [grandchild]: value
            }
          }
        }));
      } else {
        setFormData(prev => ({
          ...prev,
          [parent]: { ...prev[parent], [child]: value }
        }));
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Header closeButton style={{ backgroundColor: '#181818', color: 'white' }}>
        <Modal.Title>{formData.id ? 'Edit User' : 'Add New User'}</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: '#181818', color: 'white' }}>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleInputChange} 
                  required 
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control 
                  type="text" 
                  name="username" 
                  value={formData.username} 
                  onChange={handleInputChange} 
                  required 
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleInputChange} 
                  required 
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Phone</Form.Label>
                <Form.Control 
                  type="text" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleInputChange} 
                  required 
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label>Website</Form.Label>
            <Form.Control 
              type="text" 
              name="website" 
              value={formData.website} 
              onChange={handleInputChange} 
              required 
            />
          </Form.Group>
          
          <h5>Address</h5>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Street</Form.Label>
                <Form.Control 
                  type="text" 
                  name="address.street" 
                  value={formData.address.street} 
                  onChange={handleInputChange} 
                  required 
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Suite</Form.Label>
                <Form.Control 
                  type="text" 
                  name="address.suite" 
                  value={formData.address.suite} 
                  onChange={handleInputChange} 
                  required 
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>City</Form.Label>
                <Form.Control 
                  type="text" 
                  name="address.city" 
                  value={formData.address.city} 
                  onChange={handleInputChange} 
                  required 
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Zipcode</Form.Label>
                <Form.Control 
                  type="text" 
                  name="address.zipcode" 
                  value={formData.address.zipcode} 
                  onChange={handleInputChange} 
                  required 
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Latitude</Form.Label>
                <Form.Control 
                  type="text" 
                  name="address.geo.lat" 
                  value={formData.address.geo.lat} 
                  onChange={handleInputChange} 
                  required 
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Longitude</Form.Label>
                <Form.Control 
                  type="text" 
                  name="address.geo.lng" 
                  value={formData.address.geo.lng} 
                  onChange={handleInputChange} 
                  required 
                />
              </Form.Group>
            </Col>
          </Row>
          
          <h5>Company</h5>
          <Form.Group className="mb-3">
            <Form.Label>Company Name</Form.Label>
            <Form.Control 
              type="text" 
              name="company.name" 
              value={formData.company.name} 
              onChange={handleInputChange} 
              required 
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Catch Phrase</Form.Label>
            <Form.Control 
              type="text" 
              name="company.catchPhrase" 
              value={formData.company.catchPhrase} 
              onChange={handleInputChange} 
              required 
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>BS</Form.Label>
            <Form.Control 
              type="text" 
              name="company.bs" 
              value={formData.company.bs} 
              onChange={handleInputChange} 
              required 
            />
          </Form.Group>
          <Button variant="danger" type="submit">
            Save
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default UserForm;