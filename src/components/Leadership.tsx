import { Heart, Shield, GraduationCap, Award } from 'lucide-react'

const activities = [
  {
    title: 'Founder of North American Branch',
    organization: 'Fundación Sanar',
    period: 'Aug 2023 – Present',
    achievements: [
      'Raised over $10,000 for pediatric cancer treatment in Colombia',
      'Founded "Tapas Para Sanar" bottle cap initiative across 3 Miami schools',
    ],
    icon: Heart,
    color: 'from-pink-500 to-rose-500',
  },
  {
    title: 'Founder & President',
    organization: 'CCHS Cybersecurity Club',
    period: 'Sep 2020 – May 2024',
    achievements: [
      'Founded and led cybersecurity club to 2nd place at SFISSA Hack-The-Flag competition',
      'Led team to develop AI chatbot project at CodeMania! 2023 hackathon',
    ],
    icon: Shield,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Mathematics Tutor',
    organization: 'Independent Business',
    period: 'Aug 2022 – Present',
    achievements: [
      'Built math tutoring business generating $5,000+ in revenue',
      'Help students improve SAT/ACT math scores through personalized instruction',
    ],
    icon: GraduationCap,
    color: 'from-amber-500 to-orange-500',
  },
]

const Leadership = () => {
  return (
    <section id="leadership" className="py-24 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Leadership & Impact
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Creating meaningful change through community service, education, and technical innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {activities.map((activity, index) => {
            const Icon = activity.icon
            return (
              <div
                key={index}
                className="group bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all border border-gray-700 hover:border-blue-500/50 hover-lift cursor-pointer"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${activity.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md`}>
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                  {activity.title}
                </h3>
                <p className="text-gray-300 font-medium mb-2">{activity.organization}</p>
                <p className="text-sm text-gray-400 mb-4">{activity.period}</p>
                <ul className="space-y-2">
                  {activity.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex gap-2 text-sm text-gray-300">
                      <span className="text-blue-400 mt-0.5 flex-shrink-0">▸</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* Impact metrics */}
        <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Award size={40} />
            <h3 className="text-3xl md:text-4xl font-bold">Key Achievements</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold mb-2">$10K+</p>
              <p className="text-blue-100">Raised for Pediatric Cancer Treatment</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold mb-2">2nd Place</p>
              <p className="text-blue-100">SFISSA Hack-The-Flag Competition</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold mb-2">$5K+</p>
              <p className="text-blue-100">Math Tutoring Business Revenue</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Leadership

