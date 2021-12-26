import './App.css';
import SignIn from './Pages/SignIn';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
import Store from './Store';

function App() {
  return (
    <div className="App">
      {/* Using routers to lode diffirent page */}
      
      <Router>
      
        <Switch>
        
          <Route exact path="/" >
            <Store>
            <Home />
            </Store>
          </Route>
          <Route path="/signIn">
            <Store>
            <SignIn />
            </Store>
          </Route>
          <Route path="/signUp">
            <Store>
            <SignUp />
            </Store>
          </Route>
          
        </Switch>
        
      </Router>
  
    </div>
  );
}

export default App;
