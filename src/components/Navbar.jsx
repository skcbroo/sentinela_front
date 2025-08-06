// src/components/Navbar.jsx
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav className="bg-blue-700 text-white px-6 py-4 shadow-md flex justify-between items-center">
      <div className="text-xl font-semibold tracking-wide">Painel Sentinela</div>
      <div className="space-x-4">
        <Link to="/admin" className="hover:underline">Dashboard</Link>
        <Link to="/admin/usuarios" className="hover:underline">Usuários</Link>
        <button onClick={logout} className="ml-4 bg-white text-blue-700 px-3 py-1 rounded hover:bg-gray-200">
          Sair
        </button>
      </div>
    </nav>
  );
}
