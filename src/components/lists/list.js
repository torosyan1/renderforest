import React, { useState } from "react";
import "./list-style.css";

const List = () => {
  const [list, setList] = useState([{ index: 0, value: "" }]);

  const handleChange = (e, index) => {
    list[index].value = e;
    let filted = list.filter((el) => el.value !== "");

    setList([...filted, { index: index + 1, value: "" }]);

    if (list[list.length - 1].value) {
      setList([...list, { index: index + 1, value: "" }]);
    }
  };

  return (
    <div className="container-list">
      {list.map((el, index) => {
        return (
          <div className="list-items">
            <p className="item-number">{index + 1}</p>
            <input
              key={index}
              value={el.value}
              onChange={(e) => handleChange(e.target.value, index)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default List;
