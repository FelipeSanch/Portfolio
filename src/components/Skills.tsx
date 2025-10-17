import { Code, Database, Cloud, Brain, Wrench, TrendingUp } from 'lucide-react'

const skillCategories = [
  {
    icon: Code,
    title: 'Languages',
    skills: ['Python', 'TypeScript', 'JavaScript', 'C', 'C++', 'SQL', 'Java'],
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Wrench,
    title: 'Frameworks & Libraries',
    skills: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'Next.js'],
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Database,
    title: 'Data & Databases',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'SQL', 'Data Analysis'],
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Brain,
    title: 'Machine Learning',
    skills: ['Logistic Regression', 'Random Forest', 'XGBoost', 'NLP', 'Scikit-learn'],
    color: 'from-pink-500 to-pink-600',
  },
  {
    icon: Cloud,
    title: 'DevOps & Tools',
    skills: ['Docker', 'Git', 'GitHub Actions', 'CI/CD', 'Linux'],
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    icon: TrendingUp,
    title: 'Finance & Analytics',
    skills: ['Financial Analysis', 'SEC Filings', 'VC Due Diligence', 'Data Visualization'],
    color: 'from-orange-500 to-orange-600',
  },
]

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A versatile toolkit spanning software engineering, data science, and product development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <div
                key={index}
                className="group bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl shadow-md hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 border border-gray-700 hover:border-blue-500/50 hover-lift cursor-pointer"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-gray-700/50 text-gray-300 px-3 py-1.5 rounded-lg text-sm font-medium border border-gray-600 hover:border-blue-400 hover:bg-blue-500/20 hover:text-blue-300 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Highlight strongest skills */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center">Core Strengths</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-4xl font-bold mb-2">Full-Stack</p>
              <p className="text-blue-100">React, TypeScript, Node.js, PostgreSQL</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">ML & Data</p>
              <p className="text-blue-100">Python, Machine Learning, Analytics</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">DevOps</p>
              <p className="text-blue-100">Docker, CI/CD, GitHub Actions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

