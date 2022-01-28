import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Home} from './components/home';
import {About, Contact, PageLayout, Privacy, Tos} from './pages';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<App/>}>
                    <Route index element={<Home/>}/>
                </Route>
                <Route element={<PageLayout/>}>
                    <Route path="/privacy" element={<Privacy/>}/>
                    <Route path="/tos" element={<Tos/>}/>
                    <Route path="/contact-us" element={<Contact/>}/>
                    <Route path="/about" element={<About/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
