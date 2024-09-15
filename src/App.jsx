import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import MainContent from "./components/MainContent.jsx";

function App() {
  return (
    <>
      <div className="min-h-screen bg-black flex flex-col top-0">
        <Header />
        <MainContent />
        <div className="text-white">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
