import React, { useState } from 'react';
import { useUser } from './UserContext';
import { useNavigate } from 'react-router-dom';

function SignupPage() {
  const { login, message, setMessage } = useUser();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSignup = (e) => {
    e.preventDefault();
  
    if (!formData.email || !formData.password) {
      setMessage('Please fill in all fields.');
    } else {
      login(formData);
      setMessage('Signup successful!');
      navigate('/profile');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="container">
    <div className="form">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <p className="message">{message}</p>
      <a href='/login'>Login insted</a>
    </div>
  </div>
  
  );
}

export default SignupPage;
