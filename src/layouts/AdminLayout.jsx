// src/layouts/AdminLayout.jsx
import Navbar from "../components/Navbar";

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="p-6 max-w-6xl mx-auto">{children}</main>
    </div>
  );
}
