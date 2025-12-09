import { Shield, Headphones, Globe, BarChart3, Cpu, RefreshCw, Rocket, Users } from 'lucide-react';

export default function WhyChoose() {
  const features = [
    {
      icon: Headphones,
      title: 'Expert Support',
      description: 'Dedicated support team ready to help',
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Enterprise-grade security & compliance',
    },
    {
      icon: Globe,
      title: 'Global Scale',
      description: 'Serve customers worldwide reliably',
    },
    {
      icon: Rocket,
      title: 'Lightning Fast',
      description: 'Sub-millisecond response times',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Work seamlessly with your team',
    },
    {
      icon: BarChart3,
      title: 'Rich Analytics',
      description: 'Deep insights into your business',
    },
    {
      icon: RefreshCw,
      title: 'Always Updated',
      description: 'Continuous improvements & features',
    },
    {
      icon: Cpu,
      title: 'AI Integration',
      description: 'Machine learning at your fingertips',
    },
  ];

  return (
    <section id="why" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Arovis?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need for success in one platform
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow duration-300 border border-gray-100 group"
            >
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
