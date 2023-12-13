import axios from "axios";

const baseUrl = "/notes";

async function getNotes() {
  const res = await axios.get(baseUrl);
  return res.data;
}

async function addNote(noteObject) {
  const res = await axios.post(baseUrl, noteObject);

  return res.data;
}

async function deleteNote(id) {
  const res = await axios.delete(`${baseUrl}/${id}`);

  return res;
}

async function updateNote(id, updatedNote) {
  const res = await axios.put(`${baseUrl}/${id}`, updatedNote);
  return res.data;
}

export default {
  getNotes,
  addNote,
  deleteNote,
  updateNote,
};
