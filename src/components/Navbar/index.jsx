import React, { useState } from 'react';
import { FiMenu, FiBell, FiUser, FiGrid, FiBox, FiList, FiUsers, FiSettings } from 'react-icons/fi';
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
                className={`w-16 bg-gray-300 border-r overflow-y-auto transition-all duration-300 ease-in-out ${isMenuOpen ? 'w-64 lg:w-64' : 'w-0 lg:w-24'}`}
                onMouseEnter={() => setIsMenuOpen(true)}
                onMouseLeave={() => setIsMenuOpen(false)}
            >
                <div className="p-4 space-y-4">
                    {/* Ícones dos itens do menu */}
                    <a href="#" className="block hover:bg-gray-400 rounded-lg flex items-center">
                        <FiGrid className="ml-2 w-12 h-12" />
                        {isMenuOpen && <span className="ml-2">Dashboard</span>}
                    </a>
                    <a href="#" className="block hover:bg-gray-400 rounded-lg flex items-center">
                        <FiBox className="ml-2 w-12 h-12" />
                        {isMenuOpen && <span className="ml-2">Produtos</span>}
                    </a>
                    <a href="#" className="block hover:bg-gray-400 rounded-lg flex items-center">
                        <FiList className="ml-2 w-12 h-12" />
                        {isMenuOpen && <span className="ml-2">Pedidos</span>}
                    </a>
                    <a href="#" className="block hover:bg-gray-400 rounded-lg flex items-center">
                        <FiUsers className="ml-2 w-12 h-12" />
                        {isMenuOpen && <span className="ml-2">Clientes</span>}
                    </a>
                </div>
            </nav>

            {/* Conteúdo principal */}
            <main className="flex-1 flex flex-col overflow-hidden">
                {/* Cabeçalho */}
                <header className="w-full bg-white py-4">
                    <div className="mx-6">
                        <div className="flex items-center justify-between">
                            <button
                                className="text-gray-500 focus:outline-none"
                                onClick={toggleMenu}
                            >
                                <FiMenu />
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
                    {/* Aqui vai o conteúdo da página */}
                    <h1 className="text-3xl font-semibold">Dashboard</h1>
                    <p>Seu conteúdo aqui.</p>
                </div>
            </main>
        </div>
    );
};

export default Navbar;
