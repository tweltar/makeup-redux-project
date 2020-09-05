import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './components/HomePage';
import ByProduct from './components/ByProduct';
import ByBrand from './components/ByBrand';
import PageNotFound from './components/PageNotFound';
import ViewProducts from './components/ViewProduct';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/search" component={ByProduct} />
          <Route exact path="/search/byproduct" component={ByProduct} />
          <Route exact path="/search/byproduct/:id" component={ViewProducts} />
          <Route exact path="/search/bybrand" component={ByBrand} />
          <Route exact path="/search/bybrand/:id" component={ByBrand} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
