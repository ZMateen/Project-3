import React from "react";
import FrontPage from "./components/FrontPage";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

const App = () => 
    <Router>
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={FrontPage}/>

            </Switch>
            </div>
    </Router>
;

export default App;
