import "./App.scss";
import ModalExample from "./components/ModalExample";
import NewNav from "./components/NewNav";

import Home from "./pages/Home";
import About from "./pages/About";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
       <Router>
      <div>
        <NewNav/>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about" component={About} />
            
          <Route path="/contact" component={Contact} />
          <Route path="/" exact component={Home} />
          <Route path="/portfolio" exact component={Portfolio} />
          
          
          
        </Switch>
        <Footer />
      </div>
    </Router>  
  );
}

export default App;
