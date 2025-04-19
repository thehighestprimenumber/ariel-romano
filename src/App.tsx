import { useEffect } from 'react'
import Header from './components/Header'
import About from './components/About'
import Music from './components/Music'
import Videos from './components/Videos'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { analytics } from './firebase'
import { logEvent } from 'firebase/analytics'
import './styles/main.css'

function App() {
  useEffect(() => {
    // Log page view when the app loads
    logEvent(analytics, 'page_view', {
      page_title: 'Ariel Romano - Home',
      page_location: window.location.href,
      page_path: window.location.pathname
    });
  }, []);

  return (
    <div className="app">
      <Header />
      <main>
        <About />
        <Music />
        <Videos />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
