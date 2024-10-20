import { createRoot } from 'react-dom/client'
import { GiphyContextProvider } from './hooks/useGiphyStore.tsx'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
    <GiphyContextProvider>
      <App />
    </GiphyContextProvider>,
)
