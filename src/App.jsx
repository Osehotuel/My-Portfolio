import mynewlogo from './assets/mynewlogo.png'
import './App.css'
import Home from './Componets/Home'
import About from './Componets/About'
import Contact from './Componets/Contact'
import Projects from './Componets/Projects'
import linkedinlogo from './assets/linkedinlogo.svg'
import gitHublogo from './assets/githublogo.svg'
import twitterlogo from './assets/twitterlogo.svg'

function App() {

  return (
    <div className= "App">
      <header>
        
        <img src={mynewlogo} alt className= "logo" />
        <div className= "navlinks">
          <a href="#for-home">Home</a>
          <a href="#for-about">About</a>
          <a href="#for-contact">Contact</a>
          <a href="#for-projects">Projects</a>
        </div>
      </header>
      <main>
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer>
        <div className="social">
          <a href="https://www.linkedin.com/in/joysamuelinegbedion/" target= "_blank">
          <img src={linkedinlogo} alt="" />
        </a>

        <a href="https://github.com/Osehotuel"target= "_blank">
          <img src={gitHublogo} alt="" />
        </a>

        <a href="https://twitter.com/JoySam_"target= "_blank">
          <img src={twitterlogo} alt="" />
        </a>

      </div>
      <p>&copy; Joy Samuel Inegbedion </p>

    </footer>
    </div>

  
  )
}

export default App
