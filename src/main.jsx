import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './styles/index.css'
import LoginPage from './components/LoginPage'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <LoginPage />
    </BrowserRouter>
  </StrictMode>
);
