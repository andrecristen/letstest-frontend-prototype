import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';

const PainelPage = (props) => {


  const navigate = useNavigate();

  const redirectToLogin = () => {
    navigate('/login');
  }

  const redirectToHome = () => {
    navigate('/');
  }


  return (
    <>
      <React.StrictMode>
        <Navbar>
          {props.children}
        </Navbar>
      </React.StrictMode>
    </>
  );
};

export default PainelPage;
