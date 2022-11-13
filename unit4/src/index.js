import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'
import {BrowserRouter} from "react-router-dom"
import { StyledEngineProvider, CssVarsProvider } from '@mui/joy/styles';
import AuthContextProvider from './Context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StyledEngineProvider injectFirst>
  <CssVarsProvider>
  <BrowserRouter>
  <AuthContextProvider>
  <ChakraProvider>
 
 <React.StrictMode>
    <App />
  </React.StrictMode>
 
  </ChakraProvider>
  </AuthContextProvider>
  </BrowserRouter>
  </CssVarsProvider>
  </StyledEngineProvider>



 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
