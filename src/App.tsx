import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Home from './screens/Home'
import MovieDetail from './screens/MovieDetail'
import SearchResults from './screens/SearchResults'
import MovieFilter from './screens/MovieFilter'
import PageNotFound from './screens/PageNotFound'
import PersonInfo from '@screens/PersonInfo'

function App() {
  const location = useLocation();
  return (
    <Routes key={location.pathname} location={location}>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<MovieDetail />} />
      <Route path="/search" element={<SearchResults />} />
      <Route path="/filter/:type" element={<MovieFilter />} />
      <Route path="/person/:id" element={<PersonInfo />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default App
