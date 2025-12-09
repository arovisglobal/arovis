import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
          Join thousands of companies using Arovis to streamline operations and accelerate growth
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-all flex items-center gap-2 text-lg font-semibold">
            Start Free Trial
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
          <button className="text-white px-8 py-4 rounded-lg border-2 border-white hover:bg-blue-700 transition-all text-lg font-semibold">
            Schedule Demo
          </button>
        </div>
      </div>
    </section>
  );
}
