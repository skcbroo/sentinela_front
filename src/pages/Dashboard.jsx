// src/layouts/AdminLayout.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLayout({ children }) {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token || role !== "admin") {
      navigate("/");
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E2E8F0] via-[#CBD5E1] to-[#94A3B8]">
      {/* NAVBAR */}
      <nav className="bg-white shadow-md px-6 py-4 fixed top-0 w-full z-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-800 select-none">Sentinela Admin</h1>
          <button
            className="text-sm bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-700 transition"
            onClick={() => {
              localStorage.clear();
              navigate("/");
            }}
          >
            Sair
          </button>
        </div>
      </nav>

      {/* CONTEÚDO */}
      <main className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow p-6">{children}</div>
      </main>
    </div>
  );
}
