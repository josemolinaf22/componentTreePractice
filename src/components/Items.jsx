import React, { useState } from "react";

const Items = ({ toDoItem }) => {
  const [isDone, setIsDone] = useState(false);

  const handleClick = () => {
    setIsDone((prevValue) => {
      return !prevValue;
    });
  };

  return (
    <li
      style={{ textDecoration: isDone ? "line-through" : "none" }}
      onClick={handleClick}
    >
      {toDoItem}{" "}
    </li>
  );
};

export default Items;
