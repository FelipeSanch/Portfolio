import { GraduationCap, Target, Sparkles } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A problem solver who combines analytical thinking with technical creativity to build 
            impactful solutions at the intersection of software engineering and data analytics.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Education Card */}
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all border border-gray-700 hover:border-blue-500/50 hover-lift">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
              <GraduationCap className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Education</h3>
            <p className="text-gray-400 text-sm">Duke University '28</p>
            <p className="text-gray-300 font-medium">CS & Mathematics</p>
          </div>

          {/* Approach Card */}
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all border border-gray-700 hover:border-purple-500/50 hover-lift">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
              <Target className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">My Approach</h3>
            <p className="text-gray-300 text-sm">
              I thrive on tackling complex challenges with data-driven solutions and clean, scalable code.
            </p>
          </div>

          {/* Interests Card */}
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-indigo-500/20 transition-all border border-gray-700 hover:border-indigo-500/50 hover-lift">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
              <Sparkles className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">What Excites Me</h3>
            <p className="text-gray-300 text-sm">
              ML applications, fintech innovation, and building tools that quantify and optimize engineering workflows.
            </p>
          </div>
        </div>

        {/* Detailed Education */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-lg p-8 md:p-12 border border-gray-700">
          <h3 className="text-2xl font-bold mb-8 text-white">Academic Background</h3>
          <div className="space-y-8">
            <div className="relative pl-8 border-l-4 border-blue-500">
              <div className="absolute -left-2.5 top-0 w-4 h-4 rounded-full bg-blue-500"></div>
              <h4 className="text-xl font-bold mb-2 text-white">Duke University</h4>
              <p className="text-gray-400 mb-3">Aug 2024 – May 2028 | Durham, NC</p>
              <p className="text-gray-200 font-medium mb-2">B.S. Computer Science & Mathematics (Double Major)</p>
              <p className="text-gray-300 mb-3">GPA: 3.30/4.00</p>
              <div className="bg-gray-700/50 rounded-lg p-4 border border-gray-600">
                <p className="text-sm font-semibold text-gray-300 mb-2">Relevant Coursework:</p>
                <div className="flex flex-wrap gap-2">
                  {['Computer Architecture', 'Data Structures & Algorithms', 'Databases', 'Linear Algebra'].map((course) => (
                    <span key={course} className="text-sm bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full border border-blue-500/30">
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
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

