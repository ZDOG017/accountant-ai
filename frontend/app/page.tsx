// frontend/app/page.tsx
import Head from 'next/head';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Benefits from './components/Benefits';
import Features from './components/Features';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Accountant AI</title>
        <meta name="description" content="A minimalistic and beautiful landing page for Accountant AI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <MainContent />
      <Benefits />
      <Features />
    </div>
  );
};

export default Home;
