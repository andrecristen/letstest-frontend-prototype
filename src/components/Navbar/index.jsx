import React, { useState } from 'react';
import { FiMenu, FiBell, FiUser, FiGrid, FiGitPullRequest, FiPlay, FiSearch } from 'react-icons/fi';
import logo from '../../public/images/logo-transparente.png'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <nav
                className={`bg-gray-300 border-r overflow-y-auto transition-all duration-100 ease-in-out ${isMenuOpen ? 'w-64' : 'w-0 md:w-16 2xl:w-16'}`}
            >
                <div className="p-2 space-y-8">
                    <a title="Dashboard" href="#" className="block hover:bg-gray-400 rounded-lg flex items-center">
                        <FiGrid className="w-12 h-12" />
                        {isMenuOpen && <span className="ml-2">Dashboard</span>}
                    </a>
                    <a title="Gerenciar Projetos" href="#" className="block hover:bg-gray-400 rounded-lg flex items-center">
                        <FiGitPullRequest className="w-12 h-12" />
                        {isMenuOpen && <span className="ml-2">Gerenciar Projetos</span>}
                    </a>
                    <a title="Testar Projetos" href="#" className="block hover:bg-gray-400 rounded-lg flex items-center">
                        <FiPlay className=" w-12 h-12" />
                        {isMenuOpen && <span className="ml-2">Testar Projetos</span>}
                    </a>
                    <a title="Encontrar Projetos" href="#" className="block hover:bg-gray-400 rounded-lg flex items-center">
                        <FiSearch className="w-12 h-12" />
                        {isMenuOpen && <span className="ml-2">Encontrar Projetos</span>}
                    </a>
                    <a title="Perfil" href="#" className="block hover:bg-gray-400 rounded-lg flex items-center">
                        <FiUser className="w-12 h-12" />
                        {isMenuOpen && <span className="ml-2">Perfil</span>}
                    </a>
                </div>
            </nav>

            {/* Conteúdo principal */}
            <main className="flex-1 flex flex-col overflow-hidden">
                {/* Cabeçalho */}
                <header className="w-full bg-white h-20">
                    <div className="mr-6 h-full">
                        <div className="flex items-center justify-between h-full">
                            <button
                                className="text-gray-500 focus:outline-none w-15 h-full pl-5"
                                onClick={toggleMenu}
                            >
                                <FiMenu className='text-4xl'/>
                            </button>
                            {/* Logo e outros elementos do cabeçalho */}
                            <img src={logo} alt="Logo" className="h-8" />
                            <div className="space-x-4">
                                <button>
                                    <FiBell className="text-gray-500" />
                                </button>
                                <button>
                                    <FiUser className="text-gray-500" />
                                </button>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Conteúdo */}
                <div className="container mx-auto">
                    <div class="sm:hidden">
                        SM
                    </div>
                    <div class="md:hidden">
                        MD
                    </div>
                    <div class="lg:hidden">
                        LG
                    </div>
                    <div class="xl:hidden">
                        XL
                    </div>
                    <div class="2xl:hidden">
                        2XL
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Navbar;
