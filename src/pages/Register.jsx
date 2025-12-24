import { useState } from "react";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = () => {
    const user = { username, email, password };
    localStorage.setItem("user", JSON.stringify(user));
    alert("Registration successful!");
    window.location.href = "/";
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Register</h2>
        <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={registerUser}>Register</button>
      </div>
    </div>
  );
}

export default Register;
