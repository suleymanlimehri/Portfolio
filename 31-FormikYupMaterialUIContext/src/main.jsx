import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ProductProvider } from './components/context/ProductContext.jsx'

createRoot(document.getElementById('root')).render(
  <ProductProvider>
    <App />
  </ProductProvider>,
)
