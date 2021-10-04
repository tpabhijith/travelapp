import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Home from "./components/screens/Home"
import Header from './components/screens/Header';
import Place from './components/screens/Place';
import Helmet from "react-helmet";

function App() {
  return (
    <Router>
      <>
        <Helmet>
          <title>Places | Travel Guide</title>
        </Helmet>
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
