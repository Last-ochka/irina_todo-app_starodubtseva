import React from "react";
import { Routes, Route } from 'react-router-dom'



import TodoEntryField from "./TodoEntryField"

const MainContent = () => {
    return (
        <main>
          {/*   <Routes>
                <Route exact path='/' component={All} /> {/*Home?}
                <Route path='/active' component={Active} />
                <Route path='/complited' component={Complited} /> 
            </Routes>*/}
             <TodoEntryField />
        </main>
    );
}
export default MainContent;