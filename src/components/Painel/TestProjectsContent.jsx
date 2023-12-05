import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TestProjects = () => {

  const navigate = useNavigate();

  const redirectToLogin = () => {
    navigate('/login');
  }

  const redirectToHome = () => {
    navigate('/');
  }


  return (
    <>
      <strong>Testar Projetos</strong>
    </>
  );
};

export default TestProjects;
