import React, { useState } from "react";

const TextArea = () => {
  const [text, setText] = useState("enter text hear");
  const handelClick = () => {
    setText(text.toUpperCase());
  };
   
  return (
    <div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      </div>
      <button type="button" class="btn btn-primary" onClick={handelClick}>
        convert to uppercase
      </button>
    </div>
  );
};

export default TextArea;
