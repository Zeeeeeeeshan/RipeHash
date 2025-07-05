import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, ArrowRight, Users, Target, Award, TrendingUp, Globe2, Shield, Zap, Code, Database, Cloud, Mail, Phone, CheckCircle, Star, Briefcase, Lightbulb, Rocket, Building2 } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setMobileMenuOpen(false);
  };

  const founders = [
    {
      name: "Samim",
      role: "Co-Founder & CEO",
      description: "Visionary leader with over 8 years of experience in technology innovation and product strategy. Samim drives the company's mission to democratize technology access and create solutions that empower users globally. His expertise spans across business development, strategic partnerships, and emerging technology trends.",
      expertise: ["Product Strategy", "Business Development", "Innovation Leadership", "Strategic Partnerships"],
      image: "/SamimJpg.jpeg"
    },
    {
      name: "Zeeshan",
      role: "Co-Founder & CTO",
      description: "Technical architect and full-stack developer with deep expertise in scalable systems and cloud infrastructure. Zeeshan leads our engineering efforts, ensuring our products are built with cutting-edge technology while maintaining simplicity and reliability. His passion for clean code and user experience drives our technical excellence.",
      expertise: ["System Architecture", "Full-Stack Development", "Cloud Infrastructure", "DevOps & Security"],
      image: "/Zeeshanjpg.jpeg"
    }
  ];

  const services = [
    {
      category: "ENTERPRISE SOLUTIONS",
      title: "End-to-end product development from concept to deployment",
      description: "We provide comprehensive technology solutions designed to streamline operations, enhance user experiences, and drive innovation across various industries. Our approach combines deep technical expertise with user-centered design principles, ensuring scalable and maintainable solutions.",
      cta: "Explore our development process",
      icon: <Code className="w-6 h-6" />
    },
    {
      category: "CLOUD INFRASTRUCTURE",
      title: "Scalable infrastructure designed for modern applications",
      description: "Enterprise-grade cloud infrastructure and services that ensure global accessibility, high performance, and seamless scalability. Built with security and compliance at the core of every implementation, supporting millions of users worldwide.",
      cta: "Learn about our cloud services",
      icon: <Cloud className="w-6 h-6" />
    },
    {
      category: "API DEVELOPMENT",
      title: "Robust API development and integration services",
      description: "Connect systems and enable seamless data flow with our comprehensive API solutions. We design and implement APIs that are secure, scalable, and developer-friendly for maximum adoption and reliability across diverse platforms.",
      cta: "View API documentation",
      icon: <Database className="w-6 h-6" />
    }
  ];

  const insights = [
    {
      category: "TECHNOLOGY TRENDS",
      title: "The future of technology accessibility in 2025",
      description: "Technology continues to evolve at an unprecedented pace, but accessibility remains a challenge. We explore how companies can bridge the gap between complex technical capabilities and intuitive user experiences, making advanced technology available to everyone.",
      cta: "Read our technology insights",
      readTime: "5 min read"
    },
    {
      category: "PRODUCT DEVELOPMENT",
      title: "Building products that users actually want to use",
      description: "User-centric design isn't just a buzzword—it's the foundation of successful products. Learn how we approach product development with a focus on solving real problems and creating meaningful experiences that drive user engagement and business growth.",
      cta: "Discover our methodology",
      readTime: "7 min read"
    },
    {
      category: "INNOVATION LEADERSHIP",
      title: "Staying ahead in a rapidly changing tech landscape",
      description: "Innovation requires more than just adopting new technologies. It demands a strategic approach to understanding market needs, user behavior, and emerging trends that shape the future of digital experiences and business transformation.",
      cta: "Explore innovation strategies",
      readTime: "6 min read"
    }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Innovation First",
      description: "We constantly push boundaries to create solutions that didn't exist before, always staying ahead of technological trends and market demands."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "User-Centric Design",
      description: "Every product we build starts with understanding user needs and creating experiences that feel natural, intuitive, and delightful."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Excellence",
      description: "We maintain the highest standards in code quality, design, and user experience across all our products and services."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Scalable Growth",
      description: "Our solutions are built to grow with your needs, from startup to enterprise scale with consistent performance and reliability."
    }
  ];

  const stats = [
    { number: "50K+", label: "Users Served Globally", icon: <Users className="w-5 h-5" /> },
    { number: "99.9%", label: "Uptime Guarantee", icon: <Shield className="w-5 h-5" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="w-5 h-5" /> },
    { number: "10+", label: "Years Combined Experience", icon: <Award className="w-5 h-5" /> }
  ];

  const testimonials = [
    {
      quote: "Ripe Hash transformed our digital infrastructure with their innovative approach and exceptional technical expertise.",
      author: "Sarah Chen",
      role: "CTO, TechCorp",
      company: "Fortune 500 Company"
    },
    {
      quote: "Their ability to simplify complex technology while maintaining enterprise-grade security is unmatched.",
      author: "Michael Rodriguez",
      role: "Head of Engineering",
      company: "Global Fintech Leader"
    },
    {
      quote: "Working with Ripe Hash has accelerated our product development timeline by 40% while improving quality.",
      author: "Emily Johnson",
      role: "Product Director",
      company: "Healthcare Innovation"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-gray-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img 
                src="/Group 2201.png" 
                alt="Ripe Hash - Technology Made Simple" 
                className="h-7 w-auto"
              />
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('founders')}
                className="text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium"
              >
                Leadership
              </button>
              <button 
                onClick={() => scrollToSection('products')}
                className="text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium"
              >
                Products
              </button>
              <button 
                onClick={() => scrollToSection('insights')}
                className="text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium"
              >
                Insights
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium"
              >
                Contact
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <Sun className="w-4 h-4 text-yellow-500" />
                ) : (
                  <Moon className="w-4 h-4 text-gray-600" />
                )}
              </button>
              
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                ) : (
                  <Menu className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-slate-800">
            <div className="px-4 py-2 space-y-1">
              {['about', 'services', 'founders', 'products', 'insights', 'contact'].map((section) => (
                <button 
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium capitalize"
                >
                  {section === 'founders' ? 'Leadership' : section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-16 pb-24 bg-gradient-to-br from-white via-gray-50 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-20">
            <div className="mb-8">
              <div className="flex justify-center mb-12">
                <img 
                  src="/Group 2201.png" 
                  alt="Ripe Hash - Technology Made Simple" 
                  className="h-12 w-auto"
                />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-8 leading-tight tracking-tight">
              Technology Made <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Simple</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
              We are a leading technology parent company dedicated to building innovative products that make complex technology effortless and accessible. Our mission is to bridge the gap between advanced technical capabilities and seamless user experiences, creating solutions that empower individuals and businesses worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-20">
              <button 
                onClick={() => scrollToSection('products')}
                className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Explore Our Products
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-300 text-sm font-semibold hover:border-gray-400 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-slate-800 transition-all duration-300 transform hover:scale-105"
              >
                Learn More About Us
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="flex justify-center mb-2">
                    <div className="text-gray-600 dark:text-gray-400">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-50 dark:bg-slate-800 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <div className="mb-6">
                <div className="w-12 h-1 bg-orange-500 mb-4"></div>
                <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-4">
                  ABOUT RIPE HASH
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
                Pioneering the Future of Technology Accessibility
              </h2>
              
              <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p className="text-lg">
                  Founded with the vision of democratizing technology access, Ripe Hash operates as a parent company focused on developing innovative solutions that simplify complex technological processes. We believe that powerful technology should be intuitive and accessible to everyone, regardless of their technical background.
                </p>
                <p>
                  Our approach combines deep technical expertise with user-centered design principles, ensuring that every product we create not only leverages cutting-edge technology but also provides an exceptional user experience. We are committed to building solutions that solve real-world problems while maintaining the highest standards of quality and reliability.
                </p>
                <p>
                  As a technology parent company, we incubate and develop multiple products under our umbrella, each designed to address specific market needs while adhering to our core philosophy of making technology effortless and accessible for businesses and individuals worldwide.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>ISO 27001 Certified</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>SOC 2 Type II Compliant</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>GDPR Compliant</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-8 animate-slide-up">
              <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-lg text-center">
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">10+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Combined Experience</div>
              </div>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-lg text-center">
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">50K+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Users Served Globally</div>
              </div>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-lg text-center">
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">99.9%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Uptime Guarantee</div>
              </div>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-lg text-center">
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">24/7</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white dark:bg-slate-900 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <div className="mb-6">
              <div className="w-12 h-1 bg-orange-500 mx-auto mb-4"></div>
              <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-4">
                OUR SERVICES
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Comprehensive Technology Solutions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              We provide end-to-end technology solutions designed to streamline operations, enhance user experiences, and drive innovation across various industries.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 p-8 group hover:shadow-xl hover:border-orange-200 dark:hover:border-orange-800 transition-all duration-300 animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="mb-6">
                  <div className="w-8 h-1 bg-orange-500 mb-4"></div>
                  <div className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-4">
                    {service.category}
                  </div>
                  <div className="w-12 h-12 bg-gray-50 dark:bg-slate-700 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-50 dark:group-hover:bg-orange-900/20 transition-colors">
                    <div className="text-gray-700 dark:text-gray-300 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                      {service.icon}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  {service.description}
                </p>
                
                <button className="flex items-center space-x-2 bg-black dark:bg-white text-white dark:text-black px-4 py-2 text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors group-hover:bg-orange-600 dark:group-hover:bg-orange-500 dark:group-hover:text-white">
                  <ArrowRight className="w-4 h-4" />
                  <span>{service.cta}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <div className="mb-6">
              <div className="w-12 h-1 bg-orange-500 mx-auto mb-4"></div>
              <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-4">
                OUR VALUES
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              The Principles That Drive Excellence
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Our core values guide every decision we make and define our commitment to excellence in everything we create.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center bg-white dark:bg-slate-900 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-orange-50 dark:bg-orange-900/20 rounded-lg flex items-center justify-center">
                    <div className="text-orange-600 dark:text-orange-400">
                      {value.icon}
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <div className="mb-6">
              <div className="w-12 h-1 bg-orange-500 mx-auto mb-4"></div>
              <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-4">
                CLIENT TESTIMONIALS
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Trusted by Industry Leaders
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 dark:bg-slate-800 p-8 rounded-lg animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-500">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section id="founders" className="py-24 bg-gray-50 dark:bg-slate-800 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <div className="mb-6">
              <div className="w-12 h-1 bg-orange-500 mx-auto mb-4"></div>
              <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-4">
                LEADERSHIP TEAM
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Visionary Leaders Driving Innovation
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Meet the experienced leaders behind Ripe Hash, bringing together decades of expertise in technology innovation and business strategy.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {founders.map((founder, index) => (
              <div key={index} className="bg-white dark:bg-slate-900 p-8 lg:p-12 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="text-center mb-8">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-orange-100 dark:ring-orange-900/20">
                    <img 
                      src={founder.image} 
                      alt={`${founder.name} - ${founder.role}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {founder.name}
                  </h3>
                  <p className="text-sm text-orange-600 dark:text-orange-400 font-semibold mb-6">
                    {founder.role}
                  </p>
                </div>
                
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  {founder.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="text-xs font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
                    Areas of Expertise
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {founder.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 text-xs font-medium rounded-full border border-orange-200 dark:border-orange-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-white dark:bg-slate-900 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <div className="mb-6">
              <div className="w-12 h-1 bg-orange-500 mx-auto mb-4"></div>
              <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-4">
                OUR PRODUCTS
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Innovative Solutions for Modern Challenges
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Cutting-edge products designed to simplify complex processes and enhance productivity across various use cases and industries.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg shadow-xl overflow-hidden animate-slide-up">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-8 lg:p-12 space-y-8">
                  <div className="mb-6">
                    <div className="w-8 h-1 bg-orange-500 mb-4"></div>
                    <div className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-4">
                      RIPE HASH PRODUCTS
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                      <img 
                        src="/Screenshot 2025-07-04 at 10.22.42 AM.png" 
                        alt="Supaimg - Image Hosting Platform" 
                        className="w-8 h-8 rounded"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Supaimg
                    </h3>
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                    Revolutionary image hosting platform with unlimited storage and instant uploads
                  </h4>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                    Supaimg revolutionizes image hosting by eliminating the complexity typically associated with file management and sharing. Our platform provides instant image uploads without requiring user registration, making it the perfect solution for developers, content creators, and businesses who need reliable, scalable image hosting.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">Instant uploads with no registration required</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">Unlimited storage capacity for all image types</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">Cross-device accessibility and synchronization</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">Developer-friendly API for seamless integration</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">Enterprise-grade security and compliance</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="flex items-center justify-center space-x-2 bg-black dark:bg-white text-white dark:text-black px-6 py-3 text-sm font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105">
                      <ArrowRight className="w-4 h-4" />
                      <span>Try Supaimg</span>
                    </button>
                    <button className="flex items-center justify-center space-x-2 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-300 px-6 py-3 text-sm font-semibold hover:border-gray-400 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                      <Code className="w-4 h-4" />
                      <span>API Documentation</span>
                    </button>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-700 dark:to-slate-600 p-8 lg:p-12 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white dark:bg-slate-800 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                      <img 
                        src="/Screenshot 2025-07-04 at 10.22.42 AM.png" 
                        alt="Supaimg Platform Preview" 
                        className="w-12 h-12 rounded"
                      />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                      Coming Soon
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-sm">
                      Experience the future of image hosting with our revolutionary platform that combines simplicity, reliability, and powerful features in one seamless solution.
                    </p>
                    <div className="mt-6 flex justify-center space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                      <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section id="insights" className="py-24 bg-gray-50 dark:bg-slate-800 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <div className="mb-6">
              <div className="w-12 h-1 bg-orange-500 mx-auto mb-4"></div>
              <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-4">
                INSIGHTS & PERSPECTIVES
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Thought Leadership & Industry Insights
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Our latest thinking on technology trends, product development, and the future of digital innovation.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <div key={index} className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 p-8 group hover:shadow-xl hover:border-orange-200 dark:hover:border-orange-800 transition-all duration-300 animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="mb-6">
                  <div className="w-8 h-1 bg-orange-500 mb-4"></div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                      {insight.category}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-500">
                      {insight.readTime}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 leading-tight group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                  {insight.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  {insight.description}
                </p>
                
                <button className="flex items-center space-x-2 bg-black dark:bg-white text-white dark:text-black px-4 py-2 text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors group-hover:bg-orange-600 dark:group-hover:bg-orange-500 dark:group-hover:text-white">
                  <ArrowRight className="w-4 h-4" />
                  <span>{insight.cta}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white dark:bg-slate-900 scroll-mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <div className="mb-6">
              <div className="w-12 h-1 bg-orange-500 mx-auto mb-4"></div>
              <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-4">
                GET IN TOUCH
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto">
              Let's discuss how our innovative technology solutions can accelerate your digital transformation and drive sustainable growth for your organization.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-2xl mx-auto">
              <div className="bg-gray-50 dark:bg-slate-800 p-6 rounded-lg">
                <div className="flex items-center justify-center w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-lg mx-auto mb-4">
                  <Mail className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Email Us</h3>
                <a 
                  href="mailto:shahidmdzeeshan@gmail.com" 
                  className="text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                >
                  shahidmdzeeshan@gmail.com
                </a>
              </div>
              <div className="bg-gray-50 dark:bg-slate-800 p-6 rounded-lg">
                <div className="flex items-center justify-center w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-lg mx-auto mb-4">
                  <Phone className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Call Us</h3>
                <a 
                  href="tel:+919065813072" 
                  className="text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                >
                  +91 9065813072
                </a>
              </div>
            </div>
            
            <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Start Your Project Today
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-slate-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="/Group 2201.png" 
                  alt="Ripe Hash - Technology Made Simple" 
                  className="h-6 w-auto brightness-0 invert"
                />
              </div>
              <p className="text-sm text-gray-400 mb-6 max-w-md leading-relaxed">
                Building innovative products that make technology effortless and accessible for everyone. We are committed to creating solutions that bridge the gap between complex technical capabilities and seamless user experiences.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:shahidmdzeeshan@gmail.com" className="hover:text-white transition-colors">
                    shahidmdzeeshan@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+919065813072" className="hover:text-white transition-colors">
                    +91 9065813072
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold mb-6 text-white">Company</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">About Us</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">Services</button></li>
                <li><button onClick={() => scrollToSection('founders')} className="hover:text-white transition-colors">Leadership</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">Contact</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold mb-6 text-white">Products & Resources</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><button onClick={() => scrollToSection('products')} className="hover:text-white transition-colors">Supaimg</button></li>
                <li><button onClick={() => scrollToSection('insights')} className="hover:text-white transition-colors">Insights</button></li>
                <li><a href="#" className="hover:text-white transition-colors">API Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support Center</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2025 Ripe Hash. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;