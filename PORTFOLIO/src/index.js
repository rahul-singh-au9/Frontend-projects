import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
// import {Route, Switch, Redirect} from 'react-router-dom';
// import Home from './Home';
// import About from './About';
// import Timeline from './Timeline';
// import Contact from './Contact';

ReactDOM.render(
  <BrowserRouter>
    <App />
    {/* <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/introduction" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/timeline" component={Timeline}/>
      <Route exact path="/contact" component={Contact}/>
      <Redirect to="/"/>
    </Switch> */}
  </BrowserRouter>,
  document.getElementById('root')
);
