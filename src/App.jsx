import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'

import Skater from './components/Skater'
import Skaters from './Skaters'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/My-Favorite-Skaters./" element={<Home />} />
        {Skaters.map((skater,key) => <Route key={key} path={`/My-Favorite-Skaters${skater.path}`} element={<Skater skater={skater} />} />)}
      </Routes>
    </div>
  )
}

export default App
