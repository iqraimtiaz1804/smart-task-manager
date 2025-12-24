import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("No user found. Please register first.");
      return;
    }

    if (user.email === email && user.password === password) {
      localStorage.setItem("loggedIn", "true");
      window.location.href = "/dashboard";
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Login</h2>
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={loginUser}>Login</button>
        <p>New user? <a href="/register">Register</a></p>
      </div>
    </div>
  );
}

export default Login;
