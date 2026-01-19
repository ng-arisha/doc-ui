import { ArrowRight, Globe, Stethoscope, Users } from "lucide-react";

function Services() {
    const services = [
        {
          icon: <Stethoscope className="w-12 h-12" />,
          title: 'Specialist Placement',
          description: 'Access to surgeons, cardiologists, pediatricians, and specialists across all medical disciplines ready for immediate deployment.'
        },
        {
          icon: <Users className="w-12 h-12" />,
          title: 'Team Solutions',
          description: 'Complete medical teams for hospitals, clinics, and healthcare facilities. We handle recruitment, credentialing, and logistics.'
        },
        {
          icon: <Globe className="w-12 h-12" />,
          title: 'Global Coverage',
          description: 'Serving healthcare facilities across 15 countries in Africa and the Middle East with localized support and expertise.'
        }
      ];
    return (
        <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive medical staffing solutions tailored to your facility's unique needs
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-100 rounded-2xl w-20 h-20 flex items-center justify-center mb-6 text-blue-900">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <button className="text-blue-900 font-semibold flex items-center gap-2 hover:gap-3 transition-all duration-300">
                Learn More <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
    )
}

export default Services
