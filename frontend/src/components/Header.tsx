import { useAppContext } from "../hooks/useAppContext";

export const Header = () => {
  const { totalPrice, cart } = useAppContext()

  return (
    <header className="flex container mx-auto items-center justify-between">
      <h2 className="text-red-400 text-4xl mb-5 p-3">Tienda</h2>
      <nav className="flex items-center space-x-7">
        <p>Total: ${totalPrice}</p>
        <div className="relative">
          <i className="bx bxs-shopping-bag text-[35px] text-rose-500"></i>
          <span className="absolute bg-emerald-500 text-white font-bold rounded-full text-sm w-5 h-5 text-center -left-1">
            {cart.length}
          </span>
        </div>
      </nav>
    </header>
  );
}