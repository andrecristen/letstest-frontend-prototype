import React from 'react';
import { FiUsers, FiEdit, FiMonitor, FiCheckCircle, FiLayout, FiSettings, FiAlertTriangle } from 'react-icons/fi';

function HomePage() {
  return (
    <div className="bg-gray-100 font-sans">
      {/* Navbar */}
      <nav className="bg-white-600 p-4 text-purple">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-4xl font-bold text-yellow-400">Let's Test</h1>
          <div className="transition transform hover:scale-105">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-purple-700 hover:text-purple-800 py-3 px-6 rounded-full text-lg font-semibold">
              Acessar
            </button>
          </div>
        </div>

      </nav>

      {/* Hero Section */}
      <header className="bg-purple-700 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Simplifique o Gerenciamento de Testes de Software</h1>
          <p className="text-lg mb-8">Let's Test é a solução completa para equipes de desenvolvimento de software.</p>
          <div className="transition transform hover:scale-105">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-purple-700 hover:text-purple-800 py-3 px-6 rounded-full text-lg font-semibold">
              Comece agora mesmo
            </button>
          </div>
        </div>
      </header>

      {/* Feature Section - Gerenciamento de Projetos */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-purple-600 mb-10">Gerenciamento de Projetos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {generateFeature(
              <div>
                <div className="text-6xl  mb-6 text-purple-600 text-center">
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
                <div className="text-6xl  mb-6 text-purple-600 text-center">
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
                <div className="text-6xl  mb-6 text-purple-600 text-center">
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
                <div className="text-6xl  mb-6 text-purple-600 text-center">
                  <FiSettings />
                </div>
                <h3 className="text-3xl font-semibold mb-4">Controle de acessos</h3>
                <p className="text-gray-600 text-center">
                  Defina dois níveis de acesso: administrativo e de usuário para garantir segurança e eficiência.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Feature Section - Recursos de Testes */}
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-purple-600 mb-10">Recursos de Testes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
      </section>

      {/* Feature Section - Candidatar-se a Projetos */}
      <section className="bg-gray-100 py-16">
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
      </section>

      <section className="bg-gray-200 py-16">
        <div className="container mx-auto">
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
      </section>
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
    <div className="bg-white p-6 rounded-lg shadow">
      {content}
    </div>
  );
}

function generatePlatform(title, description, image) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl">
      <img src={image} alt={title} className="w-32 h-32 mx-auto mb-4" />
      <h3 className="text-2xl font-semibold mb-2 text-purple-600">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default HomePage;
