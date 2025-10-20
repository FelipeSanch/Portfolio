import { Mail, Phone, Linkedin, Github, MapPin, Send } from 'lucide-react'
import { memo } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Contact = memo(() => {
  const { ref, isVisible } = useScrollAnimation()
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'fs172@duke.edu',
      href: 'mailto:fs172@duke.edu',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '(786) 383-6873',
      href: 'tel:+17863836873',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'felipesanchez-noguera',
      href: 'https://linkedin.com/in/felipesanchez-noguera',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'FelipeSanch',
      href: 'https://github.com/FelipeSanch',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Miami, FL',
      href: null,
    },
  ]

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
      </div>

      <div ref={ref} className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Contact
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Seeking SWE internship opportunities for Summer 2026. Open to discussing projects and opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((item, index) => {
            const Icon = item.icon
            const content = (
              <div className="group bg-slate-800/80 p-6 rounded-xl hover:bg-slate-700 transition-all duration-300 border border-slate-700 hover:border-purple-500/50 hover-lift cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-r from-cyan-600 to-purple-600 p-3 rounded-lg">
                    <Icon size={24} />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-gray-400 mb-1">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </div>
              </div>
            )

            return item.href ? (
              <a
                key={index}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {content}
              </a>
            ) : (
              <div key={index}>{content}</div>
            )
          })}
        </div>

        <div className="text-center">
          <a
            href="mailto:fs172@duke.edu"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium text-lg hover:from-cyan-500 hover:to-purple-500 transition-all shadow-xl hover:shadow-purple-500/50 transform hover:-translate-y-1 duration-300"
          >
            <Send size={20} />
            Get In Touch
          </a>
        </div>

        {/* Social proof */}
        <div className="mt-16 pt-12 border-t border-slate-700 text-center">
          <p className="text-gray-300 mb-4">Open to opportunities in</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Software Engineering', 'Full-Stack Development', 'Data Analytics', 'Machine Learning', 'Fintech'].map((area) => (
              <span
                key={area}
                className="bg-slate-800/80 border border-slate-700 px-4 py-2 rounded-lg text-sm text-gray-200"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
});

Contact.displayName = 'Contact';

export default Contact

