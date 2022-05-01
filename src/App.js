import './App.css';
import KuttyHero from './components/Welcome.tsx';
import Footer from './components/Footer.tsx';
import Stats from './components/Stats.tsx';
import Features from './components/Features.js';
import CTA from './components/CTA.js';

function App() {
  return (
    <main className='w-full h-full py-10'>
      <KuttyHero />
      <Stats />
      <Features />
      <CTA />
      <Footer />
    </main>
  );
}

export default App;
