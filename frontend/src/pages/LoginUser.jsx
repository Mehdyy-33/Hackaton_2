import React, { useState } from "react";
import "../styles/connexion.css";

function LoginUser() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  console.warn(email, password, "email, password");
  const handleSubmit = () => {};

  return (
    <div className="connexionUser">
      <h1>Sign in</h1>
      <form
        name="connexion"
        method="post"
        className="connexion-form"
        onSubmit={handleSubmit}
      >
        <div className="connexion-input">
          <label htmlFor="Email">Email address</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="test@blabla.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="connexion-input">
          <label htmlFor="Mot de passe">Password</label>
          <input
            type="password"
            name="Mot de passe"
            placeholder="***********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="forget-password">
            <a href="/connexionCandidat">Can't connect ?</a>
          </div>
        </div>
        <div className="connexion-button">
          <button className="uppercase" type="submit">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginUser;
