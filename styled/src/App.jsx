// import logo from './logo.svg';
import "./App.css";
import { StyleW } from "./components/StyleW";
import { useState } from "react";

function App() {
  const [sty1, setSty1] = useState(false);
  const [sty2, setSty2] = useState(false);
  const [sty3, setSty3] = useState(false);
  const [sty4, setSty4] = useState(false);
  const [sty5, setSty5] = useState(false);
  return (
    <div className="App">
      <StyleW
        sty1={sty1}
        onClick={() => {
          setSty1(sty1 === true ? false : true);
        }}
      >
        Primary Button
      </StyleW>
      <StyleW
        sty2={sty2}
        onClick={() => {
          setSty2(sty2 === true ? false : true);
        }}
      >
        Default Button
      </StyleW>
      <StyleW
        sty3={sty3}
        onClick={() => {
          setSty3(sty3 === true ? false : true);
        }}
      >
        Dashed Button
      </StyleW>
      <StyleW
        sty4={sty4}
        onClick={() => {
          setSty4(sty4 === true ? false : true);
        }}
      >
        Task Button
      </StyleW>
      <StyleW
        sty5={sty5}
        onClick={() => {
          setSty5(sty5 === true ? false : true);
        }}
      >
        Link Button
      </StyleW>
    </div>
  );
}

export default App;
