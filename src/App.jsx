import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Services from './components/Services'
import Doctors from './components/Doctors'
import Blog from './components/Blog'
import Footer from './components/Footer'
function App() {

  return (
    <>
      <div >
        <Navbar/>

        <main>
          <div id="home">
            <Home/>
          </div>

          <div id="about">
            <About/>
          </div>

          <div id="services">
            <Services/>
          </div>

          <div id="doctors">
            <Doctors/>
          </div>

          <div id="blog">
            <Blog/>
          </div>

        </main>

        <Footer/>
      </div>

    </>
  )
}

export default App
