import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
// import './assets/css/style-sample.css';
import Landing from './Landing';
// import Sample from './Sample';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Switch, Route, BrowserRouter } from "react-router-dom";
// import Entry from './pages/Entry';
import Home from './pages/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" >
            {/* <Entry /> */}
            <Landing/>
          </Route>
          {/* <Route exact path="/home" >
            <Landing />
          </Route> */}
          <Route path="/my" component={Home}/>
            {/* <Home /> */}
          {/* </Route> */}
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
