'use client'
import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow p-4 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900 text-blue-500">Accountant AI</h1>
        <nav className="hidden md:flex space-x-6">
          <Link href="#home" className="text-lg text-gray-700 hover:text-blue-500 transition">Главная</Link>
          <Link href="#benefits" className="text-lg text-gray-700 hover:text-blue-500 transition">Почему AI это выгодно</Link>
          <Link href="#features" className="text-lg text-gray-700 hover:text-blue-500 transition">Преимущества</Link>
          <Link href="#faq" className="text-lg text-gray-700 hover:text-blue-500 transition">FAQ</Link>
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">Войти в кабинет</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-md rounded-lg p-4 mt-4">
          <nav className="flex flex-col space-y-4">
            <Link href="#home" className="text-lg text-gray-700 hover:text-blue-500 transition" onClick={toggleMenu}>Главная</Link>
            <Link href="#benefits" className="text-lg text-gray-700 hover:text-blue-500 transition" onClick={toggleMenu}>Почему AI это выгодно</Link>
            <Link href="#features" className="text-lg text-gray-700 hover:text-blue-500 transition" onClick={toggleMenu}>Преимущества</Link>
            <Link href="#faq" className="text-lg text-gray-700 hover:text-blue-500 transition" onClick={toggleMenu}>FAQ</Link>
            <Link href="/" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition" onClick={toggleMenu}>Войти в кабинет</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
