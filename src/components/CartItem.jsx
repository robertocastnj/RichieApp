export default function CartItem({ item }) {
  return (
    <div className="flex items-center justify-between border-b py-4">
      <div className="flex items-center gap-4">
        <img src={item.image} alt={item.title} className="w-16 h-16 rounded-md object-cover" />
        <div>
          <h3 className="font-semibold text-gray-800">{item.title}</h3>
          <p className="text-gray-500">{item.price}</p>
        </div>
      </div>
      <button className="text-red-500 hover:underline">Eliminar</button>
    </div>
  );
}
