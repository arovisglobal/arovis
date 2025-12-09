import { Brain, Zap, TrendingUp, Lock, BarChart3, Cpu } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analytics',
      description: 'Get intelligent insights with machine learning algorithms that learn from your data patterns',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Process data instantly with our distributed architecture built for speed and reliability',
      color: 'bg-yellow-100 text-yellow-600',
    },
    {
      icon: TrendingUp,
      title: 'Scalable Growth',
      description: 'Grow without limits with auto-scaling infrastructure that adapts to your needs',
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: Lock,
      title: 'Enterprise Security',
      description: 'Bank-grade encryption and compliance with SOC 2, ISO 27001, and GDPR standards',
      color: 'bg-red-100 text-red-600',
    },
    {
      icon: BarChart3,
      title: 'Advanced Dashboards',
      description: 'Visualize metrics that matter with customizable, real-time dashboards',
      color: 'bg-orange-100 text-orange-600',
    },
    {
      icon: Cpu,
      title: 'API-First Design',
      description: 'Seamlessly integrate with your existing systems through our comprehensive REST API',
      color: 'bg-cyan-100 text-cyan-600',
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features, Built for You
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to succeed in one unified platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 group"
            >
              <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
