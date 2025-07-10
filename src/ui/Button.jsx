/* eslint-disable react/prop-types */
function Button({ isSubmitting }) {
  return (
    <button
      className="bg-yellow-400 font-semibold text-stone-800 py-3 px-4 inline-block tracking-wide rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed"
      disabled={isSubmitting}
    >
      {isSubmitting ? "Placing Orders..." : "Order Now"}
    </button>
  );
}

export default Button;
