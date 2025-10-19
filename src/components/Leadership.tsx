import { Heart, Shield, GraduationCap, Award } from 'lucide-react'
import { memo } from 'react'
import AnimatedCounter from './AnimatedCounter'

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
    color: 'from-cyan-600 to-purple-600',
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
    color: 'from-cyan-600 to-purple-600',
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
    color: 'from-cyan-600 to-purple-600',
  },
]

const Leadership = memo(() => {
  return (
    <section id="leadership" className="py-24 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Leadership
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {activities.map((activity, index) => {
                const Icon = activity.icon
                return (
                  <div
                    key={index}
                    className="group bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-purple-500/50 hover-lift cursor-pointer"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${activity.color} rounded-xl flex items-center justify-center mb-6 shadow-md`}>
                      <Icon className="text-white" size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">
                      {activity.title}
                    </h3>
                <p className="text-gray-200 font-medium mb-2">{activity.organization}</p>
                <p className="text-sm text-gray-400 mb-4">{activity.period}</p>
                <ul className="space-y-2">
                  {activity.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex gap-2 text-sm text-gray-200">
                      <span className="text-cyan-400 mt-0.5 flex-shrink-0">▸</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* Impact metrics */}
        <div className="bg-gray-800 rounded-xl p-8 md:p-12 text-white shadow-xl border border-gray-700">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Award size={40} className="text-cyan-400" />
            <h3 className="text-3xl md:text-4xl font-bold">Key Achievements</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold mb-2 text-cyan-400">
                $<AnimatedCounter end={10} suffix="K+" className="inline-block" />
              </p>
              <p className="text-gray-200">Raised for Pediatric Cancer Treatment</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold mb-2 text-cyan-400">
                <AnimatedCounter end={2} suffix="nd Place" className="inline-block" />
              </p>
              <p className="text-gray-200">SFISSA Hack-The-Flag Competition</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold mb-2 text-cyan-400">
                $<AnimatedCounter end={5} suffix="K+" className="inline-block" />
              </p>
              <p className="text-gray-200">Math Tutoring Business Revenue</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
});

Leadership.displayName = 'Leadership';

export default Leadership

