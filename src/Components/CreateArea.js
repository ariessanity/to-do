import { Fab } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import "../Styles/CreateArea.scss";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  
  
  

  function handleChange(e) {
    const { name, value } = e.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(e) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });

    e.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="form">
        {isExpanded && (
          <input
            className="form__input"
            type="text"
            name="title"
            placeholder="Title"
            onChange={handleChange}
            value={note.title}
          />
        )}

        <textarea
          className="form__text-area"
          name="content"
          onChange={handleChange}
          onClick={expand}
          value={note.content}
          rows={isExpanded ? 3 : 1}
          placeholder="Take a note . . ."
        ></textarea>

        <Fab onClick={submitNote} className="form__fab">
          <AddIcon className="form__add-icon" />
        </Fab>
      </form>
    </div>
  );
}

export default CreateArea;
