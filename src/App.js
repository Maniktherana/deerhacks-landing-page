import './App.css';
import KuttyHero from './components/Welcome.tsx';
import Footer from './components/Footer.tsx';
import Stats from './components/Stats.tsx';
import Features from './components/Features.js';

function App() {
  return (
    <main className='w-full h-full py-10'>
      <KuttyHero />
      <Stats />
      <Features />
      <Footer />
    </main>
  );
}

export default App;
