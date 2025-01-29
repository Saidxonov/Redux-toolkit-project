import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../store/todoSlice";
import { useState } from "react";
import { Toaster, toast } from "sonner";

const CartComponent = () => {
  const [todo, setTodo] = useState("");
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const notify = () => {
    toast.success("Todo has been created successfully");
  };

  const deleted = () => {
    toast.error("Todo has been deleted successfully");
  };

  const valiadationTodo = () => {
    toast.warning("Text must have 5 symbols or more!");
  };

  const handleAddItem = () => {
    if (todo.length < 5) {
      valiadationTodo();
      return;
    }
    const newItem = { id: Date.now(), name: todo };
    dispatch(addToCart(newItem));
    setTodo("");
    notify();
  };

  return (
    <div className="bg-[#693F26] rounded-md w-[350px] ml-[400px] mt-[50px] p-[10px]">
      <Toaster position="top-right" expand={false} richColors />
      <h2 className="text-white text-4xl text-center mb-[30px]">To Do</h2>
      <input
        placeholder="Enter your todo..."
        className="bg-transparent placeholder:text-gray-400 focus:outline-0 border-2 border-gray-500 w-full pl-[10px] text-2xl text-white mb-[30px] h-[50px]"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        type="text"
      />
      <button
        onClick={handleAddItem}
        className="px-4 py-2 bg-[#D5C2A4] text-white rounded-md cursor-pointer"
      >
        Add to Cart
      </button>

      <ul className="mt-4 space-y-2">
        {cart.length > 0 ? (
          cart.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center p-2 bg-white rounded-md shadow"
            >
              <p className="text-2xl truncate">{item.name}</p>
              <button
                className="cursor-pointer"
                onClick={() => {
                  dispatch(removeFromCart(item.id)), deleted();
                }}
              >
                ❌
              </button>
            </li>
          ))
        ) : (
          <p className="text-center text-2xl text-white">No Todos added yet</p>
        )}
      </ul>
    </div>
  );
};

export default CartComponent;
