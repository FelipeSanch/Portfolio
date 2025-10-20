import { Menu, X, FileText } from 'lucide-react'
import { useState, memo } from 'react'

interface NavbarProps {
  isScrolled: boolean
}

const Navbar = memo(({ isScrolled }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#leadership', label: 'Leadership' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
              <a
                href="#hero"
                className={`text-2xl font-bold transition-colors ${
                  isScrolled 
                    ? 'text-blue-600' 
                    : 'text-white'
                }`}
              >
                Felipe Sanchez
              </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`font-medium transition-colors relative group ${
                      isScrolled ? 'text-gray-700 hover:text-purple-600' : 'text-white hover:text-purple-300'
                    }`}
                  >
                    {link.label}
                    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full`}></span>
                  </a>
            ))}
                <a
                  href="/resume.pdf"
                  download
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                    isScrolled
                      ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md'
                      : 'bg-slate-800/80 text-white border border-slate-700 hover:bg-slate-700'
                  }`}
                >
                  <FileText size={16} />
                  Resume
                </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-2xl shadow-xl p-4 space-y-2">
            {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 px-4 py-3 rounded-lg transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
            ))}
                <a
                  href="/resume.pdf"
                  download
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-all font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FileText size={16} />
                  Download Resume
                </a>
          </div>
        )}
      </div>
    </nav>
  )
});

Navbar.displayName = 'Navbar';

export default Navbar

