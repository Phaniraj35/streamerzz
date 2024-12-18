import Hero from "./components/Hero";
import HowItWorks from "./components/HowitWorks";
import KeyFeatures from "./components/KeyFeatures";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="text-sm text-neutral-300 antialiased">
      <Navbar />
      <Hero />
      <HowItWorks />
      <KeyFeatures />
    </main>
  );
}

export default App;
