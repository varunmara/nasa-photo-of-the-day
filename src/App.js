import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header";
import PhotoFrame from "./components/photoframe";
import Footer from "./components/footer";

function App() {
  const [photo, setPhoto] = useState("");
  const [count, setCount] = useState(0);
  useEffect(() => {
    const fetchData = () => {
      fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setPhoto(data);
        });
    };
    fetchData();
  }, [count]);
  return (
    <div className="App">
      <Header></Header>
      <h1>{count}</h1>
      <PhotoFrame photo={photo}></PhotoFrame>
      <button onClick={e => setCount(count + 1)}>Next</button>
      <Footer></Footer>
    </div>
  );
}

export default App;
