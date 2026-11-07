import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/scss/index.css'
import './assets/Library/bootstrap/css/bootstrap.css';
import './assets/Library/fontawesome/all.min.css';
import './assets/Library/bootstrap/js/bootstrap.bundle.js';
import App from './App.tsx'
import { Provider } from "react-redux";
import { store } from "./redux/store";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </StrictMode>,
)
