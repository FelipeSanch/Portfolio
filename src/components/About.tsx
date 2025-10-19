import { GraduationCap, Target, Sparkles } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { memo } from 'react'

const About = memo(() => {
  const { ref, isVisible } = useScrollAnimation()
  
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-900 to-gray-800">
      <div ref={ref} className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            About Me
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Problem solver combining analytical thinking with technical creativity to build 
            impactful solutions at the intersection of software engineering and data analytics.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Education Card */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-cyan-500/50 hover-lift cursor-pointer">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
              <GraduationCap className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Education</h3>
            <p className="text-gray-400 text-sm">Duke University '28</p>
            <p className="text-gray-200 font-medium">CS & Mathematics</p>
          </div>

          {/* Approach Card */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-purple-500/50 hover-lift cursor-pointer">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
              <Target className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">My Approach</h3>
            <p className="text-gray-200 text-sm">
              Tackling complex challenges with data-driven solutions and clean, scalable code.
            </p>
          </div>

          {/* Interests Card */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-pink-500/50 hover-lift cursor-pointer">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-4">
              <Sparkles className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">What Excites Me</h3>
            <p className="text-gray-200 text-sm">
              ML applications, fintech innovation, and tools that optimize engineering workflows.
            </p>
          </div>
        </div>

        {/* Detailed Education */}
        <div className="bg-gray-800 rounded-xl shadow-lg p-8 md:p-12 border border-gray-700">
          <h3 className="text-2xl font-bold mb-8 text-white">Academic Background</h3>
          <div className="space-y-8">
                <div className="relative pl-8 border-l-4 border-cyan-500">
                  <div className="absolute -left-2.5 top-0 w-4 h-4 rounded-full bg-cyan-500"></div>
              <h4 className="text-xl font-bold mb-2 text-white">Duke University</h4>
              <p className="text-gray-400 mb-3">Aug 2024 – May 2028 | Durham, NC</p>
              <p className="text-gray-200 font-medium mb-2">B.S. Computer Science & Mathematics (Double Major)</p>
              <p className="text-gray-300 mb-3">GPA: 3.30/4.00</p>
                  <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                    <p className="text-sm font-semibold text-gray-200 mb-2">Relevant Coursework:</p>
                    <div className="flex flex-wrap gap-2">
                      {['Computer Architecture', 'Data Structures & Algorithms', 'Databases', 'Linear Algebra'].map((course) => (
                        <span key={course} className="text-sm bg-cyan-500/10 text-cyan-200 px-3 py-1 rounded-full border border-cyan-500/30">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
            </div>

            <div className="relative pl-8 border-l-4 border-gray-500">
              <div className="absolute -left-2.5 top-0 w-4 h-4 rounded-full bg-gray-500"></div>
              <h4 className="text-xl font-bold mb-2 text-white">Christopher Columbus High School</h4>
              <p className="text-gray-400 mb-3">Aug 2020 – May 2024 | Miami, FL</p>
              <div className="flex flex-wrap gap-4 text-gray-300">
                <span className="font-medium">WGPA: 5.43</span>
                <span className="text-gray-600">•</span>
                <span className="font-medium">SAT: 1540</span>
                <span className="text-gray-600">•</span>
                <span className="font-medium">14 AP Classes</span>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Interests */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold mb-4 text-white">Beyond Code</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Reading', 'Soccer', 'DJing', 'Pickleball', 'Running'].map((interest) => (
              <span
                key={interest}
                className="bg-slate-700 text-gray-200 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-600 transition-colors"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
});

About.displayName = 'About';

export default About

