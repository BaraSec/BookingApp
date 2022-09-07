import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Hotels from './Pages/Hotels'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Hotels' element={<Hotels />} />
      </Routes>
    </Router>
  )
}

export default App