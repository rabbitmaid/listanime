"use client";
import { useState } from "react";
import Link from "next/link";
import InputLabel from "@/components/InputLabel";
import InputField from "@/components/InputField";
import { loginService } from "@/services/authService";

export default function LoginForm() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  function validate(name: string, value: string) {
    if (!value) return `The ${name} field is required`;
    return "";
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: validate(name, value),
    }));
  }

  async function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();

    const newErrors = {
      username: validate("username", form.username),
      password: validate("password", form.password),
    };

    setErrors(newErrors);

    const hasError = Object.values(newErrors).some(Boolean);
    if (hasError) return;

    try {
      setLoading(true);

      const username = form.username;
      const password = form.password;

      const data = await loginService({ username, password });

      localStorage.setItem("token", data.token);
      console.log("Logged In", data);

    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-w-md max-w-md mx-auto py-8 px-8 rounded-lg">
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

      <form className="space-y-5" onSubmit={handleSubmit}>

         

        <div>
          <InputLabel content="Username or Email" labelFor="username" />
          <InputField
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username or email"
            required={true}
            value={form.username}
            onChange={handleChange}
            hasError={errors.username ? true : false}
          />
        </div>

        {errors.username && <p className="mb-5 text-red-500">{errors.username}</p>}

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
            value={form.password}
            onChange={handleChange}
            hasError={errors.password ? true : false}
          />
        </div>

        {errors.password && <p className="mb-5 text-red-500">{errors.password}</p>}

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
          className="w-full rounded-lg bg-blue-500 py-2.5 cursor-pointer uppercase text-sm tracking-widest font-semibold transition hover:bg-blue-600 text-white flex items-center justify-center"
          disabled={loading}
        >
          {loading && (
            <svg
              className="mr-3 -ml-1 size-5 animate-spin text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          )}

          {loading ? "Loading..." : "Sign In"}
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
