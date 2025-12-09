import { Target, DollarSign } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="bg-gradient-to-br from-amber-50 to-orange-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-orange-500 mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Ready to transform your business? Choose your path and let's create something amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-yellow-100 p-8 md:p-12 rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-orange-500 p-4 rounded-full">
                  <Target size={40} className="text-white" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Become an Advertiser</h3>
              <p className="text-gray-700 mb-8 leading-relaxed">
                At Arovis, you only pay for what works. Our performance-based model ensures every rupee you spend drives real results — installs, leads, sales, and growth. No guesswork. No wasted budgets. Advertise smarter. Grow faster.
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all">
                Join Now
              </button>
            </div>
          </div>

          <div className="bg-yellow-100 p-8 md:p-12 rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-orange-500 p-4 rounded-full">
                  <DollarSign size={40} className="text-white" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Become a Publisher</h3>
              <p className="text-gray-700 mb-8 leading-relaxed">
                At Arovis, we grow together. We win only when you maximize your mobile revenue. With high-converting offers, real-time tracking, and timely payouts, we empower publishers to scale faster and earn more. Monetize smarter. Partner with Arovis.
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
