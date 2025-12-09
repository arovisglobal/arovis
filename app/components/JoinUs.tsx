export default function JoinUs() {
  return (
    <section className="bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex items-center justify-center">
            <div className="w-full h-64 md:h-80 bg-gradient-to-br from-purple-200 to-blue-200 rounded-2xl flex items-center justify-center">
              <img
                src="https://images.pexels.com/photos/3862635/pexels-photo-3862635.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Join Us"
                className="w-full h-full object-cover rounded-2xl opacity-80"
              />
            </div>
          </div>

          <div>
            <h2 className="text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">Join Us</span>
              <span className="text-gray-900"> on Your Journey </span>
              <span className="bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">to Success</span>
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Whether you're a start-up looking to make a mark or an established business aiming for unprecedented growth, Arovis is here to be your partner in success. Let's embark on this exciting journey together, harnessing the power of digital marketing to elevate your online presence and drive meaningful results. Contact us today, and let's turn your aspirations into achievements!
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-8 py-4 rounded-full hover:shadow-lg transition-all font-semibold">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
