import { useEffect, useState } from "react";
import { getCart, saveCart } from "../utils/cart";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setCart(getCart());
  }, []);

  const updateQuantity = (index, amount) => {
    const updated = [...cart];
    updated[index].quantity += amount;

    if (updated[index].quantity <= 0) {
      updated.splice(index, 1);
    }

    saveCart(updated);
    setCart(updated);
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white p-10">
      <h1 className="text-4xl font-bold mb-8">Your Cart</h1>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          {cart.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 flex justify-between items-center"
            >
              <div>
                <h3 className="text-xl font-semibold">
                  {item.flavour_name}
                </h3>
                <p className="text-gray-300">{item.size}</p>
                <p className="mt-2">
                  ${item.price} × {item.quantity}
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => updateQuantity(index, -1)}
                  className="bg-white/20 px-3 rounded-lg"
                >
                  -
                </button>
                <button
                  onClick={() => updateQuantity(index, 1)}
                  className="bg-white/20 px-3 rounded-lg"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 h-fit">
          <h2 className="text-2xl font-bold mb-4">Summary</h2>
          <p className="text-xl mb-6">Total: ${total.toFixed(2)}</p>

          <button
            onClick={() => navigate("/checkout")}
            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl py-3 font-semibold hover:scale-105 transition"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;