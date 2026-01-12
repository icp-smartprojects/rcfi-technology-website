export function PrezioTechnicalSpecs() {
  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Built for Kenya</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Security</h3>
            <ul className="space-y-2 text-gray-600">
              <li>✓ SSL encryption</li>
              <li>✓ Daily backups</li>
              <li>✓ Kenya DPA compliant</li>
              <li>✓ Secure data storage</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Accessibility</h3>
            <ul className="space-y-2 text-gray-600">
              <li>✓ Mobile-responsive</li>
              <li>✓ Works offline</li>
              <li>✓ Fast loading</li>
              <li>✓ Any device</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Local Features</h3>
            <ul className="space-y-2 text-gray-600">
              <li>✓ KES currency default</li>
              <li>✓ M-PESA integration</li>
              <li>✓ KRA tax rates</li>
              <li>✓ Local support</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
