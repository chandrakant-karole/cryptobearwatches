import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
// import './assets/css/style-sample.css';
import Landing from './Landing';
// import Sample from './Sample';
// import { Switch, BrowserRouter as Routes,  Route } from 'react-router-dom';
import { Switch, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" >
            <Landing />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
