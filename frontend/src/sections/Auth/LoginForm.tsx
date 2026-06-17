"use client";
import { useState } from "react";
import Link from "next/link";
import InputLabel from "@/components/InputLabel";
import InputField from "@/components/InputField";
import { seteuid } from "node:process";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-w-md max-w-md mx-auto border border-neutral-300 dark:border-neutral-800 py-8 px-8 rounded-lg">
      <Link
        href="/"
        className="font-bold text-3xl block w-fit mx-auto mb-5 bg-blue-500 text-white py-2 px-3 rounded-lg"
      >
        LISTANIME
      </Link>

      <h1 className="text-center font-semibold text-2xl mb-2">Welcome Back</h1>

      <p className="text-center text-gray-400 mb-8">
        Sign in to continue tracking your favorite anime.
      </p>

      <form className="space-y-5">
        <div>
          <InputLabel content="Username or Email" labelFor="username" />
          <InputField
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username or email"
            required={true}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <InputLabel content="Password" labelFor="password" />

            <Link
              href="/forgot-password"
              className="text-sm text-blue-500 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <InputField
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required={true}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="remember"
            name="remember"
            className="h-4 w-4"
          />
          <label htmlFor="remember" className="text-sm">
            Remember me
          </label>
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-blue-500 py-2.5 cursor-pointer uppercase text-sm tracking-widest font-semibold transition hover:bg-blue-600 text-white"
        >
          Sign In
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-gray-400">
        {`Don't have an account? `}
        <Link
          href="/register"
          className="font-medium text-blue-500 hover:underline"
        >
          Create account now
        </Link>
      </p>
    </div>
  );
}
