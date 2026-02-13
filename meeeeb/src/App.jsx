import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { Routes, Route, Navigate } from "react-router-dom";
import { auth } from "./firebase";
import Login from "./Login.jsx";
import Home from "./Home.jsx";

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  if (loading) return <div style={{ padding: 16 }}>Loading…</div>;

  return (
    <Routes>
      <Route path="/login" element={!user ? <Login /> : <Navigate to="/" replace />} />
      <Route path="/" element={user ? <Home /> : <Navigate to="/login" replace />} />
    </Routes>
  );
}
