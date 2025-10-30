import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Sidebar() {
  const { user } = useAuth();
  const location = useLocation();

  const adminLinks = [
    { to: "/settings/account", label: "Mi cuenta" },
    { to: "/settings/users", label: "Gestión de usuarios" },
    { to: "/settings/products", label: "Gestión de productos" },
    { to: "/settings/reports", label: "Reportes" },
  ];

  const userLinks = [
    { to: "/settings/account", label: "Mi cuenta" },
  ];

  const links = user.role === "admin" ? adminLinks : userLinks;

  return (
    <aside className="w-64 bg-white shadow-md h-screen p-6 fixed left-0 top-0">
      <h2 className="text-2xl font-bold text-primary mb-6">Configuración</h2>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              className={`block px-3 py-2 rounded-md font-medium transition ${
                location.pathname === link.to
                  ? "bg-primary text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
