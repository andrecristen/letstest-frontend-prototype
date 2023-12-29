import React from 'react';
import { FiEdit, FiFileText, FiPieChart, FiSmartphone, FiTrello, FiUser, FiUserPlus } from 'react-icons/fi';
import { useNavigate, useParams } from 'react-router-dom';

const ManageProject = () => {

    let { id } = useParams();

    console.log(id);

    const navigate = useNavigate();

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

    const callListTesters = () => {
        navigate("/painel/manage-project/users/" + project.id + "/testers");
    }

    const callListManagers = () => {
        navigate("/painel/manage-project/users/" + project.id + "/managers");
    }

    const callListTestCases = () => {
        navigate("/painel/manage-project/test-cases/" + project.id);
    }

    const callListEnvironments = () => {
        navigate("/painel/manage-project/environments/" + project.id);
    }

    const callListKanban = () => {
        navigate("/painel/manage-project/kanban/" + project.id);
    }

    const callListDashboard = () => {
        navigate("/painel/manage-project/dashboard/" + project.id);
    }

    const onClickEdit = () => {

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
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
                    <div onClick={callListTestCases} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:shadow-gray-500 cursor-pointer border border-purple-500">
                        <FiFileText className="w-20 h-20 mx-auto mb-4" />
                        <h3 className="text-center text-2xl font-semibold mb-2 text-purple-600">Casos de Teste</h3>
                    </div>
                    <div onClick={callListKanban} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:shadow-gray-500 cursor-pointer border border-purple-500">
                        <FiTrello className="w-20 h-20 mx-auto mb-4" />
                        <h3 className="text-center text-2xl font-semibold mb-2 text-purple-600">Kanban</h3>
                    </div>
                    <div onClick={callListTesters} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:shadow-gray-500 cursor-pointer border border-purple-500">
                        <FiUser className="w-20 h-20 mx-auto mb-4" />
                        <h3 className="text-center text-2xl font-semibold mb-2 text-purple-600">Testadores</h3>
                    </div>
                    <div onClick={callListManagers} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:shadow-gray-500 cursor-pointer border border-purple-500">
                        <FiUserPlus className="w-20 h-20 mx-auto mb-4" />
                        <h3 className="text-center text-2xl font-semibold mb-2 text-purple-600">Gerentes</h3>
                    </div>
                    <div onClick={callListEnvironments} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:shadow-gray-500 cursor-pointer border border-purple-500">
                        <FiSmartphone className="w-20 h-20 mx-auto mb-4" />
                        <h3 className="text-center text-2xl font-semibold mb-2 text-purple-600">Ambientes</h3>
                    </div>
                    <div onClick={callListDashboard} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:shadow-gray-500 cursor-pointer border border-purple-500">
                        <FiPieChart className="w-20 h-20 mx-auto mb-4" />
                        <h3 className="text-center text-2xl font-semibold mb-2 text-purple-600">Dashboard</h3>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ManageProject;
