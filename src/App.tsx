import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
// import { Pricing } from './components/Pricing';
// import { SocialProof } from './components/SocialProof';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      {/* <Pricing /> */}
      {/* <SocialProof /> */}
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
