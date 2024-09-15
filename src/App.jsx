import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";

function App() {
  return (
    <>
      <div className="min-h-screen bg-black flex flex-col top-0">
        <Header />
        <div className="text-white">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
