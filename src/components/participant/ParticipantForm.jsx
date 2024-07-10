import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createNasabah, updateNasabah } from '../../redux/features/nasabah/nasabahSlice';

export default function NasabahForm({ nasabah, onSave }) {
  const initialFormData = {
    fullName: '',
    email: '',
    phoneNumber: '',
    address: '',
    username: '',
    password: ''
  };

  const [formData, setFormData] = useState(initialFormData);

  const dispatch = useDispatch();

  useEffect(() => {
    if (nasabah) {
      setFormData({
        fullName: nasabah.fullName,
        email: nasabah.email,
        phoneNumber: nasabah.phoneNumber,
        address: nasabah.address,
        username: nasabah.username,
        password: ''  // Password is not fetched for security reasons
      });
    } else {
      setFormData(initialFormData); // Reset to initial form data when there is no nasabah to edit
    }
  }, [nasabah]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const action = nasabah ? updateNasabah({ ...formData, id: nasabah.id }) : createNasabah(formData);
    dispatch(action).then(() => {
      setFormData(initialFormData); // Clear form after successful submission
      if (onSave) onSave(); // Call onSave if provided
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Nama Lengkap:</label>
        <input
          type="text"
          className="form-control"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          pattern="^[A-Za-z]+$"
          required
        />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Nomor Telepon:</label>
        <input
          type="tel"
          className="form-control"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          pattern="^[0-9]+$"
          required
        />
      </div>
      <div className="form-group">
        <label>Alamat:</label>
        <input
          type="text"
          className="form-control"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Username:</label>
        <input
          type="text"
          className="form-control"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input
          type="password"
          className="form-control"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Save</button>
    </form>
  );
}
