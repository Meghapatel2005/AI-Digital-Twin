const Card = ({ title, children }) => {
  return (
    <div
      className="
        bg-slate-800/80
        backdrop-blur-md
        rounded-2xl
        p-5
        border border-slate-700
        shadow-xl
        transition-all
        duration-300
        hover:scale-[1.03]
        hover:-translate-y-1
        hover:border-cyan-400
        hover:shadow-cyan-500/20
      "
    >
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