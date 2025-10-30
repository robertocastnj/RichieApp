import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartItem from "../components/CartItem";

const cartItems = [
  { id: 1, title: "Camiseta Minimalista", price: "$299 MXN", image: "/images/products/tshirt.jpg" },
  { id: 2, title: "Taza Artística", price: "$149 MXN", image: "/images/products/mug.jpg" },
];

export default function CartPage() {
  const total = cartItems.reduce((acc, item) => acc + parseInt(item.price), 0);

  return (
    <div>
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Tu carrito</h2>

        <div className="bg-white shadow-md rounded-lg p-6">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}

          <div className="flex justify-between mt-6 border-t pt-4">
            <span className="text-xl font-semibold">Total</span>
            <span className="text-xl font-semibold text-primary">${total} MXN</span>
          </div>

          <button className="mt-6 w-full bg-primary text-white py-3 rounded-md font-semibold hover:bg-rose-600 transition">
            Proceder al pago
          </button>
        </div>
      </main>
    </div>
  );
}
