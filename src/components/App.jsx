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

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
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
      <div>
        <ul>
          {items.map((todoitem, index) => (
            <Todolist
              key={index}
              id={index}
              text={todoitem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
