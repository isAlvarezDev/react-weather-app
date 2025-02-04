import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider, WeatherProvider } from './context/index.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
    <WeatherProvider>
      <App />
    </WeatherProvider>
    </ThemeProvider>
  </StrictMode>,
)
