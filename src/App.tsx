import './App.css'
import { ContextProvider } from './context'
import Home from './screens/Home'

function App() {
  return (
    <ContextProvider>
      <Home />
    </ContextProvider>
  )
}

export default App
