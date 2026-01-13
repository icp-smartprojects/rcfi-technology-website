import Head from 'next/head'
import { FiFileText, FiDownload } from 'react-icons/fi'

export default function WhitePapers() {
  const papers = [
    {
      title: 'Digital Trust in East Africa: 2026 State of the Market',
      description: 'Comprehensive analysis of digital signature adoption, e-KYC trends, and regulatory compliance across Kenya, Uganda, and Tanzania.',
      pages: 45,
      published: 'January 2026',
      category: 'Market Research',
      downloadUrl: '#'
    },
    {
      title: 'Implementing Kenya\'s Data Protection Act: A Practical Guide',
      description: 'Step-by-step guidance for organizations implementing DPA 2019 compliance, including technical requirements and best practices.',
      pages: 32,
      published: 'December 2025',
      category: 'Compliance',
      downloadUrl: '#'
    },
    {
      title: 'Digital Governance for NGOs and Civil Society',
      description: 'Framework for implementing digital governance, M&E systems, and donor reporting automation in CSOs.',
      pages: 28,
      published: 'November 2025',
      category: 'Best Practices',
      downloadUrl: '#'
    },
    {
      title: 'ROI of Digital Transformation for SMEs',
      description: 'Financial analysis showing measurable returns from adopting digital invoicing, e-signatures, and financial management tools.',
      pages: 22,
      published: 'October 2025',
      category: 'Business Case',
      downloadUrl: '#'
    },
    {
      title: 'Blockchain for Document Integrity: Technical Deep Dive',
      description: 'Technical architecture and implementation guide for using blockchain technology to ensure long-term document authenticity.',
      pages: 38,
      published: 'September 2025',
      category: 'Technical',
      downloadUrl: '#'
    },
    {
      title: 'e-KYC Integration with Government Systems',
      description: 'Integration patterns and security considerations for connecting with NIIMS, NTSA, and other national identity databases.',
      pages: 30,
      published: 'August 2025',
      category: 'Technical',
      downloadUrl: '#'
    }
  ]

  return (
    <>
      <Head>
        <title>White Papers - In-Depth Reports | RCFI Technology</title>
        <meta name="description" content="Download comprehensive reports on digital transformation, compliance, and technology trends in Kenya" />
      </Head>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-purple-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <FiFileText /> Research & Reports
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            White Papers
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            In-depth research, analysis, and technical guides on digital transformation
          </p>
        </div>
      </section>

      {/* White Papers Grid */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {papers.map((paper, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiFileText className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-purple-600 mb-1">{paper.category}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{paper.title}</h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{paper.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{paper.pages} pages</span>
                  <span>{paper.published}</span>
                </div>
                <a
                  href={paper.downloadUrl}
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-semibold transition-all"
                >
                  <FiDownload /> Download PDF
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}