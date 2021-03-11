import React from 'react';
import Header from './Header';
import CharacterControl from './CharacterControl';
import Signin from "./Signin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header/>
      <div style={{paddingLeft: '70px', paddingTop: '30px'}} className="container">
        <Switch>
          <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/">
            <CharacterControl />
          </Route>
        </Switch>
      </div>
    </Router>
    // <React.Fragment>
    //   <div className="container">
    //     <Header />
    //     <CharacterControl/>
    //   </div>
    // </React.Fragment>
  );
}

export default App;
