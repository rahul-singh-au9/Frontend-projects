import {Route, Switch, Redirect} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Sidebar';
import Home from './Home';
import About from './About';
import Timeline from './Timeline';
// import Contact from './Contact';
import Contact2 from './Contact2';

function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <Sidebar/>
          </div>
          <div className="col-md-10">
            <Home/>
            <About/>
            <Timeline/>
          </div>
        </div>
      </div>
      <Switch>
        {/* <Route exact path="/" component={Home}/> */}
        {/* <Route exact path="/introduction" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/timeline" component={Timeline}/> */}
        <Route exact path="/contact" component={Contact2}/>
        <Redirect to="/"/>
      </Switch>
    </>
  );
}

export default App;