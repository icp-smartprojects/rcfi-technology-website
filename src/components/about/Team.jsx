import { FiLinkedin, FiMail } from 'react-icons/fi'
import Link from 'next/link'

export default function Team() {
  const teamMembers = [
    {
      name: 'Ian Kigen Kisorio',
      title: 'Chief Executive Officer & Founder',
      role: 'Leadership & Vision',
      email: 'ian@rcfi.co.ke',
      bio: 'Founder and CEO driving RCFI\'s mission across Kenya and East Africa',
      linkedin: '#',
      image: '/images/team/placeholder.jpg'
    },
    {
      name: 'Emmanuel Mariaria',
      title: 'Chief Operating Officer',
      role: 'Operations',
      email: 'e.mariaria@rcfi.co.ke',
      bio: 'Leads operational excellence and business development initiatives',
      linkedin: '#',
      image: '/images/team/emmanuel-mariaria.jpg'
    },
    {
      name: 'Ian Ndoli',
      title: 'Chief Technology Officer',
      role: 'Technology/Engineering',
      email: 'i.ndoli@rcfi.co.ke',
      bio: 'Oversees technology strategy and engineering excellence across all RCFI platforms',
      linkedin: '#',
      image: '/images/team/ian-ndoli.jpg'
    },
    {
      name: 'Kevin Tonui',
      title: 'Chief Compliance Officer (Digital Trust Services)',
      role: 'Cybersecurity/Compliance',
      email: 'k.tonui@rcfi.co.ke',
      bio: 'Leads compliance and regulatory strategy for all RCFI digital trust services',
      linkedin: '#',
      image: '/images/team/kevin-tonui.jpg'
    },
    {
      name: 'Muriu Mwangi',
      title: 'Frontend & IoT Developer',
      role: 'Frontend & IoT Development',
      email: 'muriu@rcfi.co.ke',
      bio: 'Developing modern, responsive frontend solutions and IoT integrations for RCFI\'s digital platforms',
      linkedin: '#',
      image: '/images/team/placeholder.jpg'
    },
    {
      name: 'Virginia Maina',
      title: 'UX/UI & Frontend Developer',
      role: 'Design & Frontend',
      email: 'virginia@rcfi.co.ke',
      bio: 'Creating intuitive user experiences and building modern frontend solutions',
      linkedin: '#',
      image: '/images/team/placeholder.jpg'
    }
  ]

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600">
            Experienced professionals driving Africa's digital transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              {/* Image placeholder */}
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 h-64 flex items-center justify-center">
                <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center text-4xl font-bold text-gray-400">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-2">{member.title}</p>
                <p className="text-sm text-gray-600 mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                
                {/* Contact icons */}
                <div className="flex items-center gap-4">
                  <a 
                    href={member.linkedin} 
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiLinkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href={`mailto:${member.email}`} 
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    <FiMail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Join Our Team
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals passionate about digital transformation
          </p>
          <Link href="/about/careers" className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 font-semibold text-lg transition-all">
            View Open Positions
          </Link>
        </div>
      </div>
    </section>
  )
}