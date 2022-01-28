import React from "react";
import {
    Routes,
    Route
} from "react-router-dom";
import {Dashboard} from "./components/dashboard";
import {Layout} from "./components/layout";
import {Users} from "./components/users";
import {LoginPage} from "./pages";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="users" element={<Users/>}></Route>
                <Route path="dashboard" element={<Dashboard/>}></Route>
                <Route path="login" element={<LoginPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
