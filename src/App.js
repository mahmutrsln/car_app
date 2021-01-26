import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import links from './data/links'

function App() {
  const routeMaps = links.map((item, index) =>(
    <Route key ={index} exact = {item.isExact} path = {item.link} component = {item.component} />
    )
  )
  return (
    <BrowserRouter>
        <Navbar links = {links}/>
        <div className="container">
          <div className="row">
            <div className="col-sm-8 offset-sm-2">
              <Switch>
                {routeMaps}
              </Switch>
              {/* <Switch>
                <Route exact = {true} path="/" component ={Home} />
              </Switch>
              <Switch>
                <Route exact = {false} path="/urunler" component={Products} />
              </Switch>
              <Switch>
                <Route exact = {false} path="/hakkimizda" component = {About} />
              </Switch>
              <Switch>
              <Route exact = {false} path="/iletişim" component ={Contact} />
              </Switch> */}
            </div>
          </div>
        </div>
    </BrowserRouter>

  );
}

export default App;
