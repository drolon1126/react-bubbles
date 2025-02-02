import React, { useState, useEffect } from "react";
import {axiosWithAuth} from "../axiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = (props) => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(()=>{
    axiosWithAuth()
    .get("http://localhost:5000/api/colors")
    .then(res => setColorList(res.data))
    .catch(err => console.log(err.response));
  },[]);

  const logOut = e => {
    e.preventDefault();
    localStorage.clear();
    props.history.push('/login');
  }

  return (
    <>
      <button onClick={logOut}>Logout</button>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
