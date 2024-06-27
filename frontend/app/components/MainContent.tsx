// frontend/app/components/MainContent.tsx
import Button from './Button';
import Image from 'next/image';
import mainImage from '../images/Main.jpg';

const MainContent: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto p-4 flex flex-col md:flex-row items-center text-left">
        <div className="md:w-1/2 p-4">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Automate Your Accounting with AI
          </h2>
          <p className="text-gray-700 mb-8">
            Accountant AI helps automate daily accounting tasks such as calculating revenue, managing expenses, and analyzing financial data. Our solution simplifies your accounting processes, saving you time and reducing errors.
          </p>
          <div className="flex justify-start space-x-4 mb-8">
            <Button>Download Application</Button>
            <Button variant="secondary">Choose a Plan</Button>
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