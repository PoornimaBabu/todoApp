import React, { useState } from "react";

function Note(props) {
  const [note, setNote] = useState({
    title: props.title,
    content: props.content
  });
  //const [contentArr, setContentArr] = useState([]);

  function handleChange(event) {
    setNote(event.target.value);
  }
  function handleDelete() {
    props.onDelete(props.id);
  }

  return (
    <div className="card">
      <input name="title" value={note.title} onChange={handleChange} />
      <textarea name="content" value={note.content} onChange={handleChange} />
      <button onClick={handleDelete}>DELETE</button>
    </div>
  );
}

export default Note;
