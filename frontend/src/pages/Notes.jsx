import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NotesList from "../components/NotesList";
import noteService from "../services/noteService";

function Notes({ user, setUser }) {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const noteObj = {
      content: newNote,
    };

    noteService.createNote(noteObj).then((res) => {
      setNotes(notes.concat(res));
      setNewNote("");
    });
  };

  const handleLogout = () => {
    window.localStorage.removeItem("loggedNotesUser");
    setUser(null);
  };

  return (
    <div className="flex flex-col justify-between p-2">
      <p className="flex items-center justify-between mb-4">
        {user?.name} is logged in{" "}
        <button
          onClick={handleLogout}
          className="bg-red-500 p-2 text-white font-bold"
        >
          Logout
        </button>
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <div>
          <input
            type="text"
            value={newNote}
            className="border-solid border-2 border-slate-500 p-2 w-full"
            onChange={(e) => setNewNote(e.target.value)}
          />
        </div>
        <button type="submit" className="bg-blue-500 p-2 text-white font-bold">
          Save
        </button>
      </form>
      {user && <NotesList notes={notes} setNotes={setNotes} />}
    </div>
  );
}

export default Notes;
