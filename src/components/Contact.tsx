import { Mail, Phone, Linkedin, Github, MapPin, Send } from 'lucide-react'

const Contact = () => {
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
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Build Something Together
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            I'm actively seeking SWE internship opportunities for Summer 2026. 
            Whether you want to discuss a project, opportunity, or just connect—I'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((item, index) => {
            const Icon = item.icon
            const content = (
              <div className="group bg-white/10 backdrop-blur-md p-6 rounded-2xl hover:bg-white/20 transition-all border border-white/10 hover:border-white/20 hover:scale-105 duration-300">
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-3 rounded-xl group-hover:scale-110 transition-transform">
                    <Icon size={24} />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-blue-200 mb-1">{item.label}</p>
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
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium text-lg hover:from-blue-500 hover:to-purple-500 transition-all shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transform duration-300"
          >
            <Send size={20} />
            Get In Touch
          </a>
        </div>

        {/* Social proof */}
        <div className="mt-16 pt-12 border-t border-white/10 text-center">
          <p className="text-blue-200 mb-4">Open to opportunities in</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Software Engineering', 'Full-Stack Development', 'Data Analytics', 'Machine Learning', 'Fintech'].map((area) => (
              <span
                key={area}
                className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-sm"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

