import { FiLinkedin, FiMail } from 'react-icons/fi'
import Link from 'next/link'

export default function Team() {
  const teamMembers = [
    {
      name: 'Ian Kigen Kisorio',
      title: 'Chief Executive Officer & Founder',
      role: 'Leadership & Vision',
      email: 'k.kisorio@rcfi.co.ke',
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
      email: 'ian.mathews@rcfi.co.ke',
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
      title: 'Senior Backend Engineer & IoT Developer',
      role: 'Backend Engineering & IoT',
      email: 'jotham.mwangi@rcfi.co.ke',
      bio: 'Leads backend engineering and IoT integrations powering RCFI\'s live platforms — CertySign, Elano, and Prezio',
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
              {/* Avatar */}
              <div className={`h-48 flex items-center justify-center relative overflow-hidden
                ${index === 0 ? 'gradient-primary' :
                  index === 1 ? 'bg-gradient-to-br from-slate-600 to-slate-800' :
                  index === 2 ? 'gradient-secondary' :
                  index === 3 ? 'bg-gradient-to-br from-purple-600 to-indigo-700' :
                  index === 4 ? 'bg-gradient-to-br from-teal-600 to-emerald-700' :
                  'bg-gradient-to-br from-rose-500 to-pink-600'}`}>
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                  backgroundSize: '24px 24px'
                }} />
                <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-3xl font-extrabold text-white border-4 border-white/40 shadow-lg relative z-10">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-primary-600 font-semibold mb-2">{member.title}</p>
                <p className="text-sm text-gray-600 mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                
                {/* Contact icons */}
                <div className="flex items-center gap-4">
                  <a 
                    href={member.linkedin} 
                    className="text-gray-400 hover:text-primary-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiLinkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href={`mailto:${member.email}`} 
                    className="text-gray-400 hover:text-primary-600 transition-colors"
                  >
                    <FiMail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 lg:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Join Our Team
          </h3>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals passionate about digital transformation
          </p>
          <Link href="/about/careers" className="inline-block px-8 py-4 bg-white text-primary-600 rounded-lg hover:bg-primary-50 font-semibold text-lg transition-all">
            View Open Positions
          </Link>
        </div>
      </div>
    </section>
  )
}
