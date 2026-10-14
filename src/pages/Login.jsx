import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
  e.preventDefault();

  setError("");
  setLoading(true);

  try {
    const response = await fetch("https://voyara-backend-bvcf.onrender.com/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || data.errors?.[0]?.msg || "Login failed"
      );
    }

    // Store JWT token
    localStorage.setItem("token", data.token);

    // Store logged-in user
    localStorage.setItem("user", JSON.stringify(data.user));

    alert("Login successful!");

    navigate("/profile");
    window.location.reload();
  } catch (error) {
    setError(error.message);
  } finally {
    setLoading(false);
  }
};

  return (
    <main className="min-h-screen bg-[#F7F9F6] px-6 pb-20 pt-32 lg:px-10 lg:pb-28 lg:pt-40">
      <div className="mx-auto flex min-h-[70vh] max-w-7xl items-center justify-center">

        <div className="grid w-full max-w-5xl overflow-hidden rounded-[2.5rem] bg-white shadow-[0_20px_60px_rgba(62,77,58,0.08)] md:grid-cols-2">

          {/* Left Side */}
          <div className="hidden bg-[#3E4D3A] p-10 text-white md:flex md:flex-col md:justify-between lg:p-14">

            <div>
              <p className="text-2xl font-semibold tracking-[0.25em]">
                VOYARA
              </p>

              <p className="mt-16 text-xs uppercase tracking-[0.3em] text-[#D9E6F2]/70">
                Welcome back
              </p>

              <h1 className="mt-5 text-4xl font-semibold leading-tight lg:text-5xl">
                Your next
                <br />
                journey awaits.
              </h1>

              <p className="mt-6 max-w-sm text-sm leading-7 text-[#F7F9F6]/75">
                Sign in to continue planning trips, discovering destinations
                and saving experiences you love.
              </p>
            </div>

            <p className="text-sm text-[#D9E6F2]/60">
              Travel thoughtfully. Discover differently.
            </p>

          </div>

          {/* Login Form */}
          <div className="p-7 sm:p-10 lg:p-14">

            <div className="mb-10">

              <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#6B8E60]">
                Sign in
              </p>

              <h2 className="mt-3 text-3xl font-semibold text-[#3E4D3A]">
                Welcome back.
              </h2>

              <p className="mt-3 text-sm leading-6 text-[#6B8E60]">
                Enter your details to continue your journey.
              </p>

            </div>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Email */}
              <div>
                <label className="text-sm font-medium text-[#3E4D3A]">
                  Email address
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-2 w-full rounded-2xl border border-[#A8C5B0] bg-[#F7F9F6] px-5 py-3.5 text-sm text-[#3E4D3A] outline-none transition placeholder:text-[#6B8E60]/60 focus:border-[#6B8E60] focus:ring-2 focus:ring-[#6B8E60]/10"
                />
              </div>

              {/* Password */}
              <div>

                <div className="flex items-center justify-between">

                  <label className="text-sm font-medium text-[#3E4D3A]">
                    Password
                  </label>

                  <button
                    type="button"
                    className="text-xs font-medium text-[#6B8E60] transition hover:text-[#3E4D3A]"
                  >
                    Forgot password?
                  </button>

                </div>

                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="mt-2 w-full rounded-2xl border border-[#A8C5B0] bg-[#F7F9F6] px-5 py-3.5 text-sm text-[#3E4D3A] outline-none transition placeholder:text-[#6B8E60]/60 focus:border-[#6B8E60] focus:ring-2 focus:ring-[#6B8E60]/10"
                />

              </div>

              {/* Error */}
              {error && (
                <p className="text-sm text-red-600">
                  {error}
                </p>
              )}

              {/* Login Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-[#3E4D3A] px-7 py-3.5 font-medium text-white transition hover:bg-[#6B8E60] disabled:opacity-60"
              >
                {loading ? "Signing in..." : "Sign In →"}
              </button>

            </form>

            {/* Sign Up */}
            <p className="mt-8 text-center text-sm text-[#6B8E60]">
              Don't have an account?{" "}

              <Link
                to="/signup"
                className="font-medium text-[#3E4D3A] transition hover:text-[#6B8E60]"
              >
                Create one
              </Link>

            </p>

          </div>

        </div>

      </div>
    </main>
  );
}

export default Login;