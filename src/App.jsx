import Header from "./components/Header";
import Footer from "./components/Footer";
import TodoList from "./pages/TodoList";
import { BrowserRouter, Routes, Route } from "react-router-dom"; /* ??? */

function App() {
  return (
    <div>
      <Header />
<BrowserRouter>
        <Routes>
                <Route exact path='/' element={<TodoList marker={'all'} />} /> 
                <Route path='/active' element={<TodoList marker={'active'}/>} />
                 <Route path='/completed' element={<TodoList marker={'completed'}/>} />  
            </Routes>
   </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
