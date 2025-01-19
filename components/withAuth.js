// components/withAuth.js
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { auth } from "../firebaseConfig";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (user) {
          setUser(user);
        } else {
          router.push("/auth/signin"); // Redirect to login page if not authenticated
        }
      });

      return () => unsubscribe();
    }, [router]);

    if (!user) {
      return <div>Loading...</div>; // Show a loading state while checking auth
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
