import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface User {
  username: string;
  password: string;
}

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [hoverEffect, setHoverEffect] = useState(false);
  const navigate = useNavigate();

  const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");
  const matchedUser = users.find((u) => u.username === username);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (matchedUser && matchedUser.password === password) {
      localStorage.setItem("currentUser", JSON.stringify(matchedUser));
      navigate("/welcome");
    } else {
      alert("Invalid credentials ");
    }
  };

  const isPasswordCorrect = matchedUser?.password === password;

  return (
    <form
      onSubmit={handleLogin}
      className='card p-4 shadow-sm mx-auto position-relative'
      style={{ maxWidth: "400px" }}
    >
      <h3 className='mb-3 text-center'>Login</h3>

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

      <div
        className={`position-relative`}
        onMouseEnter={() => {
          if (!isPasswordCorrect && username && password)
            setHoverEffect(!hoverEffect);
        }}
        style={{
          transition: "all 0.3s ease",
          transform:
            !isPasswordCorrect && username && password && hoverEffect
              ? "translateX(120px)"
              : "translateX(0)",
        }}
      >
        <button
          type='submit'
          className='btn btn-primary w-100'
          disabled={!isPasswordCorrect}
        >
          Login
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
