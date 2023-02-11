import React from "react";

function Todolist(props) {
  return (
    <div>
      <ul>
        {props.items.map((todoitem) => (
          <li>{todoitem}</li>
        ))}
      </ul>
    </div>
  );
}

export default Todolist;
