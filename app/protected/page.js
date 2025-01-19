// app/protected/page.js
import { useEffect, useState } from "react";
import { auth, firestore } from "../../firebaseConfig";

export default function ProtectedPage() {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        const userRef = firestore.collection("users").doc(user.uid);
        const userDoc = await userRef.get();
        setRole(userDoc.data().role);
      } else {
        window.location.href = "/auth/signin";
      }
    });

    return () => unsubscribe();
  }, []);

  if (!user) return <div>Loading...</div>;

  if (role !== "admin") return <div>You do not have access to this page.</div>;

  return <div>Admin Protected Content</div>;
}
