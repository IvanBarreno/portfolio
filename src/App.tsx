import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import { lazy, Suspense, useEffect } from 'react'
import PageLayout from './components/PageLayout'
import Home from './pages/Home'

// Lazy-loaded pages — each becomes its own chunk, so heavy dependencies
// (react-markdown, the notes/walkthrough markdown) stay out of the initial bundle.
const About = lazy(() => import('./pages/About'))
const Skills = lazy(() => import('./pages/Skills'))
const Projects = lazy(() => import('./pages/Projects'))
const Notes = lazy(() => import('./pages/Notes'))
const NoteDetail = lazy(() => import('./pages/NoteDetail'))
const Contact = lazy(() => import('./pages/Contact'))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Suspense fallback={null}>
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
      </Suspense>
    </HashRouter>
  )
}

export default App
