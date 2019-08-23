import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from './privateRoute';
import Login from "./components/Login";
import BubblePage from './components/BubblePage';

import "./styles.scss";

function App() {
  const [colorList, setColorList] = useState([]);
  return (
    <Router>
      <div className="App">
        <Route exact path="/login" component={Login} />
        <PrivateRoute path='/' component={BubblePage} colorList={colorList} setColorList={setColorList}/>
      </div>
    </Router>
  );
}

export default App;
