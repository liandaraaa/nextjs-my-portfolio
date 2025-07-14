export function BackgroundDecorative() {
  return (
    <div className="absolute inset-0 pointer-events-none">
    {/* Hand shape */}
    <div
      className="absolute top-20 left-10 w-20 h-24 bg-orange-400 opacity-20 transform rotate-12"
      style={{ clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)" }}
    ></div>

    {/* Citrus slice */}
    <div className="absolute top-16 right-20 w-16 h-16 bg-orange-300 rounded-full opacity-30 relative">
      <div className="absolute inset-2 border-2 border-white rounded-full"></div>
      <div className="absolute top-1/2 left-1/2 w-1 h-6 bg-white transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/2 w-6 h-1 bg-white transform -translate-x-1/2 -translate-y-1/2"></div>
    </div>

    {/* Cupcake shape */}
    <div className="absolute bottom-40 left-20 w-12 h-16 bg-orange-200 opacity-25">
      <div className="w-full h-10 bg-orange-300 rounded-t-full"></div>
      <div className="w-full h-6 bg-orange-200 trapezoid"></div>
    </div>

    {/* Abstract shapes */}
    <div className="absolute bottom-20 right-10 w-14 h-14 bg-orange-400 transform rotate-12 opacity-20 rounded-lg"></div>
    <div className="absolute top-60 left-1/4 w-8 h-8 bg-orange-500 rounded-full opacity-15"></div>
    <div className="absolute top-32 right-1/3 w-10 h-10 bg-orange-300 transform rotate-45 opacity-25"></div>
    <div className="absolute bottom-60 right-1/4 w-6 h-12 bg-orange-400 opacity-20 rounded-full"></div>
    <div className="absolute top-80 left-1/3 w-12 h-6 bg-orange-300 opacity-25 rounded-full"></div>
  </div>
  );
}