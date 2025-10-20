import { Code, Database, Cloud, Brain, Wrench, TrendingUp } from 'lucide-react'
import { memo } from 'react'
import ParticlesBackground from './ParticlesBackground'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const skillCategories = [
  {
    icon: Code,
    title: 'Languages',
    skills: ['Python', 'TypeScript', 'JavaScript', 'C', 'C++', 'SQL', 'Java'],
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    icon: Wrench,
    title: 'Frameworks & Libraries',
    skills: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'Next.js'],
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    icon: Database,
    title: 'Data & Databases',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'SQL', 'Data Analysis'],
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    icon: Brain,
    title: 'Machine Learning',
    skills: ['Logistic Regression', 'Random Forest', 'XGBoost', 'NLP', 'Scikit-learn'],
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    icon: Cloud,
    title: 'DevOps & Tools',
    skills: ['Docker', 'Git', 'GitHub Actions', 'CI/CD', 'Linux'],
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    icon: TrendingUp,
    title: 'Finance & Analytics',
    skills: ['Financial Analysis', 'SEC Filings', 'VC Due Diligence', 'Data Visualization'],
    color: 'from-cyan-500 to-cyan-600',
  },
]

const Skills = memo(() => {
  const { ref, isVisible } = useScrollAnimation()
  
  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <ParticlesBackground />
      </div>
      <div ref={ref} className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Skills
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((category, index) => {
                const Icon = category.icon
                return (
                  <div
                    key={index}
                    className="group bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-purple-500/50 hover-lift cursor-pointer"
                  >
                    <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                      <Icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white">
                      {category.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="bg-slate-700 text-gray-200 px-3 py-1.5 rounded text-sm font-medium hover:bg-slate-600 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )
              })}
        </div>

        {/* Primary focus areas */}
        <div className="mt-16 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl p-8 md:p-12 text-white shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center">Primary Focus</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-4xl font-bold mb-2">Full-Stack</p>
              <p className="text-cyan-50">React, TypeScript, Node.js, PostgreSQL</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">Data & ML</p>
              <p className="text-cyan-50">Python, Machine Learning, Analytics</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">Infrastructure</p>
              <p className="text-cyan-50">Docker, CI/CD, GitHub Actions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
});

Skills.displayName = 'Skills';

export default Skills

