import './App.css';
import home from './pages/Home';
import Produit from './pages/Produit';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';


function App() {
  const openMenu = ()=>{
    document.querySelector('.sidebar').classList.add("open");
  }
  const closeMenu = ()=>{
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
    <Router>
    <div className="App-contenue">
      <div className="App-header">
              <div className="menu">
              <button onClick={openMenu} >
              &#9776;
              </button>
                <a href="#">dcc.com</a>
              </div>
              <div className="btt-menu">
                <a href="#">poster des annonces</a>
                <a href="#">connxion</a>
                <a href="#">inscription</a>
              </div>

            </div>
            <aside className="sidebar">
              <h3>cathégories</h3>
              <button className="sidebar-close-button" onClick={closeMenu}>x</button> 
              <ul> 
              <li>
              <a href="#">chemuse</a>                
              </li>
              <li>
              <a href="#">pentalon</a>                
              </li>
              </ul>             
            </aside>

            <Switch>
              <Route path='/produit/:id' component={Produit}></Route>
            <Route path='/' exact={true} component={home}></Route>
            
            

            </Switch>                       

                  


      <div className="App-pied">
        copy rigth

      </div>

    </div>
    </Router> 
  );

  
}





export default App;

