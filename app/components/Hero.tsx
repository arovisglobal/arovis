export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 py-24 md:py-40 overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-200 opacity-20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 opacity-20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Accelerate <span className="bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">Your Growth</span>!
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-4 leading-relaxed">
            Seamless Digital Connections: AI-Driven Marketing, Data Intelligence & Premium Traffic
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <button className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-8 py-4 rounded-full hover:shadow-lg transition-all text-lg font-semibold">
              Advertiser
            </button>
            <button className="bg-white text-purple-600 border-2 border-purple-600 px-8 py-4 rounded-full hover:bg-purple-50 transition-all text-lg font-semibold">
              Publisher
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
