import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi'

export default function OfficeLocations() {
  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Visit Our Office
          </h2>
          <p className="text-xl text-gray-600">
            We're located in the heart of Nairobi
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Office Details */}
          <div className="space-y-8">
            {/* Address */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FiMapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Address</h3>
                  <p className="text-gray-600">
                    5th Floor, Hifadhi House<br />
                    Along ICD Road<br />
                    Nairobi, Kenya
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FiPhone className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                  <a href="tel:+254754134704" className="text-gray-600 hover:text-blue-600 transition-colors">
                    +254 754 134 704
                  </a>
                  <p className="text-sm text-gray-500 mt-1">Mon-Fri, 8am-6pm EAT</p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FiMail className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                  <div className="space-y-1">
                    <div>
                      <a href="mailto:info@rcfi.co.ke" className="text-gray-600 hover:text-blue-600 transition-colors">
                        info@rcfi.co.ke
                      </a>
                      <span className="text-sm text-gray-500 ml-2">(General)</span>
                    </div>
                    <div>
                      <a href="mailto:sales@rcfi.co.ke" className="text-gray-600 hover:text-blue-600 transition-colors">
                        sales@rcfi.co.ke
                      </a>
                      <span className="text-sm text-gray-500 ml-2">(Sales)</span>
                    </div>
                    <div>
                      <a href="mailto:support@rcfi.co.ke" className="text-gray-600 hover:text-blue-600 transition-colors">
                        support@rcfi.co.ke
                      </a>
                      <span className="text-sm text-gray-500 ml-2">(Support)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FiClock className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Business Hours</h3>
                  <div className="space-y-1 text-gray-600">
                    <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 1:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 h-full min-h-[500px] flex items-center justify-center">
              <div className="text-center p-8">
                <FiMapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <p className="text-gray-600 mb-4">Interactive map coming soon</p>
                <a
                  href="https://maps.google.com/?q=Hifadhi+House+ICD+Road+Nairobi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold transition-all"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}