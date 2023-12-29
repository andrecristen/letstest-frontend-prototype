import React, { useRef, useState } from 'react';
import { FiActivity, FiEdit } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import FormDialog from '../Forms/Dialog';

const OwnerProjects = () => {

  const formDialogRef = useRef(null);

  const [selectedSituation, setSelectedSituation] = useState(1);
  const [isModalNew, setIsModalNew] = useState(false);
  const [formData, setFormData] = useState({});

  const situations = [
    { name: "Testando", id: 1 },
    { name: "Finalizado", id: 2 },
    { name: "Cancelado", id: 3 },
    { name: "Todos", id: null },
  ];

  const applications = [
    { name: "Web", id: 1 },
    { name: "Desktop", id: 2 },
    { name: "App", id: 3 },
    { name: "Híbrido", id: 4 },
  ];

  const projects = [
    {
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
    },
    {
      name: 'Meu Projeto 2',
      description: 'Realização de testes de aceitação do usuário para uma plataforma de comércio eletrônico, assegurando que as funcionalidades atendam às expectativas dos usuários finais e proporcionem uma experiência de compra satisfatória.',
      application: { name: "Web", id: 1 },
      percentage: 78,
      status: {
        id: 1,
        name: "Testando"
      },
      date: "12/12/2023",
      logo: "https://softdesign.com.br/wp-content/webpc-passthru.php?src=https://softdesign.com.br/wp-content/uploads/2020/02/Software-Testing-1024x576-1.png&nocache=1"
    },
    {
      name: 'Meu Projeto 3',
      description: 'Realização de testes abrangentes em um aplicativo móvel para garantir sua funcionalidade, desempenho e usabilidade em diferentes dispositivos e sistemas operacionais móveis.',
      application: { name: "App", id: 3 },
      percentage: 34,
      status: {
        id: 1,
        name: "Testando"
      },
      date: "12/12/2023",
      logo: "https://e7.pngegg.com/pngimages/865/632/png-clipart-mobile-application-testing-software-testing-test-automation-mobile-app-development-android-text-logo.png"
    },
    {
      name: 'Meu Projeto 4',
      description: 'Verificação da integração harmoniosa de diferentes módulos em um sistema ERP (Enterprise Resource Planning), garantindo que os dados sejam consistentes e fluam corretamente entre os departamentos da organização.',
      application: { name: "Desktop", id: 2 },
      percentage: 100,
      status: {
        id: 2,
        name: "Finalizado"
      },
      date: "12/12/2023",
      logo: "https://img.freepik.com/vetores-premium/teste-de-software-com-ilustracao-vetorial-de-desenho-animado-de-computador-desktop-isolada_181313-3191.jpg?w=2000"
    },
    {
      name: 'Meu Projeto 5',
      description: 'Validar a compatibilidade de uma aplicação web em diversos navegadores (Chrome, Firefox, Safari, etc.) e em diferentes versões, assegurando uma experiência consistente para os usuários independentemente do navegador utilizado.',
      application: { name: "Web", id: 1 },
      percentage: 10,
      status: {
        id: 3,
        name: "Cancelado"
      },
      date: "12/12/2023",
      logo: "https://w7.pngwing.com/pngs/11/865/png-transparent-software-testing-computer-icons-computer-software-web-browser-localisation-miscellaneous-text-sign.png"
    },
  ]

  const handleClickNewProject = () => {
    if (formDialogRef.current) {
      formDialogRef.current.openDialog();
    }
    setFormData([]);
    setIsModalNew(true);
  }

  const handleClickEditProject = (project) => {
    setFormData(project);
    if (formDialogRef.current) {
      formDialogRef.current.openDialog();
    }
    setIsModalNew(false);
  }

  const handleChangeFormData = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmitProject = async (e) => {
    console.log(formData);
    e.preventDefault();
    formDialogRef.current.closeDialog();
  };

  return (
    <>
      <div className="my-4 px-2 flex justify-end items-stretch flex-wrap pb-0 bg-transparent">
        <button
          type="button"
          className="py-2 px-12 border border-transparent text-sm font-medium rounded-md text-white bg-purple-500 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          onClick={handleClickNewProject}
        >
          Criar Novo
        </button>
      </div>
      <ul className="w-full flex border-b mt-1">
        {situations.map((situation) => (
          <li onClick={() => { setSelectedSituation(situation.id) }} className="w-full -mb-px">
            <a className={"w-full bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 " + (situation.id == selectedSituation ? "border-b-4 border-b-purple-400 text-purple-700 font-semibold" : "text-purple-600 hover:text-purple-600 hover:font-semibold")} href="#">{situation.name}</a>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap">
        <div className="w-full max-w-full px-3 mb-6 mx-auto">
          <div className="relative flex flex-col min-w-0 break-words bg-light/30">
            <div className="flex-auto block p-2">
              <div className="overflow-x-auto">
                <table className="table-auto w-full my-0 align-middle text-dark border">
                  <thead className="bg-gray-300 border-b m-3">
                    <tr className="text-secondary-dark">
                      <th className="pb-3 pt-3 text-center w-1/3 min-w-[200px]">Projeto</th>
                      <th className="pb-3 pt-3 text-center min-w-[80px]">Aplicação</th>
                      <th className="pb-3 pt-3 text-center min-w-[80px]">Testado</th>
                      <th className="pb-3 pt-3 text-center min-w-[80px]">Situação</th>
                      <th className="pb-3 pt-3 text-center min-w-[80px]">Criado em</th>
                      <th className="pb-3 pt-3 text-center min-w-[125px]">Ações</th>
                    </tr>
                  </thead>
                  <tbody className="m-2">
                    {projects.filter((currentProject) => (currentProject.status.id == selectedSituation || selectedSituation == null)).map((project) => (
                      <>
                        <tr className="border-b last:border-b-0 hover:bg-gray-200 cursor-pointer">
                          <td className="p-3">
                            <div className="flex items-center">
                              <div className="relative inline-block shrink-0 rounded-2xl me-3">
                                <img src={project.logo} className="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl" alt="" />
                              </div>
                              <div className="flex flex-col justify-start">
                                <a href="javascript:void(0)" className="mb-1 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary"> {project.name} </a>
                              </div>
                            </div>
                            <div className="flex items-center">
                              <span title={project.description} className='text-sm text-gray-500 line-clamp-2'>{project.description}</span>
                            </div>
                          </td>
                          <td className="pr-0 text-center">
                            <span className="font-semibold text-light-inverse text-md/normal">{project.application.name}</span>
                          </td>
                          <td className="pr-0 text-center">
                            <span className="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none text-success bg-success-light rounded-lg">
                              {project.percentage}%
                            </span>
                          </td>
                          <td className="pr-0 text-center">
                            <span className="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-primary bg-primary-light rounded-lg">
                              {project.status.name}
                            </span>
                          </td>
                          <td className="pr-0 text-center">
                            <span className="font-semibold text-light-inverse text-md/normal">
                              {project.date}
                            </span>
                          </td>
                          <td className="pr-3 text-center">
                            <button title="Casos de Testes" className="m-1 border border-transparent text-sm font-medium rounded-md text-white bg-purple-500 hover:bg-purple-700">
                              <span className="flex items-center justify-center p-2 leading-none shrink-0 ">
                                <FiActivity className="w-6 h-6" />
                              </span>
                            </button>
                            <button onClick={() => { handleClickEditProject(project) }} title="Editar" className="m-1 border border-transparent text-sm font-medium rounded-md text-white bg-purple-500 hover:bg-purple-700">
                              <span className="flex items-center justify-center p-2 leading-none shrink-0 ">
                                <FiEdit className="w-6 h-6" />
                              </span>
                            </button>
                          </td>
                        </tr>
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FormDialog
        ref={formDialogRef}
        submit={handleSubmitProject}
        title={(isModalNew ? "Novo" : "Alterar") + " Projeto"}>
        <div className="py-2">
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChangeFormData}
            className="rounded w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
            placeholder="Nome"
          />
        </div>
        <div className="py-2">
          <textarea
            id="description"
            name="description"
            type="text"
            rows="5"
            required
            value={formData.description}
            onChange={handleChangeFormData}
            className="rounded w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
            placeholder="Descrição"
          />
        </div>
        <div className="py-2">
          <select
            id="application"
            name="application"
            required
            value={formData.application ? formData.application.id : formData.application = {}}
            onChange={handleChangeFormData}
            className="rounded w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
            placeholder="Aplicação"
          >
            <option value="null">Selecione a aplicação do projeto</option>
            {applications.map((application) => {
              return (
                <option value={application.id}>{application.name}</option>
              );
            })}
          </select>
        </div>
        <div className="py-2">
          <input
            id="logo"
            name="logo"
            type="file"
            required
            onChange={handleChangeFormData}
            className="rounded w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
            placeholder="Logo"
          />
        </div>
      </FormDialog>
    </>
  );
};

export default OwnerProjects;
