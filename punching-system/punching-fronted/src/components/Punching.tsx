import React, { useState } from "react";
import axios from "axios";

export default function Punching() {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  const handlePunch = async () => {
    if (!name.trim()) {
      setError("Enter name");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/punch", { name });
      setMsg(res.data.message || "Punch successful");
      setName("");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data?.message || "<>Something went wrong");
      } else {
        setError("Something went wrong");
      }
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>Punch System</h2>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Enter name'
        style={{ padding: "8px", width: "100%", marginBottom: "10px" }}
      />
      <button
        onClick={handlePunch}
        style={{ padding: "10px 20px", width: "100%" }}
      >
        Punch
      </button>
      {msg && <p style={{ marginTop: "10px", color: "green" }}>{msg}</p>}
      {error && <p style={{ marginTop: "10px", color: "red" }}>{error}</p>}
    </div>
  );
}
