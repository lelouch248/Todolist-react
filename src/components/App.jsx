import React, { useState } from "react";
import Heading from "./Heading";
import Todolist from "./Todolist";
import Form from "./Form";
function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
  }

  return (
    <div className="container">
      <Heading />
      <Form
        handleChange={handleChange}
        inputText={inputText}
        addItem={addItem}
      />
      <Todolist items={items} />
    </div>
  );
}

export default App;
