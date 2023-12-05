import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {

  const navigate = useNavigate();

  const redirectToLogin = () => {
    navigate('/login');
  }

  const redirectToHome = () => {
    navigate('/');
  }


  return (
    <>
      <strong>Perfil</strong>
    </>
  );
};

export default Profile;
