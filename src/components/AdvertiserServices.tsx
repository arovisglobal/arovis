import { Heart, Users, BarChart3, TrendingUp, Verified, Shield } from 'lucide-react';

export default function AdvertiserServices() {
  const services = [
    {
      icon: Heart,
      title: '100% Brand Safety',
      description: 'All of your creatives are monitored manually to ensure brand safety for the best user experience.',
    },
    {
      icon: Users,
      title: 'Targeting Group',
      description: 'Possibility to target your audience by GEO, OS, Browser and many other parameters.',
    },
    {
      icon: BarChart3,
      title: 'High Volume',
      description: 'More than 200M push ads are delivered everyday for our advertising partners, ensuring high ROI.',
    },
    {
      icon: TrendingUp,
      title: 'Highest CR / CTR',
      description: 'By matching the best offers with the relevant audience, boost efficiency of your ad campaigns.',
    },
    {
      icon: Verified,
      title: 'Premium Inventory',
      description: 'Get access to Premium publishers and the target audience that matches your offers best',
    },
    {
      icon: Shield,
      title: '100% Fraud Safety',
      description: 'We automatically cuts off any bot or suspicious activity, providing only real users and live audience',
    },
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-gray-500 text-sm uppercase tracking-wide mb-2">Our Solutions</p>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900">For Advertisers</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="bg-orange-500 p-6 rounded-full">
                    <Icon size={32} className="text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
