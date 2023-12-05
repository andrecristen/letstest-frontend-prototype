import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

  const navigate = useNavigate();

  const redirectToLogin = () => {
    navigate('/login');
  }

  const redirectToHome = () => {
    navigate('/');
  }


  return (
    <>
      <strong>Dashboard</strong>
    </>
  );
};

export default Dashboard;
