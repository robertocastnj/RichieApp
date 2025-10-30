import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  return (
    <div>
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <LoginForm />
      </main>
    </div>
  );
}
