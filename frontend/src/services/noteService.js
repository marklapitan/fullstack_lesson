import axios from "axios";

const baseUrl = "/notes";
let token = null;

function setToken(newToken) {
  token = `Bearer ${newToken}`;
}

async function getNotes() {
  const config = {
    headers: { Authorization: token },
  };

  const response = await axios.get(baseUrl, config);
  return response.data;
}

async function createNote(newNote) {
  const config = {
    headers: { Authorization: token },
  };

  const response = await axios.post(baseUrl, newNote, config);
  return response.data;
}

export default {
  setToken,
  getNotes,
  createNote,
};
