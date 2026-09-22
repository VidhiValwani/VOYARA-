import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <main className="min-h-screen bg-[#F7F9F6] px-6 pb-20 pt-32">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-[2rem] bg-white p-8 shadow-[0_20px_60px_rgba(62,77,58,0.08)]">
          <p className="text-sm uppercase tracking-[0.25em] text-[#6B8E60]">
            My Profile
          </p>

          <h1 className="mt-3 text-4xl font-semibold text-[#3E4D3A]">
            Welcome, {user?.name || "Traveler"}!
          </h1>

          <div className="mt-8 space-y-4">
            <div>
              <p className="text-sm text-[#6B8E60]">Full Name</p>
              <p className="text-lg font-medium text-[#3E4D3A]">
                {user?.name || "Not available"}
              </p>
            </div>

            <div>
              <p className="text-sm text-[#6B8E60]">Email</p>
              <p className="text-lg font-medium text-[#3E4D3A]">
                {user?.email || "Not available"}
              </p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="mt-8 rounded-full bg-[#3E4D3A] px-7 py-3 font-medium text-white transition hover:bg-[#6B8E60]"
          >
            Logout
          </button>
        </div>
      </div>
    </main>
  );
}

export default Profile;
