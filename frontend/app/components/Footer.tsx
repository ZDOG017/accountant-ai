// frontend/app/components/Footer.tsx
import Link from 'next/link';
import { FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          <div className="mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-blue-500 mb-2">Accountant AI</h2>
            <p className="text-gray-400">Автоматизируйте бухгалтерские задачи и экономьте время и деньги с помощью AI Accountant.</p>
          </div>
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start space-y-4 md:space-y-0 md:space-x-16">
            <div>
              <h3 className="text-xl font-semibold mb-2">Контакты</h3>
              <Link href="mailto:iamkazakh02@gmail.com" className="text-gray-400 hover:text-white transition">iamkazakh02@gmail.com</Link>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Следите за нами</h3>
              <div className="flex space-x-4">
                <Link href="https://www.instagram.com/yourusername" passHref>
                  <FaInstagram size={32} className="text-gray-400 hover:text-white transition duration-300 cursor-pointer" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 text-gray-500 text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Accountant AI. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
