
import './App.css';
import Header from "./components/HeaderContainer"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"
import { BrowserRouter, Routes, Route } from 'react-router-dom'; /* ??? */

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
