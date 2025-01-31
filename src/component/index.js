import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
