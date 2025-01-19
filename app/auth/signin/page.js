"use client";
// app/auth/signin/page.js
import { auth, googleProvider, firestore } from "../../../firebaseConfig";
import { useEffect } from "react";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";

const adminEmail = "tasnimul.haque6@gmail.com"; // Replace with the actual admin email

export default function SignIn() {
  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, googleProvider);
    handleUserRoles(result.user);
  };

  const signInWithEmail = async (email, password) => {
    const result = await signInWithEmailAndPassword(auth, email, password);
    handleUserRoles(result.user);
  };

  const handleUserRoles = async (user) => {
    const userRef = doc(firestore, "users", user.uid);
    const userDoc = await getDoc(userRef);

    if (!userDoc.exists()) {
      const role = user.email === adminEmail ? "admin" : "viewer";
      await setDoc(userRef, {
        email: user.email,
        role: role,
      });
    }
  };

  const handleEmailSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmail(email, password);
  };

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        handleUserRoles(user);
      }
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Sign In</h2>
        <button
          onClick={signInWithGoogle}
          className="bg-blue-600 hover:bg-blue-600 text-white font-medium p-0.5 rounded w-fit mb-4 text-sm flex items-center justify-start gap-2 pr-3"
        >
          <Image
            src={`/Google_G_Logo.webp`}
            className="size-8 bg-white p-2 rounded-sm"
            width={100}
            height={200}
            alt="Sign in with google"
          ></Image>
          Sign in with Google
        </button>
        <form onSubmit={handleEmailSignIn} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="mt-1 px-2 py-1  block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Email address"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              required
              className="mt-1 px-2 py-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Password"
            />
          </div>
          <div className="items-top flex space-x-2">
            <Checkbox id="terms1" />
            <div className="grid gap-1 leading-none">
              <label
                htmlFor="terms1"
                className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Accept terms and conditions
              </label>
              <p className="text-xs text-muted-foreground">
                You agree to our Terms of Service and Privacy Policy.
              </p>
            </div>
          </div>
          <button
            type="submit"
            className="bg-green-800 hover:bg-themeColor text-white font-medium py-2 px-4 rounded w-full text-sm"
          >
            Sign in with Email
          </button>
        </form>
      </div>
    </div>
  );
}
