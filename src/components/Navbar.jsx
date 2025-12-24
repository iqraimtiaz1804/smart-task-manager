function Navbar() {
  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <div className="card" style={{ display: "flex", justifyContent: "space-between" }}>
      <h2 style={{ color: "#6a11cb" }}>📝 Smart Task Manager</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Navbar;
