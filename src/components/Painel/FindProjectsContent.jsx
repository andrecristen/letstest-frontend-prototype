import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FindProjects = () => {

  const projects = [
    {
      id: 1,
      title: 'Nome do Projeto',
      href: '#',
      description: 'Breve descrição do projeto....',
      date: '01/12/2023',
      datetime: '2020-03-16',
      category: { title: 'Tipo do Projeto', href: '#' },
      author: {
        name: 'Nome Gerente do Projeto',
        role: '',
        href: '#',
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png',
      },
    },
    {
      id: 1,
      title: 'Nome do Projeto',
      href: '#',
      description: 'Breve descrição do projeto....',
      date: '01/12/2023',
      datetime: '2020-03-16',
      category: { title: 'Tipo do Projeto', href: '#' },
      author: {
        name: 'Nome Gerente do Projeto',
        role: '',
        href: '#',
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png',
      },
    },
    {
      id: 1,
      title: 'Nome do Projeto',
      href: '#',
      description: 'Breve descrição do projeto....',
      date: '01/12/2023',
      datetime: '2020-03-16',
      category: { title: 'Tipo do Projeto', href: '#' },
      author: {
        name: 'Nome Gerente do Projeto',
        role: '',
        href: '#',
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png',
      },
    },
    {
      id: 1,
      title: 'Nome do Projeto',
      href: '#',
      description: 'Breve descrição do projeto....',
      date: '01/12/2023',
      datetime: '2020-03-16',
      category: { title: 'Tipo do Projeto', href: '#' },
      author: {
        name: 'Nome Gerente do Projeto',
        role: '',
        href: '#',
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png',
      },
    },
    {
      id: 1,
      title: 'Nome do Projeto',
      href: '#',
      description: 'Breve descrição do projeto....',
      date: '01/12/2023',
      datetime: '2020-03-16',
      category: { title: 'Tipo do Projeto', href: '#' },
      author: {
        name: 'Nome Gerente do Projeto',
        role: '',
        href: '#',
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png',
      },
    },
    {
      id: 1,
      title: 'Nome do Projeto',
      href: '#',
      description: 'Breve descrição do projeto....',
      date: '01/12/2023',
      datetime: '2020-03-16',
      category: { title: 'Tipo do Projeto', href: '#' },
      author: {
        name: 'Nome Gerente do Projeto',
        role: '',
        href: '#',
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png',
      },
    },
    {
      id: 1,
      title: 'Nome do Projeto',
      href: '#',
      description: 'Breve descrição do projeto....',
      date: '01/12/2023',
      datetime: '2020-03-16',
      category: { title: 'Tipo do Projeto', href: '#' },
      author: {
        name: 'Nome Gerente do Projeto',
        role: '',
        href: '#',
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png',
      },
    },
    {
      id: 1,
      title: 'Nome do Projeto',
      href: '#',
      description: 'Breve descrição do projeto....',
      date: '01/12/2023',
      datetime: '2020-03-16',
      category: { title: 'Tipo do Projeto', href: '#' },
      author: {
        name: 'Nome Gerente do Projeto',
        role: '',
        href: '#',
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png',
      },
    },
    {
      id: 1,
      title: 'Nome do Projeto',
      href: '#',
      description: 'Breve descrição do projeto....',
      date: '01/12/2023',
      datetime: '2020-03-16',
      category: { title: 'Tipo do Projeto', href: '#' },
      author: {
        name: 'Nome Gerente do Projeto',
        role: '',
        href: '#',
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png',
      },
    },
    {
      id: 1,
      title: 'Nome do Projeto',
      href: '#',
      description: 'Breve descrição do projeto....',
      date: '01/12/2023',
      datetime: '2020-03-16',
      category: { title: 'Tipo do Projeto', href: '#' },
      author: {
        name: 'Nome Gerente do Projeto',
        role: '',
        href: '#',
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png',
      },
    },
    {
      id: 1,
      title: 'Nome do Projeto',
      href: '#',
      description: 'Breve descrição do projeto....',
      date: '01/12/2023',
      datetime: '2020-03-16',
      category: { title: 'Tipo do Projeto', href: '#' },
      author: {
        name: 'Nome Gerente do Projeto',
        role: '',
        href: '#',
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png',
      },
    },
    {
      id: 1,
      title: 'Nome do Projeto',
      href: '#',
      description: 'Breve descrição do projeto....',
      date: '01/12/2023',
      datetime: '2020-03-16',
      category: { title: 'Tipo do Projeto', href: '#' },
      author: {
        name: 'Nome Gerente do Projeto',
        role: '',
        href: '#',
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png',
      },
    },
  ]

  return (
    <div>
      <div className="mx-4 my-4">
        <label for="categorias" class="block mb-2 text-sm font-medium text-purple-900 dark:text-purple">Aplicação:</label>
        <select id="categorias" class="bg-purple-50 border border-purple-300 text-purple-600 text-sm rounded-lg block w-full p-2.5">
          <option value="null">Todos os tipos</option>
          <option value="null">Web</option>
          <option value="null">App</option>
          <option value="null">Desktop</option>
          <option value="null">Híbrido</option>
        </select>
      </div>
      <div className="px-6 lg:px-8">
        <div className="mx-auto mt-2 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.id} className="border rounded-lg p-2 border-purple-600 flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <a
                  href={project.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {project.category.title}
                </a>
                <time dateTime={project.datetime} className="text-gray-500">
                  {project.date}
                </time>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={project.href}>
                    <span className="absolute inset-0" />
                    {project.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{project.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img src={project.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href={project.author.href}>
                      <span className="absolute inset-0" />
                      {project.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{project.author.role}</p>
                </div>
              </div>
              <button
                type="button"
                className="mt-4 w-full relative py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-500 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                Solicitar Participação
              </button>
            </article>
          ))}
        </div>
      </div>
    </div>
  )

};

export default FindProjects;