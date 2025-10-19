import { Heart, Github, Linkedin, Mail } from 'lucide-react'
import { memo } from 'react'

const Footer = memo(() => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Left: Branding */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Felipe Sanchez
            </h3>
            <p className="text-sm text-gray-500">
              Building the future, one line of code at a time.
            </p>
          </div>

          {/* Center: Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {['About', 'Experience', 'Projects', 'Skills', 'Leadership', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent transition-all"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/FelipeSanch"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-cyan-600 hover:to-purple-600 transition-all"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/felipesanchez-noguera"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-cyan-600 hover:to-purple-600 transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:fs172@duke.edu"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-cyan-600 hover:to-purple-600 transition-all"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-sm flex items-center justify-center gap-2">
            <span>© {currentYear} Felipe Sanchez. Built with</span>
            <Heart size={16} className="text-red-500" fill="currentColor" />
            <span>using React, TypeScript, and Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  )
});

Footer.displayName = 'Footer';

export default Footer

