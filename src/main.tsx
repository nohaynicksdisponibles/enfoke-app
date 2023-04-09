import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import AppWrapper from './components/AppWrapper'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <AppWrapper>
    <App />
  </AppWrapper>
)
