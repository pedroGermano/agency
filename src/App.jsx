import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-blue-800 text-zinc-800">
      <Header />
      <main id="" className="max-w-8xl mx-auto">
        <Hero />
      </main>
      <Footer />
    </div>
  );
};

export default App;
