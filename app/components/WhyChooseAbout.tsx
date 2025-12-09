export default function WhyChooseAbout() {
  const reasons = [
    {
      title: 'Strategic Approach',
      description: "At Arovis, we don't believe in one-size-fits-all solutions. We take the time to understand your unique business needs, target audience, and goals to create a customized marketing strategy that sets you apart from the competition.",
    },
    {
      title: 'Cutting-Edge Technology',
      description: 'In the fast-paced world of digital marketing, staying ahead requires leveraging the latest technologies. We invest in cutting-edge tools and analytics to ensure our strategies are always at the forefront of industry innovation.',
    },
    {
      title: 'Dedicated Support',
      description: "Your success is our success. Our dedicated team of experts is here to support you every step of the way. From strategy development to implementation and optimization, we're committed to helping you achieve and exceed your marketing goals.",
    },
    {
      title: 'Proven Track Record',
      description: "We don't just talk the talk; we walk the walk. Our track record speaks volumes about our ability to drive success for our clients. We've helped businesses of all sizes achieve and exceed their marketing goals through our tailored affiliate marketing solutions.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold mb-4">
          <span className="text-gray-900">Why </span>
          <span className="bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">Choose Us?</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-100 to-purple-50 p-8 rounded-3xl border-2 border-purple-200 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-bold text-purple-600 mb-4">{reason.title}</h3>
              <p className="text-gray-700 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
