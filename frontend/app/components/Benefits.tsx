// frontend/app/components/Benefits.tsx
import Image from 'next/image';
import timeSavingImage from '../images/clock.jpg'; // Replace with your actual image path
import moneySavingImage from '../images/coins.jpg'; // Replace with your actual image path
import accuracyImage from '../images/error.jpg'; // Replace with your actual image path
import realTimeAnalyticsImage from '../images/analytics.jpg'; // Replace with your actual image path

const benefits = [
  {
    title: "Экономия времени",
    description: "Ваши сотрудники не тратят время на ручной ввод и подсчёт данных, так как AI Accountant автоматизирует эти процессы.",
    image: timeSavingImage
  },
  {
    title: "Экономия денег",
    description: "Благодаря автоматизации сотрудников можно задействовать на более важных задачах, что позволяет избежать затрат на дополнительный персонал.",
    image: moneySavingImage
  },
  {
    title: "Повышение точности",
    description: "AI Accountant уменьшает вероятность ошибок, связанных с человеческим фактором, и обеспечивает точность финансовых данных.",
    image: accuracyImage
  },
  {
    title: "Аналитика в реальном времени",
    description: "Получайте мгновенные отчеты и аналитику по финансовым показателям вашей компании, что позволяет принимать обоснованные решения.",
    image: realTimeAnalyticsImage
  }
];

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">
          Почему AI Accountant — это выгодно?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white shadow-xl rounded-lg p-8 transform transition duration-500 hover:scale-105 hover:bg-blue-50">
              <div className="flex justify-center mb-4">
                <Image src={benefit.image} alt={benefit.title} width={100} height={100} className="rounded-full" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
