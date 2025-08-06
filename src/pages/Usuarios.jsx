// src/pages/Usuarios.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "../layouts/AdminLayout";

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    async function carregarUsuarios() {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/usuarios`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUsuarios(res.data);
      } catch (err) {
        console.error("Erro ao carregar usuários:", err);
      }
    }

    carregarUsuarios();
  }, []);

  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold mb-6">Usuários Monitorados</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full text-sm text-gray-800">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 text-left">Nome</th>
              <th className="px-4 py-2 text-left">Telefone</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Última Verificação</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((u) => (
              <tr key={u.id} className="border-b">
                <td className="px-4 py-2">{u.nome}</td>
                <td className="px-4 py-2">{u.telefone}</td>
                <td className="px-4 py-2">{u.status}</td>
                <td className="px-4 py-2">
                  {u.ultimaVerificacao ? new Date(u.ultimaVerificacao).toLocaleString("pt-BR") : "-"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
