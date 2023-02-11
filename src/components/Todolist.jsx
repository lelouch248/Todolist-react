import React, { useState } from "react";

function Todolist(props) {
  const [itemclick, setItemClick] = useState(false);
  function handleClick() {
    setItemClick(!itemclick);
  }
  return (
    <div>
      <ul>
        {props.items.map((todoitem) => (
          <li
            onClick={handleClick}
            style={{ textDecoration: itemclick ? "line-through" : "none" }}
          >
            {todoitem}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todolist;
