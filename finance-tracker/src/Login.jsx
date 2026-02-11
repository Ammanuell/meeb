import { useState } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState("login"); // "login" | "signup"
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setError("");

    try {
      if (mode === "login") {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
    } catch (err) {
      setError(err?.message ?? "Failed");
    }
  }

  return (
    <div style={{ maxWidth: 420, margin: "40px auto", padding: 16 }}>
      <h1>{mode === "login" ? "Sign in" : "Create account"}</h1>

      <form onSubmit={onSubmit} style={{ display: "grid", gap: 12 }}>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
        />
        <input
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          required
        />
        <button type="submit">
          {mode === "login" ? "Sign in" : "Sign up"}
        </button>
        {error ? <div style={{ color: "crimson" }}>{error}</div> : null}
      </form>

      <div style={{ marginTop: 12 }}>
        {mode === "login" ? (
          <button onClick={() => setMode("signup")}>Need an account? Sign up</button>
        ) : (
          <button onClick={() => setMode("login")}>Have an account? Sign in</button>
        )}
      </div>
    </div>
  );
}
