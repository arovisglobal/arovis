export default function Mission() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex items-center justify-center order-2 md:order-1">
            <div className="w-full h-64 md:h-80 bg-gradient-to-br from-purple-200 to-blue-200 rounded-2xl flex items-center justify-center">
              <img
                src="https://images.pexels.com/photos/3862633/pexels-photo-3862633.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Our Mission"
                className="w-full h-full object-cover rounded-2xl opacity-80"
              />
            </div>
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-gray-900">Our </span>
              <span className="bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">Mission</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our mission is simple yet powerful: to empower businesses to thrive in the digital landscape by maximizing their online presence and revenue through innovative marketing strategies. We believe in the transformative potential of digital marketing and are dedicated to helping our clients achieve unparalleled growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
