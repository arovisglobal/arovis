export default function AboutHero() {
  return (
    <section id="about" className="bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gray-900">About </span>
              <span className="bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">us</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Welcome to Arovis, your trusted partner in the dynamic world of digital marketing! At Arovis, we are passionate about connecting businesses with success through strategic and effective marketing solutions.
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-8 py-4 rounded-full hover:shadow-lg transition-all font-semibold">
              Contact us
            </button>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full h-64 md:h-80 bg-gradient-to-br from-purple-200 to-blue-200 rounded-2xl flex items-center justify-center">
              <img
                src="https://images.pexels.com/photos/3862632/pexels-photo-3862632.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Digital Marketing"
                className="w-full h-full object-cover rounded-2xl opacity-80"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
