import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Home from "./components/screens/Home"
import Header from './components/screens/Header';
import Place from './components/screens/Place';

function App() {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/place/:id" exact component={Place} />
        </Switch>
        
      </> 
    </Router>
   
  )
}

export default App;
