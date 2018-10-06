import React from "react";

import FrontPage from "./components/FrontPage";
import SelectPage from "./components/SelectPage";
import FightPage from "./components/FightPage";
import Signup from "./components/Signup";

import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

const App = () => 
    <Router>
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={FrontPage}/>
                <Route exact path="/SelectPage" component={SelectPage}/>
                <Route exact path="/FightPage" component={FightPage}/>
                <Route exact path="/Signup" component={Signup}/>

            </Switch>
            </div>
    </Router>
;

export default App;
