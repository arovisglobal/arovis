export default function ClientLogos() {
  const clients = [
    { name: 'TechVenture', color: 'text-blue-600' },
    { name: 'CloudScale', color: 'text-green-600' },
    { name: 'DataSync', color: 'text-orange-600' },
    { name: 'SmartFlow', color: 'text-cyan-600' },
    { name: 'InnovateLab', color: 'text-red-600' },
  ];

  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-600 mb-10 text-sm uppercase tracking-widest font-semibold">
          Trusted by Industry Leaders
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex items-center justify-center group cursor-pointer"
            >
              <span className={`text-lg font-bold ${client.color} opacity-60 group-hover:opacity-100 transition-opacity duration-300`}>
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
