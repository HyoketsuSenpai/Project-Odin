import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Greeting from './Greeting.tsx';
import { Kali } from './Kali.tsx';
import Person from './Person.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Person />
    <Greeting />
    <Kali />
    <App />
  </StrictMode>,
)
