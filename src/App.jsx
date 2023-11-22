import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainContainer from "./components/MainContainer";
import SearchField from "./components/SearchField";
import "ui-neumorphism/dist/index.css";
import Lottie from "lottie-react";

function App() {
  const [animationData, setAnimationData] = useState(null);
  const [animationData2, setAnimationData2] = useState(null);

  useEffect(() => {
    fetch(
      "https://lottie.host/891e604d-3c36-44a2-b921-627bd9e4ce7f/uhvV3iPiwW.json"
    )
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.log("WHAT HAPPENED????"));
  }, []);

  useEffect(() => {
    fetch(
      "https://lottie.host/1c41a6fb-40d1-47d0-839f-53fb7a2a8c51/713gvZWla4.json"
    )
      .then((res) => res.json())
      .then((data) => setAnimationData2(data))
      .catch((err) => console.log("WHAT HAPPENED????"));
  }, []);

  return (
    <>
      <Lottie
        animationData={animationData}
        style={{
          width: "120px",
          marginRight: "300px",
          position: "absolute",
          zIndex: "1000",
        }}
      />
      {/* <Lottie
        animationData={animationData2}
        style={{ position: "absolute", zIndex: "1000" }}
      /> */}
      <MainContainer
        animationData2={animationData2}
        animationData={animationData}
      />
    </>
  );
}

export default App;
