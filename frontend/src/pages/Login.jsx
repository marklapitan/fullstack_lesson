import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import userService from "../services/userService";
import noteService from "../services/noteService";

function Login({ user, setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();

    const credentials = {
      username,
      password,
    };

    userService.login(credentials).then((res) => {
      window.localStorage.setItem("loggedNotesUser", JSON.stringify(res));
      setUser(res);
      noteService.setToken(res.token);
      navigate("/");
      setUsername("");
      setPassword("");
    });
  };

  return (
    <div className="flex flex-col h-screen p-4">
      <h1 className="text-4xl mb-4 text-center font-bold">
        Login your account
      </h1>
      <div>
        <form
          onSubmit={handleLogin}
          className="m-4 p-4 flex flex-col gap-2 border-solid border-2 border-slate-500"
        >
          <div className="flex flex-col">
            Username{" "}
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border-solid border-2 border-slate-500 p-2"
            />
          </div>
          <div className="flex flex-col">
            Password{" "}
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-solid border-2 border-slate-500 p-2"
            />
          </div>
          <button
            type="submit"
            className="bg-slate-500 p-2 mt-2 text-white font-bold"
          >
            Login{" "}
          </button>
        </form>
      </div>
      <p className="text-center">
        Do not have an account?{" "}
        <Link to="/register" className="text-blue-500">
          Register here.
        </Link>
      </p>
    </div>
  );
}

export default Login;
