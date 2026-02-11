import { signOut } from "firebase/auth";
import { auth } from "./firebase";

export default function Home() {
  const user = auth.currentUser;

  return (
    <div style={{ maxWidth: 700, margin: "40px auto", padding: 16 }}>
      <h1>Shared Spending</h1>
      <p>Signed in as: {user?.email}</p>
      <button onClick={() => signOut(auth)}>Sign out</button>
    </div>
  );
}
