
                                              

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignupPage from './SignupPage';
import LoginPage from './LoginPage';
import ProfilePage from './ProfilePage';
import { UserProvider } from './UserContext';
import "./App.css"
function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
