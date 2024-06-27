// frontend/app/components/Features.tsx
const features = [
    {
      title: "Полная автоматизация",
      description: "Забудьте о рутинных задачах! AI Accountant берет на себя расчет зарплат, управление налогами и учет рабочего времени."
    },
    {
      title: "Сохранение времени",
      description: "Оставьте рутину в прошлом. Сэкономленное время можно посвятить стратегическому развитию бизнеса."
    },
    {
      title: "Экономия средств",
      description: "Сократите расходы на персонал и устраните ошибки благодаря автоматизированным процессам."
    },
    {
      title: "Высокая точность",
      description: "Снизьте риск ошибок и получите точные данные благодаря передовым алгоритмам AI Accountant."
    },
    {
      title: "Аналитика в реальном времени",
      description: "Получайте мгновенные отчеты и аналитику для принятия обоснованных решений."
    }
  ];
  
  const Features: React.FC = () => {
    return (
      <section className="py-20 bg-gradient-to-r from-blue-500 to-blue-700 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-extrabold mb-12">
            Преимущества использования AI Accountant
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white text-blue-900 shadow-lg rounded-lg p-8 transform transition duration-500 hover:scale-105 hover:bg-blue-100">
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-lg">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Features;
  