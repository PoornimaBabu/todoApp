import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  //const [contentArr, setContentArr] = useState([]);

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function handleClick(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div className="card">
      <input
        name="title"
        value={note.title}
        placeholder="Card Title"
        onChange={handleChange}
      />
      <textarea
        name="content"
        value={note.content}
        placeholder="card Description"
        rows="3"
        onChange={handleChange}
      />
      <button onClick={handleClick}>Add</button>
    </div>
  );
}

export default CreateArea;
