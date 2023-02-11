import React from "react";

function Form(props) {
  return (
    <div className="form">
      <input
        onChange={props.handleChange}
        type="text"
        value={props.inputText}
      />
      <button onClick={props.addItem} type="submit">
        <span>Add</span>
      </button>
    </div>
  );
}

export default Form;
