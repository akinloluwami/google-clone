import './App.css';
//import Home from './pages/Home'

import { BrowserRouter as Router, Route, Switch } from './node_modules/react-router-dom';

function App() {
  const history = createBrowserHistory();
  return (
    <div className="App">
      
      <Router>
        <Switch>
          <Route path="/search">
            <h1>SEARCH THAT SHIT</h1>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
