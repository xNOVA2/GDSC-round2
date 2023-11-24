import { Expertise, Hero, Navbar } from './components'
import Experience from './components/Experience/Experience'
import Footer from './components/Footer/Footer'
import Projects from './components/Projects/Projects'

function App() {

  return (
    <>
    <div className='bg-lime-50 '>
    <Navbar/>
    <Hero/>
    <Expertise/>
    <Experience/>
    <Projects/>
    <Footer/>
    </div>
  
    </>
  )
}

export default App
