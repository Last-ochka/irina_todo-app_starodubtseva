import HeaderContainer from "./containers/HeaderContainer"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"
import { BrowserRouter, Routes, Route } from 'react-router-dom'; /* ??? */

function App() {
  return (
    <div>
      <HeaderContainer />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
