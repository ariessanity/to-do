import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import "../Styles/Note.scss";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1 className="note__title">{props.title}</h1>
      <p className="note__content">{props.content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
