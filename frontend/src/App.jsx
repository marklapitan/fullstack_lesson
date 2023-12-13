import "./App.css";
import { Routes, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { useState, useEffect } from "react";
import noteService from "./services/noteService";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedNotesUser");

    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      noteService.setToken(user.token);
      setUser(user);
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Notes user={user} setUser={setUser} />} />
      <Route path="/register" element={<Register user={user} />} />
      <Route path="/login" element={<Login user={user} setUser={setUser} />} />
    </Routes>
  );
}

export default App;
