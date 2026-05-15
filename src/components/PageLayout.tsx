import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

/*
  Outlet is a React Router concept — it renders whatever child route is active.
  So every page (Home, About, etc.) gets rendered in place of <Outlet />,
  automatically wrapped by Navbar and Footer.
*/
export default function PageLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-base text-text">
      <Navbar />
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
