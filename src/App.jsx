import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"
import { BrowserRouter, Routes, Route } from 'react-router-dom'; /* ??? */

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
