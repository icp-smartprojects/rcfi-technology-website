export function PrezioIntegrations() {
  const integrations = ['QuickBooks', 'Excel', 'M-PESA', 'KRA e-TIMS', 'Google Drive', 'Dropbox', 'Zapier', 'Mailchimp']

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Works With Your Tools</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {integrations.map((integration) => (
            <div key={integration} className="bg-gray-50 rounded-lg p-4 text-center text-sm font-semibold text-gray-700">
              {integration}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
