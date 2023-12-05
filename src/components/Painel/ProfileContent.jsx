import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiMenu, FiBell, FiUser, FiGrid, FiGitPullRequest, FiPlay, FiSearch, FiSmartphone, FiPower } from 'react-icons/fi';

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
      <div className="flex flex-col bg-gray-100 shadow-xl overflow-y-scroll">

        <div className="bg-purple-300 shadow-lg pb-3 rounded-b-3xl">
          <div
            className="flex  rounded-b-3xl bg-gray-100 space-y-5 flex-col items-center py-7">
            <img className="h-28 w-28 rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAhk-uNWspnBZzswphhb_F5_MOGZBmWmTxcNbAIYn6OQ&s"
              alt="User" />
            <a href="#"> <span
              className="text-h1">André</span></a>
          </div>
          <div className="grid px-7 py-2 items-center justify-around grid-cols-3 gap-4 divide-x divide-solid">
            <div className="col-span-1 flex flex-col items-center ">
              <span className="text-2xl font-bold">4</span>
              <span className="text-lg font-medium 0">Dispostivos</span>
            </div>
            <div className="col-span-1 px-3 flex flex-col items-center ">
              <span className="text-2xl font-bold">
                3</span>
              <span className="text-lg font-medium">Projetos Gerenciados</span>
            </div>
            <div className="col-span-1 px-3 flex flex-col items-center ">
              <span className="text-2xl font-bold">
                40</span>
              <span className="text-lg font-medium">Projetos Testados</span>
            </div>
          </div>

        </div>

        <div
          className="grid rounded-2xl divide-y divide-dashed hover:divide-solid  justify-evenly bg-gray-50 dark:bg-gray-300 m-3 mt-10 grid-cols-1">
          <div className="col-span-1 p-3">
            <button class="w-full text-purple-500 bg-transparent border border-solid border-purple-500 hover:bg-purple-500 hover:text-white active:bg-purple-600 font-bold uppercase px-8 py-3 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
              <FiUser className="w-12 h-12" /> Alterar Dados
            </button>
          </div>
          <div className="col-span-1 p-3">
            <button class="w-full text-purple-500 bg-transparent border border-solid border-purple-500 hover:bg-purple-500 hover:text-white active:bg-purple-600 font-bold uppercase px-8 py-3 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
              <FiSmartphone className="w-12 h-12" /> Gerenciar Dispositivos
            </button>
          </div>
          <div className="col-span-1 p-3">
            <button class="w-full text-purple-500 bg-transparent border border-solid border-purple-500 hover:bg-purple-500 hover:text-white active:bg-purple-600 font-bold uppercase px-8 py-3 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
              <FiPower className="w-12 h-12" /> Gerenciar Competências
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
