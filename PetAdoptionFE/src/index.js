import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import theme from './theme';
import '@fontsource/quattrocento/400.css'
import '@fontsource/oswald/700.css'
import { AuthProvider } from './Contexts/authContext';
import { PetProvider } from './Contexts/petContext';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <AuthProvider>
        <PetProvider>
          <ChakraProvider theme={theme}>
            <App />
          </ChakraProvider>
        </PetProvider>
      </AuthProvider>
    </BrowserRouter>
);

reportWebVitals();
