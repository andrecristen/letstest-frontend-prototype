import React from 'react';
import { FiEdit, FiFileText, FiTrello, FiUser, FiUserMinus, FiUserPlus } from 'react-icons/fi';

const ManageProject = () => {

    const project = {
        id: 1,
        name: 'Meu Projeto 1',
        description: 'Avaliação da segurança de um sistema web por meio de testes de penetração, identificação e correção de vulnerabilidades para garantir a proteção dos dados e a integridade do sistema.',
        application: { name: "Web", id: 1 },
        percentage: 95,
        status: {
            id: 1,
            name: "Testando"
        },
        date: "12/12/2023",
        logo: "https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/img-49-new.jpg"
    };

    const onClickEdit = (project) => {

    }

    const handleAction = (project) => {

    }


    return (
        <>
            <div className="border rounded-lg overflow-hidden shadow-lg bg-white">
                <img src={project.logo} className="w-full h-40 object-cover object-center" alt={project.name} />
                <div className="p-4">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">{project.name} <span className="bg-blue-500 text-white rounded-lg p-2 text-xs">{project.status.name}</span></h2>
                    <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                    <div className="flex justify-between mb-4">
                        <div className="text-sm">
                            <p className="text-gray-900">Aplicação:</p>
                            <p className="font-semibold text-purple-700">{project.application.name}</p>
                            <p className="text-success">Data Criação:</p>
                            <p className="font-semibold text-purple-700">{project.date}</p>
                            <p className="text-success">Testado:</p>
                            <p className="font-semibold text-purple-700">{project.percentage}%</p>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <button
                            onClick={() => onClickEdit(project)}
                            className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-500 hover:bg-purple-700"
                        >
                            <span className="flex items-center justify-center mr-2">
                                <FiEdit className="w-4 h-4" />
                            </span>
                            Editar
                        </button>
                    </div>
                </div>
            </div>
            <div className="container mx-auto my-10">
                <h2 className="text-4xl text-center font-bold mb-8 text-purple-600">
                    Operações
                </h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:shadow-gray-500 cursor-default">
                        <FiUser className="w-20 h-20 mx-auto mb-4" />
                        <h3 className="text-center text-2xl font-semibold mb-2 text-purple-600">Testadores</h3>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:shadow-gray-500 cursor-default">
                        <FiUserPlus className="w-20 h-20 mx-auto mb-4" />
                        <h3 className="text-center text-2xl font-semibold mb-2 text-purple-600">Gerentes</h3>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:shadow-gray-500 cursor-default">
                        <FiFileText className="w-20 h-20 mx-auto mb-4" />
                        <h3 className="text-center text-2xl font-semibold mb-2 text-purple-600">Casos de Teste</h3>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:shadow-gray-500 cursor-default">
                        <FiTrello className="w-20 h-20 mx-auto mb-4" />
                        <h3 className="text-center text-2xl font-semibold mb-2 text-purple-600">Kanban</h3>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ManageProject;
