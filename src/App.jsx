import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import Projects from "./Components/Projects"
import Education from "./Components/Education"
import Contact from "./Components/Contact"
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
function App() {


  return (
   <div >
    <Router>

<Navbar/>
<Routes>



<Route path="/" element ={ <Home />}/>
<Route path="/projects" element ={ <Projects />} />
<Route path="/education" element ={ <Education />} />
<Route path="/contact" element ={ <Contact />} />
</Routes>
    </Router>
   </div>
  )
}

export default App
