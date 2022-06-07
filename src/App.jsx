import Header from "./components/Header";

import Footer from "./components/Footer";
import TodoList from "./pages/TodoList";

import { BrowserRouter, Routes, Route } from "react-router-dom"; /* ??? */

function App() {
  return (
    <div>
      <Header />

      {/*   <Routes>
                <Route exact path='/' component={All} /> {/*Home?}
                <Route path='/active' component={Active} />
                <Route path='/complited' component={Complited} /> 
            </Routes>*/}
      {/* <TodoEntryField /> */}
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;
