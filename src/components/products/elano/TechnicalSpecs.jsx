export function ElanoTechnicalSpecs() {
  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Enterprise Architecture</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Security</h3>
            <ul className="space-y-2 text-gray-600">
              <li>✓ ISO 27001 certified</li>
              <li>✓ Role-based access control</li>
              <li>✓ End-to-end encryption</li>
              <li>✓ Audit trail logging</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Performance</h3>
            <ul className="space-y-2 text-gray-600">
              <li>✓ 99.95% uptime SLA</li>
              <li>✓ Cloud-native architecture</li>
              <li>✓ Auto-scaling</li>
              <li>✓ Daily backups</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Compliance</h3>
            <ul className="space-y-2 text-gray-600">
              <li>✓ Kenya DPA 2019</li>
              <li>✓ GDPR aligned</li>
              <li>✓ Donor standards</li>
              <li>✓ Financial regulations</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
