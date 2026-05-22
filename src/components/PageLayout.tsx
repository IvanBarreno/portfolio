import { Outlet, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './Navbar'
import Footer from './Footer'
// import CatPet from './CatPet' // ← uncomment to re-enable the cat pet

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1, ease: 'easeOut' as const } },
}

export default function PageLayout() {
  const location = useLocation()

  return (
    <div className="min-h-screen flex flex-col bg-base text-text">

      {/* ── Fixed ambient glow — stays in place while content scrolls ── */}
      <div className="pointer-events-none fixed top-[-10%] left-[-10%] h-[600px] w-[600px] rounded-full bg-accent/15 blur-[120px] z-0" />
      <div className="pointer-events-none fixed bottom-[-10%] right-[-5%]  h-[500px] w-[500px] rounded-full bg-accent/10 blur-[100px] z-0" />
      <div className="pointer-events-none fixed top-[40%]  right-[20%]   h-[300px] w-[300px] rounded-full bg-accent/[0.06] blur-[90px]  z-0" />

      <Navbar />
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        <AnimatePresence>
          <motion.div
            key={location.pathname}
            variants={pageVariants}
            initial="initial"
            animate="animate"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      {/* <CatPet /> */}
    </div>
  )
}
