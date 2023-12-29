import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ManageProject = () => {

  const navigate = useNavigate();

  const redirectToLogin = () => {
    navigate('/login');
  }

  const redirectToHome = () => {
    navigate('/');
  }


  return (
    <>
      <strong>Gerenciar Projeto</strong>
    </>
  );
};

export default ManageProject;
