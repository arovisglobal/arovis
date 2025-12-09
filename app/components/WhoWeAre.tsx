export default function WhoWeAre() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-gray-900">Who </span>
              <span className="bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">We Are</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Arovis is a team of experienced and forward-thinking professionals who understand the intricacies of digital marketing. With a combined wealth of knowledge and expertise, our team is committed to staying ahead of industry trends, ensuring that our clients benefit from cutting-edge strategies that deliver real, measurable results.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full h-64 md:h-80 bg-gradient-to-br from-purple-200 to-blue-200 rounded-2xl flex items-center justify-center">
              <img
                src="https://images.pexels.com/photos/3862634/pexels-photo-3862634.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Who We Are"
                className="w-full h-full object-cover rounded-2xl opacity-80"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
