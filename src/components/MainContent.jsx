import React from "react";
import { Routes, Route } from 'react-router-dom'

const MainContent = () => {
    return (
        <main>
            <Routes>
                <Route exact path='/' component={All} /> {/*Home?*/}
                <Route path='/active' component={Active} />
                <Route path='/complited' component={Complited} />
            </Routes>
        </main>
    );
}
export default MainContent;