import React from 'react';
import './App.css';
import Welcome from './components/Welcome'
import {BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"


function App() {
  return (
    <div className="app">
      <h1>Welcome to serikaliMtaa-live 🚀 </h1>
      <Router>
        <nav>
          <ul>
            {/* <li>
              <NavLink to="/">welcome</NavLink>
            </li> */}
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App

