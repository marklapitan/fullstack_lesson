import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import userService from "../services/userService";

function Register({ user }) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleRegistration = (e) => {
    e.preventDefault();

    const credentials = {
      name,
      username,
      password,
    };

    userService.register(credentials).then((_) => {
      navigate("/login");
      setName("");
      setUsername("");
      setPassword("");
    });
  };

  return (
    <div className="flex flex-col h-screen p-4">
      <h1 className="text-4xl mb-4 text-center font-bold">
        Register an account
      </h1>
      <div>
        <form
          onSubmit={handleRegistration}
          className="m-4 p-4 flex flex-col gap-2 border-solid border-2 border-slate-500"
        >
          <div className="flex flex-col">
            Name{" "}
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-solid border-2 border-slate-500 p-2"
            />
          </div>
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
            Register
          </button>
        </form>
      </div>
      <p className="text-center">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-500">
          Login here.
        </Link>
      </p>
    </div>
  );
}

export default Register;
