import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input onChange={props.forChange} type="text" value={props.inputText} />
      <button onClick={props.addingItem}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
