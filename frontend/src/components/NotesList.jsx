import { useEffect } from "react";
import noteService from "../services/noteService";

function NotesList({ notes, setNotes }) {
  useEffect(() => {
    noteService.getNotes().then((res) => {
      setNotes(res);
    });
  }, []);

  return (
    <ul className="my-4 flex flex-col gap-2">
      {notes.map((note) => (
        <li key={note.id}>• {note.content}</li>
      ))}
    </ul>
  );
}

export default NotesList;
