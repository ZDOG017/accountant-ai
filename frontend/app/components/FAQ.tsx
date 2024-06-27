// frontend/app/components/FAQ.tsx
'use client'
import { useState } from 'react';

const faqs = [
  {
    question: "Как AI Accountant автоматизирует бухгалтерские задачи?",
    answer: "AI Accountant использует передовые алгоритмы машинного обучения для автоматизации расчета доходов, управления расходами и анализа финансовых данных, что позволяет существенно сократить время и уменьшить количество ошибок."
  },
  {
    question: "Какие задачи может выполнять AI Accountant?",
    answer: "AI Accountant может выполнять расчет заработной платы, управление налогами, учет рабочего времени, создание отчетов и многое другое."
  },
  {
    question: "Как AI Accountant помогает экономить деньги?",
    answer: "Автоматизация рутинных задач позволяет сократить расходы на персонал и избежать ошибок, связанных с человеческим фактором, что в конечном итоге снижает операционные затраты."
  },
  {
    question: "Как настроить AI Accountant для моего бизнеса?",
    answer: "Процесс настройки AI Accountant прост и интуитивно понятен. Вам нужно создать учетную запись, загрузить необходимые данные и следовать инструкциям на экране."
  }
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">Часто задаваемые вопросы</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 cursor-pointer transition-transform transform hover:scale-105"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-800">{faq.question}</h3>
                <svg
                  className={`w-6 h-6 transform transition-transform ${activeIndex === index ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
              {activeIndex === index && (
                <div className="mt-4 text-left text-gray-600">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
