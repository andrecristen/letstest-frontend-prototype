import React from 'react';
import logo from '../../public/images/logo-transparente.png'
import homemTestando from '../../public/images/homemTestando.png'
import homemExibindo from '../../public/images/homemExibindo.png'
import mapaMundi from '../../public/images/mapaMundi.png'
import { FiUsers, FiEdit, FiMonitor, FiCheckCircle, FiLayout, FiSettings, FiAlertTriangle } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

function HomePage() {


  const navigate = useNavigate();

  const redirectToLogin = () => {
    navigate('/login');
  }

  const redirectToRegister = () => {
    navigate('/register');
  }

  return (
    <div className="font-sans">
      <nav className="px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
        <div className="col-start-1 col-end-3 flex items-center">
          <img className="w-48 h-auto sm:w-64 sm:h-auto" alt="Logo" src={logo} />
        </div>
        <ul className="hidden lg:flex col-start-4 col-end-10 items-center">
          <a href="#sobre" className="px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative text-purple-500 animation-active">Sobre</a>
          <a href="#gerenciamento" className="px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative text-black-500 hover:text-purple-500">Gerenciamento</a>
          <a href="#funcionalidades" className="px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative text-black-500 hover:text-purple-500">Recursos</a>
          <a href="#testes" className="px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative text-black-500 hover:text-purple-500">Os Testes</a>
        </ul>
        <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
          <button onClick={redirectToRegister} className="text-black-600 mx-2 sm:mx-4 capitalize tracking-wide hover:text-purple-500 transition-all">&nbsp; Registrar</button>
          <button onClick={redirectToLogin} className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-purple-500 text-purple-500 bg-transparent outline-none rounded-l-full rounded-r-full capitalize hover:bg-purple-500 hover:text-white transition-all hover:shadow-purple">
            Acessar
          </button>
        </div>
      </nav>

      <div className="max-w-screen-xl mt-4 px-8 xl:px-16 mx-auto" id="sobre">
        <div>
          <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16">
            <div className=" flex flex-col justify-center row-start-2 sm:row-start-1">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">Simplifique o Gerenciamento de <strong>Testes de Software</strong>.</h1>
              <p className="text-black-500 mt-4 mb-6"><strong>Let's Test</strong> é a solução completa para equipes de testes de software.</p>
              <button onClick={redirectToRegister} className="font-medium tracking-wide py-5 px-5 sm:px-8 border border-purple-500 text-purple-500 bg-transparent outline-none rounded-l-full rounded-r-full capitalize hover:bg-purple-500 hover:text-white transition-all hover:shadow-purple">
                Comece agora mesmo
              </button>
            </div>
            <div className="flex w-full">
              <div className="h-full w-full" >
                <img alt="Homem testando" src={homemTestando} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-10 mt-24 px-8 xl:px-16 mx-auto bg-gray-200" id="gerenciamento">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-purple-600 mb-10">Gerenciamento de Projetos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {generateFeature(
              <div>
                <div className="text-6xl mb-6 text-purple-600 text-center">
                  <FiUsers />
                </div>
                <h3 className="text-3xl font-semibold mb-4">Organize suas equipes</h3>
                <p className="text-gray-600 text-center">
                  Defina equipes, metas e mantenha o controle de cada etapa do processo de teste.
                </p>
              </div>
            )}
            {generateFeature(
              <div>
                <div className="text-6xl mb-6 text-purple-600 text-center">
                  <FiEdit />
                </div>
                <h3 className="text-3xl font-semibold mb-4">Defina modelos de casos de teste</h3>
                <p className="text-gray-600 text-center">
                  Personalize modelos para definir casos de teste de acordo com as necessidades específicas de seus projetos.
                </p>
              </div>
            )}
            {generateFeature(
              <div>
                <div className="text-6xl mb-6 text-purple-600 text-center">
                  <FiMonitor />
                </div>
                <h3 className="text-3xl font-semibold mb-4">Acompanhe o progresso</h3>
                <p className="text-gray-600 text-center">
                  Fique informado sobre o status de seus projetos com ferramentas de acompanhamento em tempo real.
                </p>
              </div>
            )}
            {generateFeature(
              <div>
                <div className="text-6xl mb-6 text-purple-600 text-center">
                  <FiSettings />
                </div>
                <h3 className="text-3xl font-semibold mb-4">Controle de acessos</h3>
                <p className="text-gray-600 text-center">
                  Defina níveis de acesso: crie projeto públicos onde qualquer testador poderá se candidatar a testes e privados onde apenas testadores convidados poderão visualizar os testes.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="funcionalidades">
        <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
          <div className="flex w-full justify-end">
            <div className="h-full w-full" >
              <img alt="Homem exibindo" src={homemExibindo} />
            </div>
          </div>
          <div>
            <div className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12">
              <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">Fornecemos muitos recursos que você pode usar</h3>
              <p className="my-2 text-black-500">Você pode explorar os recursos que oferecemos com diversão e ter suas próprias funções em cada recurso.</p>
            </div>
          </div>
        </div>
        <div className="container mx-auto text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {generateFeature(
              <div>
                <div className="text-6xl  mb-6 text-purple-600 text-center">
                  <FiUsers />
                </div>
                <h3 className="text-3xl font-semibold mb-4">Gerencie habilidades e titulações</h3>
                <p className="text-gray-600 text-center">
                  Mantenha o controle das habilidades e titulações de sua equipe para atribuir testadores aos projetos de maneira eficiente.
                </p>
              </div>
            )}
            {generateFeature(
              <div>
                <div className="text-6xl  mb-6 text-purple-600 text-center">
                  <FiMonitor />
                </div>
                <h3 className="text-3xl font-semibold mb-4">Controle de dispositivos de teste</h3>
                <p className="text-gray-600 text-center">
                  Gerencie dispositivos de teste, garantindo que sua equipe tenha acesso aos recursos necessários para execução de testes.
                </p>
              </div>
            )}
            {generateFeature(
              <div>
                <div className="text-6xl  mb-6 text-purple-600 text-center">
                  <FiLayout />
                </div>
                <h3 className="text-3xl font-semibold mb-4">Ambientes de testes configuráveis</h3>
                <p className="text-gray-600 text-center">
                  Configure ambientes de testes personalizados para atender às necessidades específicas de seus projetos de software.
                </p>
              </div>
            )}
            {generateFeature(
              <div>
                <div className="text-6xl  mb-6 text-purple-600 text-center">
                  <FiCheckCircle />
                </div>
                <h3 className="text-3xl font-semibold mb-4">Acompanhamento em tempo real</h3>
                <p className="text-gray-600 text-center">
                  Acompanhe em tempo real o progresso das execuções de testes e avalie os resultados de forma eficaz.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>


      <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="sobre">
        <div>
          <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16">
            <div className=" flex flex-col justify-center row-start-2 sm:row-start-1">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">Gerencie equipes distribuídas.</h1>
              <p className="text-black-500 mt-4 mb-6">Independente da localização dos testadores e projetos, gerencie tudo junto.</p>
            </div>
            <div className="flex w-full">
              <div className="h-full w-full" >
                <img alt="Mapa Mundi" src={mapaMundi} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-10 mt-24 px-8 xl:px-16 mx-auto bg-gray-200" id="testes">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-purple-600 mb-10">Candidatar-se a Projetos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {generateFeature(
              <div>
                <div className="text-6xl  mb-6 text-purple-600 text-center">
                  <FiLayout />
                </div>
                <h3 className="text-3xl font-semibold mb-4">Explore oportunidades de teste</h3>
                <p className="text-gray-600 text-center">
                  Veja projetos de teste disponíveis e escolha aqueles que correspondem às suas habilidades e interesses.
                </p>
              </div>
            )}
            {generateFeature(
              <div>
                <div className="text-6xl  mb-6 text-purple-600 text-center">
                  <FiEdit />
                </div>
                <h3 className="text-3xl font-semibold mb-4">Candidate-se de maneira eficaz</h3>
                <p className="text-gray-600 text-center">
                  Use filtros de habilidades e dispositivos para encontrar projetos adequados e envie candidaturas de forma simples.
                </p>
              </div>
            )}
            {generateFeature(
              <div>
                <div className="text-6xl  mb-6 text-purple-600 text-center">
                  <FiAlertTriangle />
                </div>
                <h3 className="text-3xl font-semibold mb-4">Seja notificado sobre aceitação</h3>
                <p className="text-gray-600 text-center">
                  Fique informado sobre o status de suas candidaturas e receba notificações quando for aceito em um projeto.
                </p>
              </div>
            )}
            {generateFeature(
              <div>
                <div className="text-6xl  mb-6 text-purple-600 text-center">
                  <FiUsers />
                </div>
                <h3 className="text-3xl font-semibold mb-4">Aumente suas oportunidades</h3>
                <p className="text-gray-600 text-center">
                  Amplie suas oportunidades de teste, candidatando-se a vários projetos e construindo sua reputação como testador.
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="container mx-auto mt-10">
          <h2 className="text-4xl text-center font-bold mb-8 text-purple-600">
            As Plataformas Testadas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {generatePlatform(
              "iOS",
              "Testes detalhados em dispositivos iOS para garantir uma experiência perfeita em iPhones e iPads.",
              "https://img.icons8.com/?size=256&id=20822&format=png"
            )}
            {generatePlatform(
              "Android",
              "Teste em várias versões do sistema operacional Android e em dispositivos populares.",
              "https://img.icons8.com/?size=256&id=2586&format=png"
            )}
            {generatePlatform(
              "Web",
              "Certifique-se de que seu site ou aplicação web funcione corretamente em diferentes navegadores e dispositivos.",
              "https://img.icons8.com/?size=256&id=1349&format=png"
            )}
            {generatePlatform(
              "Desktop",
              "Teste em sistemas operacionais de desktop, como Windows, macOS e Linux.",
              "https://img.icons8.com/?size=256&id=20308&format=png"
            )}
          </div>
        </div>
      </div>

      <div class="bg-white p-6 rounded-lg shadow transform transition-transform">
        <div class="text-center">
          <p class="text-6xl font-semibold text-purple-600 mb-4">Tá esperando o que?</p>
          <button onClick={redirectToRegister} class="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-full">
            Comece agora mesmo
          </button>
        </div>
      </div>


      {/* Footer */}
      <footer className="bg-purple-600 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Let's Test. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

function generateFeature(content) {
  return (
    <div className="bg-white p-6 rounded-lg shadow hover:scale-105 cursor-default">
      {content}
    </div>
  );
}

function generatePlatform(title, description, image) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 cursor-default">
      <img src={image} alt={title} className="w-32 h-32 mx-auto mb-4" />
      <h3 className="text-2xl font-semibold mb-2 text-purple-600">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default HomePage;
