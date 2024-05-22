import React, { useState } from "react";
import "./listitem.css";

const ListItem = (props) => {
  const [remove, setRemove] = useState("");
  return (
    <div className="list-container">
      <div className="list-item">
        <p>{props.item1}</p>
        <div className="btn-btn">
          <button
            className="delete"
            onClick={(e) => {
              props.item4(props.item1);
            }}
          >
            {props.item2}
          </button>
          {/* {console.log(remove)} */}
          {/* {props.} */}
          <button className="edit">{props.item3}</button>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
