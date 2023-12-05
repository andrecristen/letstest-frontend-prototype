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

  const projetosList = [
    {
      id: 1,
      nome: "Teste 1",
      tipo: "App",
      situação: "Aguardando Inicio"
    },
    {
      id: 1,
      nome: "Teste 2",
      tipo: "Web",
      situação: "Ativo"
    },
    {
      id: 1,
      nome: "Teste 3",
      tipo: "Desktop",
      situação: "Ativo"
    },
  ];


  return (
    <>
      <main>
        <div className="mx-4 my-4">
          <label for="categorias" class="block mb-2 text-sm font-medium text-purple-900 dark:text-purple">Aplicação:</label>
          <select id="categorias" class="bg-purple-50 border border-purple-300 text-purple-600 text-sm rounded-lg block w-full p-2.5">
            <option value="null">Todos os tipos</option>
            <option value="null">Web</option>
            <option value="null">App</option>
            <option value="null">Desktop</option>
          </select>
        </div>
        <div className="w-full">
          <ul role="list">
            {projetosList && projetosList.map((projeto) => (
              <li key={projeto.id} className="flex justify-center gap-x-6 py-5 cursor-pointer border-2 mb-2 mx-4 rounded-lg">
                <div className="flex gap-x-5 mx-4">
                  <img className="h-32 w-32 flex-none rounded-full bg-gray-50" src="https://opensource.com/sites/default/files/lead-images/bug_software_issue_tracking_computer_screen.jpg" alt="" />
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">{projeto.nome}</p>
                    <p className="text-sm leading-6 text-gray-900">Aplicação: {projeto.tipo}</p>
                    <p className="text-sm leading-6 text-gray-900">Situação: {projeto.situação}</p>
                    <button
                      type="button"
                      className="mt-4 group relative py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                    >
                      Solicitar Participação
                    </button>
                  </div>
                </div>
              </li>
            ))}
            {!projetosList || !projetosList.length ? "Sem projetos cadastrados" : ""}
          </ul>
        </div>
      </main>
    </>
  );
};

export default FindProjects;
