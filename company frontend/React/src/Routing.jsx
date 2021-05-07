// import axios from "axios";
import { useRef, useState } from "react";
import "./style.css";
const Routing = () => {
  const inputRef = useRef();
  const inputRef2 = useRef();
  const inputRef3 = useRef();
  const inputRef4 = useRef();
  const [error, setError] = useState("");
  const [box1, setBox1] = useState("");
  const [box2, setBox2] = useState("");
  const [box3, setBox3] = useState("");
  const [box4, setBox4] = useState("");

  const focusInput = (e) => {
    if (e.target.name === "box1") {
      if (e.target.value.length <= 4) {
        setBox1(e.target.value);
      }
      if (e.target.value.length >= 4) {
        inputRef2.current.focus();
      }
    }
    if (e.target.name === "box2") {
      if (e.target.value.length <= 4) {
        setBox2(e.target.value);
      }
      if (e.target.value.length >= 4) {
        inputRef3.current.focus();
      }
      if (e.target.value.length === 0) {
        inputRef.current.focus();
      }
    }
    if (e.target.name === "box3") {
      if (e.target.value.length <= 4) {
        setBox3(e.target.value);
      }
      if (e.target.value.length >= 4) {
        inputRef4.current.focus();
      }
      if (e.target.value.length === 0) {
        inputRef2.current.focus();
      }
    }
    if (e.target.name === "box4") {
      if (e.target.value.length <= 4) {
        setBox4(e.target.value);
      }
      if (e.target.value.length === 0) {
        inputRef3.current.focus();
      }
    }
  };
  const pasteInput = (e) => {
    e.preventDefault();
    var pastedText = undefined;
    if (window.clipboardData && window.clipboardData.getData) {
      pastedText = window.clipboardData.getData("Text");
      console.log("first");
      window.clipboardData.clearData();
    } else if (e.clipboardData && e.clipboardData.getData) {
      pastedText = e.clipboardData.getData("text/plain");
      console.log("second");
      e.clipboardData.clearData();
    }
    if (pastedText.length > 16) {
      console.log("third");
      setError("Length cannot be more than 16");
    } else {
      console.log("fourth");
      setBox1(pastedText.slice(0, 4));
      setBox2(pastedText.slice(4, 8));
      setBox3(pastedText.slice(8, 12));
      setBox4(pastedText.slice(12, 16));
      inputRef4.current.focus();
    }
  };
  const submitData = () => {
    // axios.post("url",data)
    // .then((res)=>console.log(res))
  };
  const deleteVal = () => {
    setBox1("");
    setBox2("");
    setBox3("");
    setBox4("");
    inputRef.current.focus();
  };
  return (
    <div className="conta">
      <h4>Card No:-</h4>
      <div className="inner">
        <input
          className="input1"
          value={box1}
          onPaste={pasteInput}
          onChange={focusInput}
          ref={inputRef}
          autoFocus
          type="number"
          name="box1"
          maxLength="4"
        />
        <input
          className="input2"
          value={box2}
          onChange={focusInput}
          ref={inputRef2}
          type="number"
          name="box2"
          maxLength="4"
        />
        <input
          className="input3"
          value={box3}
          onChange={focusInput}
          ref={inputRef3}
          type="number"
          name="box3"
          maxLength="4"
        />
        <input
          className="input4"
          value={box4}
          onChange={focusInput}
          ref={inputRef4}
          type="number"
          name="box4"
          maxLength="4"
        />
      </div>
      <div className="button">
        <button className="delete" onClick={deleteVal}>
          delete
        </button>
        <button onClick={submitData} className="submit">
          Submit
        </button>
      </div>
      <span>{error}</span>
    </div>
  );
};
export default Routing;
