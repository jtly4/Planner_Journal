import ReactDOM from "react-dom/client";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { EventsContextProvider } from './context/eventContext'
import { AuthContextProvider } from './context/authContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
        <AuthContextProvider>
          <EventsContextProvider>
            <App />
          </EventsContextProvider>
        </AuthContextProvider>
     </BrowserRouter>
   </React.StrictMode>,
);
