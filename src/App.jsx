import Header from "./components/Header";
import Footer from "./components/Footer";
import TodoList from "./pages/TodoList";
import { HashRouter, Routes, Route } from "react-router-dom"; /* ??? */

function App() {
  return (
    <div>
      <Header />
<HashRouter>
        <Routes>
                <Route path='/' element={<TodoList show={'all'} />} /> 
                <Route path='/active' element={<TodoList show={'active'}/>} />
                 <Route path='/completed' element={<TodoList  show={'completed'} />} />  
            </Routes>
   </HashRouter>

      <Footer />
    </div>
  );
}

export default App;
