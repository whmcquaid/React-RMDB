import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './elements/Header';
import Home from './Home';
import Movie from './Movie';
import NotFound from './NotFound';

import { GlobalStyle } from './styles/GlobalStyle';

const App = () => (
  <>
    <Router>
    <Header />
    <Switch>
      <Route path="/React-RMDB/home" exact component={Home}/>
      <Route path="/React-RMDB/:movieId" component={Movie}/>
      <Route component={NotFound}/> 
      </Switch>     
    </Router>
    <GlobalStyle />
  </>
)

export default App;