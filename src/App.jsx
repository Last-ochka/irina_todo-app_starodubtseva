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
                <Route exact path='/' element={<TodoList />} /> 
                <Route path='/active' element={<TodoList />} />
                 <Route path='/completed' element={<TodoList />} />  
            </Routes>
   </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
