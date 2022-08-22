import "./App.scss";
import Header from "./Components/Header";
import CreateArea from "./Components/CreateArea";
import { useState, useEffect } from "react";
import Note from "./Components/Note";
import Footer from "./Components/Footer";


const getLocalItems = () => {
  let result = localStorage.getItem("mynote");
  console.log(result)
}

function App() {
  const [notes, setNotes] = useState([]);
  const [items, setItems] = useState (getLocalItems())



  useEffect(() => {
    localStorage.setItem("mynote" , JSON.stringify(notes));
  }, [notes])
  


  function addNote(newNote) {
    
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });


  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="App">
      <Header />
      <CreateArea onAdd={addNote} />

      <div className="layout">
        {
        notes.map((noteItem, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
            />
          );
        })}
      </div>

      <Footer />
    </div>
  );
}

export default App;
