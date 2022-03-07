import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from "./components/ErrorBoundary";
import App from './App';

hydrate(
    <React.StrictMode>
      <BrowserRouter>
        <ErrorBoundary>{[<App key="App" />]}</ErrorBoundary>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
