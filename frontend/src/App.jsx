import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import logo from './assets/logo_light.png'
import ListeVideo from './ListeVideo'
import Video from './Video'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">
          <h1>
            <img src={logo}/>
            EduNova
          </h1>
        </Link>
      </header>
      <Routes>
        <Route path="/" element={<ListeVideo/>} />
        <Route path="/:id" element={<Video/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
