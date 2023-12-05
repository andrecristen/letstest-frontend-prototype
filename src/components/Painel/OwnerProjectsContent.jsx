import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OwnerProjects = () => {

  const navigate = useNavigate();

  const redirectToLogin = () => {
    navigate('/login');
  }

  const redirectToHome = () => {
    navigate('/');
  }


  return (
    <>
      <strong>Meus Projetos</strong>
    </>
  );
};

export default OwnerProjects;
