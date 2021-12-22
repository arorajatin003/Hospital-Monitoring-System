import './App.css';
import SignIn from './Pages/SignIn';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';

function App() {
  return (
    <div className="App">
      {/* Using routers to lode diffirent page */}
      <Router>
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route path="/signIn">
            <SignIn />
          </Route>
          <Route path="/signUp">
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
