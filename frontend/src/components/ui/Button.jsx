const Button = ({ children }) => {
  return (
    <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2 rounded-lg transition-all duration-300">
      {children}
    </button>
  );
};

export default Button;