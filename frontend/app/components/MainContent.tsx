// frontend/app/components/MainContent.tsx
import Button from './Button';
import Image from 'next/image';
import mainImage from '../images/Main.jpg';
import Link from 'next/link';

const MainContent: React.FC = () => {
  return (
    <main id="home" className="flex flex-col items-center justify-center min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto p-4 flex flex-col md:flex-row items-center text-left">
        <div className="md:w-1/2 p-4">
          <h2 className="text-5xl font-bold text-gray-900 mb-4 animate-fade-in text-blue-500">
            Accountant AI
          </h2>
          <p className="text-gray-700 mb-8">
            AI Accountant помогает автоматизировать ежедневные бухгалтерские задачи, такие как расчет доходов, управление расходами и анализ финансовых данных. Наше решение упрощает ваши бухгалтерские процессы, экономя ваше время и снижая количество ошибок.
          </p>
          <div className="flex justify-start space-x-4 mb-8">
            <Link href="/chat">
              <Button>Начать использовать</Button>
            </Link>
            <Button variant="secondary">Подробнее</Button>
          </div>
        </div>
        <div className="md:w-1/2 p-4 flex justify-center md:justify-end">
          <Image src={mainImage} alt="AI Accountant Illustration" width={500} height={500} />
        </div>
      </div>
    </main>
  );
};

export default MainContent;
