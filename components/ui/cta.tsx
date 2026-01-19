import { Mail } from "lucide-react"

function Cta() {
    return (
        <div className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl shadow-lg overflow-hidden">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="p-12 lg:p-16 text-white space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Ready to Transform Your Healthcare Staffing?
            </h2>
            <p className="text-xl text-blue-100">
              Get in touch with our team today to discuss your medical staffing needs.
            </p>
            <div className="flex items-center gap-3 text-xl">
              <Mail className="w-6 h-6 text-green-400" />
              <span className="text-green-400 font-semibold">info@ksmstaffing.com</span>
            </div>
            <a href="mailto: info@ksmstaffing.com" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
              Get Started Today
            </a>
          </div>
          <div className="relative min-h-[300px] md:min-h-0">
            <img 
              src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&h=600&fit=crop" 
              alt="Doctors collaborating on patient care"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
    )
}

export default Cta
