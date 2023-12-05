import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FindProjects = () => {

  const navigate = useNavigate();

  const redirectToLogin = () => {
    navigate('/login');
  }

  const redirectToHome = () => {
    navigate('/');
  }


  return (
    <>
      <strong>Encontrar Projetos</strong>
    </>
  );
};

export default FindProjects;
