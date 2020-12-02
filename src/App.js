
import { Route, Switch , BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import NavBar from './Component/NavBar'

import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Hero from './Component/Hero'
import Plans from './Pages/Plans'
import Footer from './Component/Footer'




function App() {
  return (
    <div className="App">
      
          <Router>
            <Switch>
              <Route exact path ="/">
                <NavBar/>
                <Hero/>
                <Services/>
                <Plans/>
                <Contact/>
                <Footer/>
               </Route>

              <Route exact path ="/Plans">
                <NavBar/>
                <Hero/>
               
                <Plans/>
                <Footer/>
               
              </Route>

              <Route exact path ="/Services">
                <NavBar/>
                <Hero/>
                <Services/>
               <Footer/>
              </Route>

              <Route exact path ="/Contact">
                <NavBar/>
                <Hero/>
                <Contact/>
                <Hero/>
               
              </Route>
            </Switch>
          </Router>
        

      
      
    </div>
  );
}

export default App;
