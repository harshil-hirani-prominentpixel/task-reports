import { useState } from "react";

interface User {
  username: string;
  password: string;
}

function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");
    const newUser: User = { username, password };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("User registered successfully!");
    setUsername("");
    setPassword("");
  };

  return (
    <form
      onSubmit={handleRegister}
      className='card p-4 shadow-sm mx-auto'
      style={{ maxWidth: "400px" }}
    >
      <h3 className='mb-3 text-center'>Register</h3>

      <div className='mb-3'>
        <input
          type='text'
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className='form-control'
        />
      </div>

      <div className='mb-3'>
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className='form-control'
        />
      </div>

      <button type='submit' className='btn btn-success w-100'>
        Register
      </button>
    </form>
  );
}

export default RegisterForm;
