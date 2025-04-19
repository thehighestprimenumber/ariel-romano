import Header from './components/Header'
import About from './components/About'
import Music from './components/Music'
import Videos from './components/Videos'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './styles/main.css'

function App() {
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
