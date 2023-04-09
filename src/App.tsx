import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './screens/Home'
import MovieDetail from './screens/MovieDetail'
import SearchResults from './screens/SearchResults'
import MovieFilter from './screens/MovieFilter'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<MovieDetail />} />
      <Route path="/search" element={<SearchResults />} />
      <Route path="/filter/:type" element={<MovieFilter />} />
    </Routes>
  )
}

export default App
