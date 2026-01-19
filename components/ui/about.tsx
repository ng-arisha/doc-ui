import { Check } from "lucide-react"

function About() {
    return (
        <div className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Connecting Skilled Doctors to Where They're Needed Most
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We bridge the healthcare gap by providing world-class medical professionals to facilities across emerging markets. Our rigorous vetting process ensures only the most qualified and compassionate doctors join our network.
          </p>
          <ul className="space-y-4">
            {[
              'Pre-vetted, licensed medical professionals',
              'Rapid deployment within 48-72 hours',
              'Comprehensive credential verification',
              '24/7 support and coordination'
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="bg-green-100 rounded-full p-1 mt-1">
                  <Check className="w-5 h-5 text-green-600" />
                </div>
                <span className="text-gray-700 text-lg">{item}</span>
              </li>
            ))}
          </ul>
          <button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
            Learn More About Us
          </button>
        </div>
        <div className="relative">
          <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl shadow-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=900&fit=crop" 
              alt="Female doctor holding a tablet"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
    )
}

export default About
