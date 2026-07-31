const Card = ({ title, children }) => {
  return (
    <div className="bg-slate-800 rounded-2xl shadow-lg p-5 border border-slate-700 hover:border-cyan-400 transition-all duration-300">
      {title && (
        <h2 className="text-lg font-semibold text-cyan-300 mb-4">
          {title}
        </h2>
      )}

      {children}
    </div>
  );
};

export default Card;