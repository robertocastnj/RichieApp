import Sidebar from "../components/Sidebar";
import AccountForm from "../components/AccountForm";
import AdminSettings from "../components/AdminSettings";
import { useAuth } from "../context/AuthContext";

export default function SettingsPage() {
  const { user } = useAuth();

  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 ml-64 p-10 bg-gray-50 min-h-screen">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Bienvenido, {user.name}
        </h2>

        {user.role === "admin" ? <AdminSettings /> : <AccountForm />}
      </main>
    </div>
  );
}
