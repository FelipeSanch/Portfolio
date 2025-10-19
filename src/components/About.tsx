import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { memo } from 'react'
import ParticlesBackground from './ParticlesBackground'

const About = memo(() => {
  const { ref, isVisible } = useScrollAnimation()
  
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <ParticlesBackground />
      </div>
      <div ref={ref} className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Education
          </h2>
        </div>

        <div className="bg-gray-800 rounded-xl shadow-lg p-8 md:p-12 border border-gray-700">
          <h3 className="text-2xl font-bold mb-8 text-white">Background</h3>
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
      </div>
    </section>
  )
});

About.displayName = 'About';

export default About

