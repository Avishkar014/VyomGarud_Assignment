import React, { useState, useEffect } from 'react';
import { ChevronRight, Shield, Zap, Radio, Mail, Phone, MapPin, Menu, X, Target, Cpu } from 'lucide-react';

const VyomGarudLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#capabilities', label: 'Capabilities' },
    { href: '#contact', label: 'Contact' }
  ];

  const capabilities = [
    {
      title: "Autonomous Navigation",
      desc: "AI-powered flight systems with real-time obstacle detection and precision waypoint tracking for complex mission profiles.",
      icon: <Cpu className="w-8 h-8" />
    },
    {
      title: "Tactical Surveillance",
      desc: "Advanced imaging with thermal and night vision for comprehensive 24/7 intelligence gathering in any environment.",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Long-Range Operations",
      desc: "Extended endurance platforms with encrypted communication links maintaining secure connectivity up to 50km.",
      icon: <Radio className="w-8 h-8" />
    },
    {
      title: "Modular Payloads",
      desc: "Flexible integration supporting diverse mission equipment from sensors to specialized tactical instruments.",
      icon: <Target className="w-8 h-8" />
    }
  ];

  const stats = [
    { value: "99.8%", label: "Mission Success" },
    { value: "50km", label: "Max Range" },
    { value: "24/7", label: "Operations" }
  ];

  const contactInfo = [
    { icon: <Mail className="w-6 h-6" />, title: "Email", value: "contact@vyomgarud.com" },
    { icon: <Phone className="w-6 h-6" />, title: "Phone", value: "+91 8881444693" },
    { icon: <MapPin className="w-6 h-6" />, title: "Location", value: "India" }
  ];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! Our team will contact you shortly.');
    setFormData({ name: '', email: '', message: '' });
  };

  const NavLink = ({ href, label, onClick }) => (
    <a 
      href={href} 
      onClick={onClick}
      className="hover:text-orange-500 transition-colors duration-200"
    >
      {label}
    </a>
  );

  const CapabilityCard = ({ title, desc, icon }) => (
    <div className="group bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 p-8 rounded-lg hover:border-orange-500 transition-all duration-300 hover:-translate-y-1">
      <div className="text-orange-500 mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-3 group-hover:text-orange-500 transition-colors">
        {title}
      </h3>
      <p className="text-zinc-400 leading-relaxed">{desc}</p>
    </div>
  );

  const StatCard = ({ value, label }) => (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">{value}</div>
      <div className="text-zinc-400 text-sm uppercase tracking-wider">{label}</div>
    </div>
  );

  const ContactInfoItem = ({ icon, title, value }) => (
    <div className="flex items-start gap-4 group">
      <div className="bg-orange-600 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-zinc-400">{value}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-zinc-900/95 backdrop-blur-md shadow-xl' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center rounded-lg group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold">VyomGarud</span>
            </a>
            
            <div className="hidden md:flex gap-8">
              {navLinks.map(link => (
                <NavLink key={link.href} {...link} />
              ))}
            </div>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-zinc-800 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-zinc-800/95 backdrop-blur-md border-t border-zinc-700">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map(link => (
                <NavLink 
                  key={link.href} 
                  {...link} 
                  onClick={() => setIsMenuOpen(false)}
                />
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-600/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl mb-8 animate-float shadow-2xl shadow-orange-500/20">
            <Shield className="w-14 h-14" />
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
            VyomGarud
          </h1>
          
          <p className="text-2xl md:text-3xl text-zinc-300 mb-4 font-light">
            Next-Generation UAV Systems
          </p>
          
          <p className="text-lg md:text-xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Where precision engineering meets autonomous intelligence for mission-critical defense operations
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#capabilities"
              className="group bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105"
            >
              Explore Capabilities
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact"
              className="border-2 border-zinc-600 hover:border-orange-500 hover:bg-orange-500/10 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Get in Touch
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">
            {stats.map(stat => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 bg-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Built for <span className="text-orange-500">Mission Success</span>
              </h2>
              <p className="text-lg text-zinc-300 mb-6 leading-relaxed">
                VyomGarud specializes in developing cutting-edge unmanned aerial systems engineered for defense and security applications. Our platforms integrate autonomous navigation, encrypted communications, and advanced sensor payloads to deliver actionable intelligence in the most challenging environments.
              </p>
              <p className="text-lg text-zinc-300 mb-8 leading-relaxed">
                Every system we build reflects our commitment to reliability, innovation, and operational excellence—empowering forces with the technological superiority needed in modern warfare.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="px-4 py-2 bg-orange-500/20 border border-orange-500 rounded-lg">
                  <span className="text-orange-500 font-semibold">AI-Powered</span>
                </div>
                <div className="px-4 py-2 bg-orange-500/20 border border-orange-500 rounded-lg">
                  <span className="text-orange-500 font-semibold">Military-Grade</span>
                </div>
                <div className="px-4 py-2 bg-orange-500/20 border border-orange-500 rounded-lg">
                  <span className="text-orange-500 font-semibold">Secure</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-600/20 to-orange-800/20 backdrop-blur-sm p-12 rounded-2xl border border-orange-500/30 shadow-2xl">
                <h3 className="text-2xl font-bold mb-8 text-orange-500">Why Choose Us</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-white text-lg leading-relaxed">
                      Proven 99.8% mission success rate across diverse operational theaters
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-white text-lg leading-relaxed">
                      Advanced AI decision-making with real-time threat assessment
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-white text-lg leading-relaxed">
                      Military-spec encrypted communications meeting NATO standards
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="py-24 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Core <span className="text-orange-500">Capabilities</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Advanced systems designed for superior performance in tactical environments
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map(cap => (
              <CapabilityCard key={cap.title} {...cap} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Let's <span className="text-orange-500">Connect</span>
            </h2>
            <p className="text-xl text-zinc-400">
              Ready to discuss your mission requirements?
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              {contactInfo.map(info => (
                <ContactInfoItem key={info.title} {...info} />
              ))}
            </div>

            <div className="bg-zinc-900/70 backdrop-blur-sm p-8 rounded-2xl border border-zinc-700 shadow-xl">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-zinc-300">Name</label>
                  <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-zinc-300">Email</label>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-zinc-300">Message</label>
                  <textarea 
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all resize-none"
                    placeholder="Tell us about your operational requirements..."
                  />
                </div>
                <button 
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-[1.02]"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 border-t border-zinc-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center rounded-lg group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold">VyomGarud</span>
            </a>
            <p className="text-zinc-500 text-sm">
              © {new Date().getFullYear()} VyomGarud. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(3deg); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default VyomGarudLanding;