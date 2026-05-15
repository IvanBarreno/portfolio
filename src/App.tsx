import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageLayout from './components/PageLayout'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Notes from './pages/Notes'
import NoteDetail from './pages/NoteDetail'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*
          Layout route: no path — just wraps children with PageLayout.
          Every nested Route renders inside <Outlet /> in PageLayout.
          This means Navbar + Footer appear on every page automatically.
        */}
        <Route element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/notes/:slug" element={<NoteDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
