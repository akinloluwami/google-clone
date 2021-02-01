import "./App.css";
import Home from "./pages/Home/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./pages/Search/index";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
