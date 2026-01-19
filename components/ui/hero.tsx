import { Phone } from "lucide-react"

function Hero() {
    return (
        <div className="relative bg-gradient-to-br from-blue-900 to-blue-800 text-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Global Medical Outsourcing Solutions
          </h1>
          <p className="text-xl md:text-2xl text-blue-100">
            Deploying Expertise Across Africa and the Middle East
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <a href="mailto: info@ksmstaffing.com?subject=REQUEST FOR DOCTORS" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
              Request Doctors
            </a>
            <div className="flex items-center gap-2 text-lg">
              <Phone className="w-5 h-5" />
              <span>+254 719 498 019</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <img 
              src="/assets/three_docs.jpg" 
              alt="Three diverse doctors smiling together"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="absolute bottom-0 left-0 right-0">
      <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
        <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
      </svg>
    </div>
  </div>
    )
}

export default Hero
