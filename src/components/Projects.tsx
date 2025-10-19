import { Github, ExternalLink, Code2, Sparkles } from 'lucide-react'
import { memo } from 'react'

const projects = [
  {
    title: 'GitFlow AI Analytics Platform',
    period: 'June 2025 – Present',
    description: 'Full-stack Git analytics platform with machine learning-powered merge conflict prediction and ROI calculation engine for engineering bottlenecks.',
    highlights: [
      'Architected full-stack application using React, TypeScript, Node.js, PostgreSQL, and Docker',
      'Built ML pipeline for merge conflict prediction using historical repository data',
      'Developed ROI calculation engine to quantify engineering bottlenecks and project cost savings',
      'Implemented CI/CD pipeline with GitHub Actions and comprehensive monitoring',
    ],
    role: 'Full-Stack Developer & ML Engineer',
    impact: 'Real-time GitHub integration via Chrome extension and OAuth authentication',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'Machine Learning', 'Chrome Extension', 'OAuth'],
    githubUrl: 'https://github.com/FelipeSanch/gitflow',
    liveUrl: '',
    featured: true,
  },
]

const Projects = memo(() => {
  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Building solutions that combine technical innovation with measurable business impact
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
              <div
                  key={index}
                  className={`group bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border hover-lift cursor-pointer ${
                    project.featured ? 'border-cyan-500/50 hover:border-purple-500/50' : 'border-gray-700 hover:border-purple-500/50'
                  }`}
                >
              <div className="grid md:grid-cols-3 gap-8 p-8 md:p-10">
                {/* Left: Project image placeholder */}
                <div className="md:col-span-1">
                      <div className="relative h-48 md:h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg flex items-center justify-center border border-gray-700 overflow-hidden">
                        <div className="text-center p-6">
                          <Code2 className="mx-auto mb-3 text-cyan-400" size={48} />
                          <p className="text-sm text-gray-400">Add project screenshot</p>
                          <p className="text-xs text-gray-500 mt-1">or demo GIF here</p>
                        </div>
                        {project.featured && (
                          <div className="absolute top-4 right-4 bg-cyan-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                            <Sparkles size={12} />
                            Featured
                          </div>
                        )}
                      </div>
                </div>

                {/* Right: Project details */}
                <div className="md:col-span-2">
                      <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                        {project.title}
                      </h3>
                  <p className="text-sm text-gray-400 mb-3">{project.period}</p>
                  
                  <p className="text-gray-200 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                      <div className="mb-4">
                        <p className="text-sm font-semibold text-gray-300 mb-2">Key Contributions:</p>
                        <ul className="space-y-1.5">
                          {project.highlights.map((item, idx) => (
                            <li key={idx} className="flex gap-2 text-sm text-gray-200">
                              <span className="text-cyan-400 mt-0.5">▸</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-4">
                        <p className="text-sm text-gray-200"><span className="font-semibold text-white">Role:</span> {project.role}</p>
                        <p className="text-sm text-gray-200"><span className="font-semibold text-white">Impact:</span> {project.impact}</p>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-cyan-500/10 text-cyan-300 px-3 py-1 rounded text-xs font-medium border border-cyan-500/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-3">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-slate-700 text-white px-4 py-2 rounded-lg hover:bg-slate-600 transition-colors text-sm font-medium"
                        >
                          <Github size={16} />
                          View Code
                        </a>
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-500 transition-colors text-sm font-medium"
                          >
                            <ExternalLink size={16} />
                            Live Demo
                          </a>
                        )}
                      </div>
                </div>
              </div>
            </div>
          ))}
        </div>

            <div className="mt-12 text-center">
              <a
                href="https://github.com/FelipeSanch"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium text-lg group"
              >
                <Github size={24} />
                <span>View all projects on GitHub</span>
                <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
      </div>
    </section>
  )
});

Projects.displayName = 'Projects';

export default Projects

