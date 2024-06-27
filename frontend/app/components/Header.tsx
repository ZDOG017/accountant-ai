// frontend/app/components/Header.tsx
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow p-4 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Accountant AI</h1>
        <nav className="flex space-x-6">
          <Link href="/" className="text-lg text-gray-700 hover:text-blue-500 transition">О системе</Link>
          <Link href="/" className="text-lg text-gray-700 hover:text-blue-500 transition">Тарифы</Link>
          <Link href="/" className="text-lg text-gray-700 hover:text-blue-500 transition">Документы</Link>
          <Link href="/" className="text-lg text-gray-700 hover:text-blue-500 transition">Контакты</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="/" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">Войти в кабинет</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
