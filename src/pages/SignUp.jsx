import { Link } from "react-router-dom";

function SignUp() {
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
                Start exploring
              </p>

              <h1 className="mt-5 text-4xl font-semibold leading-tight lg:text-5xl">
                Your next
                <br />
                story starts here.
              </h1>

              <p className="mt-6 max-w-sm text-sm leading-7 text-[#F7F9F6]/75">
                Create your VOYARA account and start discovering places and
                experiences worth travelling for.
              </p>

            </div>

            <p className="text-sm text-[#D9E6F2]/60">
              Travel thoughtfully. Discover differently.
            </p>

          </div>

          {/* Sign Up Form */}
          <div className="p-7 sm:p-10 lg:p-14">

            <div className="mb-8">

              <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#6B8E60]">
                Create account
              </p>

              <h2 className="mt-3 text-3xl font-semibold text-[#3E4D3A]">
                Join VOYARA.
              </h2>

              <p className="mt-3 text-sm leading-6 text-[#6B8E60]">
                Create an account and start planning your next journey.
              </p>

            </div>

            <form className="space-y-5">

              {/* Name */}
              <div>

                <label className="text-sm font-medium text-[#3E4D3A]">
                  Full name
                </label>

                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-2xl border border-[#A8C5B0] bg-[#F7F9F6] px-5 py-3.5 text-sm text-[#3E4D3A] outline-none transition placeholder:text-[#6B8E60]/60 focus:border-[#6B8E60] focus:ring-2 focus:ring-[#6B8E60]/10"
                />

              </div>

              {/* Email */}
              <div>

                <label className="text-sm font-medium text-[#3E4D3A]">
                  Email address
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-2xl border border-[#A8C5B0] bg-[#F7F9F6] px-5 py-3.5 text-sm text-[#3E4D3A] outline-none transition placeholder:text-[#6B8E60]/60 focus:border-[#6B8E60] focus:ring-2 focus:ring-[#6B8E60]/10"
                />

              </div>

              {/* Password */}
              <div>

                <label className="text-sm font-medium text-[#3E4D3A]">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Create a password"
                  className="mt-2 w-full rounded-2xl border border-[#A8C5B0] bg-[#F7F9F6] px-5 py-3.5 text-sm text-[#3E4D3A] outline-none transition placeholder:text-[#6B8E60]/60 focus:border-[#6B8E60] focus:ring-2 focus:ring-[#6B8E60]/10"
                />

              </div>

              {/* Confirm Password */}
              <div>

                <label className="text-sm font-medium text-[#3E4D3A]">
                  Confirm password
                </label>

                <input
                  type="password"
                  placeholder="Confirm your password"
                  className="mt-2 w-full rounded-2xl border border-[#A8C5B0] bg-[#F7F9F6] px-5 py-3.5 text-sm text-[#3E4D3A] outline-none transition placeholder:text-[#6B8E60]/60 focus:border-[#6B8E60] focus:ring-2 focus:ring-[#6B8E60]/10"
                />

              </div>

              {/* Sign Up */}
              <button
                type="submit"
                className="w-full rounded-full bg-[#3E4D3A] px-7 py-3.5 font-medium text-white transition hover:bg-[#6B8E60]"
              >
                Create Account →
              </button>

            </form>

            {/* Login */}
            <p className="mt-7 text-center text-sm text-[#6B8E60]">

              Already have an account?{" "}

              <Link
                to="/login"
                className="font-medium text-[#3E4D3A] transition hover:text-[#6B8E60]"
              >
                Sign in
              </Link>

            </p>

          </div>

        </div>

      </div>
    </main>
  );
}

export default SignUp;