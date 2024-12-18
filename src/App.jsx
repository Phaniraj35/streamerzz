import Hero from "./components/Hero";
import HowItWorks from "./components/HowitWorks";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="text-sm text-neutral-300 antialiased">
      <Navbar />
      <Hero />
      <HowItWorks />
    </main>
  );
}

export default App;
