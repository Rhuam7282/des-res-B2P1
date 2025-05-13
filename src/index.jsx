import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Componente principal da aplicação
import './index.css';
import reportWebVitals from './reportWebVitals';

// Criação do root element usando React 18's createRoot
const root = ReactDOM.createRoot(
  document.getElementById('root') // Elemento raiz do HTML
);

// Renderização da aplicação com StrictMode para desenvolvimento
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Opcional: Medição de performance da aplicação
reportWebVitals();