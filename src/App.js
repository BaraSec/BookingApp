import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Hotels from './Pages/Hotels'
import Hotel from './Pages/Hotel'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Hotels' element={<Hotels />} />
        <Route path='/Hotels:id' element={<Hotel />} />
      </Routes>
    </Router>
  )
}

export default App