import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "@fontsource/inter/index.css"
import './index.css'
import App from './App'
import { Provider } from "react-redux"
import { store } from "./store"
import { Toaster } from './components/ui/sonner'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
      <Toaster />
    </Provider>
  </StrictMode>,
)
