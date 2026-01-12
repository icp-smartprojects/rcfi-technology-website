export function DigiSignCustomerStories() {
  return (
    <section className="py-24 px-4 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Trusted by Leading Organizations</h2>
          <p className="text-xl text-blue-100">See how DigiSign transforms digital operations</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <div className="text-6xl mb-4">🏛️</div>
            <h3 className="text-2xl font-bold mb-4">Uasin Gishu County Government</h3>
            <p className="text-blue-100 mb-4">Digitized CSO registration and governance tracking</p>
            <ul className="space-y-2 text-blue-100">
              <li>✓ 200+ CSOs registered digitally</li>
              <li>✓ 80% reduction in processing time</li>
              <li>✓ Complete audit trail</li>
            </ul>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <div className="text-6xl mb-4">🏦</div>
            <h3 className="text-2xl font-bold mb-4">Leading SACCO</h3>
            <p className="text-blue-100 mb-4">Automated loan onboarding with e-KYC</p>
            <ul className="space-y-2 text-blue-100">
              <li>✓ Under 10 seconds verification</li>
              <li>✓ 90% reduction in fraud</li>
              <li>✓ 5x faster loan processing</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
