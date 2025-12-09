import { Code2, Clock, MapPin, Headphones, DollarSign, Sliders } from 'lucide-react';

export default function PublisherServices() {
  const services = [
    {
      icon: Code2,
      title: 'Powerful Smart API',
      description: 'You are in control and you decide which traffic you want to send to us and which to others',
    },
    {
      icon: Clock,
      title: 'Reliable Stats',
      description: 'We offer you the most detailed and reliable stats which will help you understanding your traffic better',
    },
    {
      icon: MapPin,
      title: 'World Wide Coverage',
      description: 'We cover traffic around the globe in every GEO you can imagine – think global, earn global.',
    },
    {
      icon: Headphones,
      title: 'Dedicated Support',
      description: 'Our publisher team provides a high support level, quick replies and 24/7 accessibility in different languages.',
    },
    {
      icon: DollarSign,
      title: 'Flexible Cash Models',
      description: 'Mixing PPL and RevShare campaigns on your traffic will end up in stable short and longterm earnings for you.',
    },
    {
      icon: Sliders,
      title: 'Filter & Targeting',
      description: 'Target and filter by Country, Operator, Connection, Device, OS and Browser.',
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-gray-500 text-sm uppercase tracking-wide mb-2">Our Solutions</p>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900">For Publishers</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="bg-purple-600 p-6 rounded-full">
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
