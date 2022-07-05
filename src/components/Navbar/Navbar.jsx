import React from "react";

export default function Navbar() {
  return (
    <header>
      <NavLink to="/home">
        <li>
          <h1>Home</h1>
        </li>
      </NavLink>
      <nav>
        <ul>
          <div>
            <li>SOBRE MI </li>
            <NavLink to="/form">
              <li>Create</li>
            </NavLink>
            <li>Login</li>
            <li>Sing Up</li>
            <li>Connect Wallet</li>
          </div>
        </ul>
      </nav>
    </header>
  );
}
