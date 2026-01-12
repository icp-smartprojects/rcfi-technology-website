export function ElanoIntegrations() {
  const integrations = [
    'Government APIs', 'Donor Portals', 'QuickBooks', 'Microsoft 365',
    'Google Workspace', 'Tableau', 'Power BI', 'Excel',
    'SAP', 'Salesforce', 'Zoho', 'Slack'
  ]

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Seamless Integrations</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
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