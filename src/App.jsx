import BlogSection from "./components/BlogSection.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import MainContent from "./components/MainContent.jsx";

function App() {
  return (
    <>
      <div className="min-h-screen bg-black flex flex-col top-0 text-white">
        <Header />
        <MainContent />
        <div className="p-3 mb-2">
          <BlogSection />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
