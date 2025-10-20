import { Briefcase, Building2, TrendingUp } from 'lucide-react'
import { memo } from 'react'

const experiences = [
  {
    title: 'Investment Analyst & Mentor',
    company: 'Duke Venture Group',
    location: 'Durham, NC',
    period: 'Sep 2025 – Present',
    description: [
      'Selected as 1 of 33 analysts (from 200+ applicants) in Duke\'s competitive undergraduate VC program',
      'Support due diligence and partner projects with VCs including Maven Ventures, Camber Creek, and Mudita VP',
    ],
    icon: TrendingUp,
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    title: 'Asset Management Intern',
    company: 'MasTec',
    location: 'Coral Gables, FL',
    period: 'May 2025 – Aug 2025',
    description: [
      'Analyzed SEC filings (10-K, 10-Q, 8-K) for 40+ companies at Fortune 500 infrastructure firm',
      'Built Python scripts to automate data extraction, reducing manual review time for financial analysis',
    ],
    icon: Building2,
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    title: 'ML Team Member',
    company: 'Duke Applied Machine Learning',
    location: 'Durham, NC',
    period: 'Sep 2024 – Present',
    description: [
      'Built predictive models (logistic regression, random forest, XGBoost) for customer churn analysis',
    ],
    icon: Briefcase,
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    title: 'Software Engineering Intern',
    company: 'Miami Jewish Health',
    location: 'Miami, FL',
    period: 'May 2023 – Aug 2023',
    description: [
      'Developed React components and RESTful APIs for healthcare applications',
      'Implemented JWT-based authentication in Node.js/Express environment',
    ],
    icon: Briefcase,
    color: 'from-cyan-500 to-cyan-600',
  },
]

const Experience = memo(() => {
  const { ref, isVisible } = useScrollAnimation()
  
  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-gray-800 to-gray-900">
      <div ref={ref} className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Experience
          </h2>
        </div>

        <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-gray-700 via-gray-600 to-gray-700"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const Icon = exp.icon
              const isEven = index % 2 === 0
              
              return (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-lg`}>
                      <Icon className="text-white" size={24} />
                    </div>
                  </div>

                      {/* Content card */}
                      <div className={`md:w-[calc(50%-3rem)] ${isEven ? 'md:ml-0' : 'md:ml-auto'}`}>
                        <div className="bg-gray-800 p-6 md:p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-purple-500/50 group hover-lift cursor-pointer">
                          <div className="flex items-start gap-4 mb-4">
                            <div className={`md:hidden w-12 h-12 rounded-lg bg-gradient-to-br ${exp.color} flex items-center justify-center flex-shrink-0`}>
                              <Icon className="text-white" size={24} />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl md:text-2xl font-bold mb-1 text-white">
                                {exp.title}
                              </h3>
                          <p className="text-lg font-medium text-gray-300 mb-2">{exp.company}</p>
                          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-400">
                            <span>{exp.period}</span>
                            <span>•</span>
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                          <ul className="space-y-2">
                            {exp.description.map((item, idx) => (
                              <li key={idx} className="flex gap-3 text-gray-200 text-sm md:text-base">
                                <span className="text-cyan-400 mt-1 flex-shrink-0">▸</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
});

Experience.displayName = 'Experience';

export default Experience

