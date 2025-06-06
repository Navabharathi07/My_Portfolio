import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Download, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const skills = [
    { name: 'C', category: 'Programming' },
    { name: 'C#', category: 'Programming' },
    { name: 'Java', category: 'Programming' },
    { name: 'HTML', category: 'Web Development' },
    { name: 'CSS', category: 'Web Development' },
    { name: 'JavaScript', category: 'Web Development' },
    { name: 'PHP', category: 'Web Development' },
    { name: 'MySQL', category: 'Database' },
    { name: 'Unity', category: 'Tools' },
    { name: 'Blender', category: 'Tools' },
  ];

  const projects = [
    {
      title: 'Virtual Herbal Garden for Ayurvedic Plants',
      description: 'An interactive 3D garden showcasing medicinal plants, built using Unity and Blender.',
      role: 'Project Leader',
      features: ['Medicinal data', 'Cultivation methods', 'User interactivity'],
      tech: ['Unity', 'Blender', 'C#']
    },
    {
      title: 'Smart Offline Purchasing System',
      description: 'A full-stack e-commerce platform for local handmade products.',
      role: 'Web Designer',
      features: ['Product catalog', 'Secure payment', 'Artisan profiles'],
      tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL']
    },
    {
      title: 'MS Azure Hands-on Practice',
      description: 'Practical exercises and solutions related to Microsoft Azure cloud concepts.',
      role: 'Developer',
      features: ['Cloud computing', 'Azure services', 'Hands-on labs'],
      tech: ['Microsoft Azure', 'Cloud Computing'],
      github: 'https://github.com/Navabharathi07/MS_AZURE-HANDS-ON-'
    }
  ];

  const certifications = [
    { name: 'The Hindu Group – Standardized Test of English Proficiency', year: '2024' },
    { name: 'NPTEL – Ethical Hacking', year: '2024' },
    { name: 'VYTCDC – Full Stack Development', year: '2023' },
    { name: 'Workshop: "Computer Vision" – Karpagam College of Education', year: '2023' }
  ];

  const education = [
    {
      degree: 'B.Tech – AI & Data Science',
      institution: 'M. Kumarasamy College of Engineering, Karur',
      status: 'Pursuing',
      score: '7.5 CGPA'
    },
    {
      degree: 'High School Diploma',
      institution: 'Secondary Education',
      status: '2022',
      score: '79.1%'
    },
    {
      degree: 'Secondary School Diploma',
      institution: 'Secondary Education',
      status: '2020',
      score: '94.2%'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-sm border-b border-slate-700/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-white">
              Navabharathi J
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Certifications', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    activeSection === item.toLowerCase()
                      ? 'text-blue-400'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-slate-700">
              <div className="flex flex-col space-y-2 pt-4">
                {['Home', 'About', 'Skills', 'Projects', 'Certifications', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-left text-slate-300 hover:text-white py-2"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            {/* Profile Image */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="w-48 h-48 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
                  <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                    <div className="w-44 h-44 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-6xl font-bold">
                      NJ
                    </div>
                  </div>
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full blur-xl"></div>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
              Navabharathi J
            </h1>
            <p className="text-xl md:text-2xl text-blue-300 mb-8 font-medium">
              AI & Data Science Enthusiast | Tech Creator | Web Designer
            </p>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Passionate about creating real-world innovations using cutting-edge technology. 
              Currently pursuing B.Tech in AI & Data Science with a focus on machine learning and data-driven solutions.
            </p>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-12">
              <a
                href="https://linkedin.com/in/navabharathi-j-91464b31b"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/Navabharathi07"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-700 hover:bg-gray-600 rounded-full text-white transition-all duration-300 hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a
                href="mailto:bharathinava02@gmail.com"
                className="p-3 bg-purple-600 hover:bg-purple-700 rounded-full text-white transition-all duration-300 hover:scale-110"
              >
                <Mail size={24} />
              </a>
            </div>

            <Button
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105"
            >
              View My Work
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-slate-800/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-white text-center mb-16">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-blue-300 mb-6">My Story</h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Navabharathi J is currently pursuing a B.Tech in Artificial Intelligence and Data Science 
                from M. Kumarasamy College of Engineering, Karur. With strong academic grounding and a deep 
                interest in machine learning and data-driven problem solving, Navabharathi brings enthusiasm, 
                adaptability, and a commitment to continuous learning in every project.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="px-4 py-2 bg-blue-600/20 text-blue-300 rounded-full text-sm">Communication</span>
                <span className="px-4 py-2 bg-purple-600/20 text-purple-300 rounded-full text-sm">Adaptability</span>
                <span className="px-4 py-2 bg-green-600/20 text-green-300 rounded-full text-sm">Continuous Learning</span>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-blue-300 mb-6">Education</h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card key={index} className="bg-slate-700/50 border-slate-600">
                    <CardContent className="p-6">
                      <h4 className="text-xl font-semibold text-white mb-2">{edu.degree}</h4>
                      <p className="text-slate-300 mb-2">{edu.institution}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-blue-300">{edu.status}</span>
                        <span className="text-green-400 font-semibold">{edu.score}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Skills & Technologies</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="bg-slate-700/50 border-slate-600 hover:bg-slate-600/50 transition-all duration-300 hover:scale-105 group">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-slate-400">{skill.category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-slate-800/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-slate-700/50 border-slate-600 hover:bg-slate-600/50 transition-all duration-300 hover:scale-105 group">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-sm text-blue-300 font-medium">Role: </span>
                    <span className="text-sm text-slate-300">{project.role}</span>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-white mb-2">Key Features:</h4>
                    <ul className="text-sm text-slate-300 list-disc list-inside space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-blue-600/20 text-blue-300 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <Github size={16} />
                      <span className="text-sm">View on GitHub</span>
                      <ExternalLink size={12} />
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Certifications & Events</h2>
          
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-slate-700/50 border-slate-600 hover:bg-slate-600/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-white">{cert.name}</h3>
                    <span className="text-blue-300 font-medium">{cert.year}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-800/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Get In Touch</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-blue-300 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="text-blue-400" size={24} />
                  <span className="text-slate-300">+91 97907 35878</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Mail className="text-blue-400" size={24} />
                  <a href="mailto:bharathinava02@gmail.com" className="text-slate-300 hover:text-blue-300 transition-colors">
                    bharathinava02@gmail.com
                  </a>
                </div>
                
                <div className="flex items-start space-x-4">
                  <MapPin className="text-blue-400 mt-1" size={24} />
                  <span className="text-slate-300">
                    D.no:2-2-68D M.R.Nagar, T.Kallupatti,<br />
                    Madurai (dt), Peraiyur(tk), Pin: 625702
                  </span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://linkedin.com/in/navabharathi-j-91464b31b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://github.com/Navabharathi07"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-700 hover:bg-gray-600 rounded-full text-white transition-all duration-300 hover:scale-110"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-blue-300 mb-6">Send a Message</h3>
              
              <form className="space-y-6">
                <div>
                  <Input
                    placeholder="Your Name"
                    className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400"
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400"
                  />
                </div>
                
                <div>
                  <Textarea
                    placeholder="Your Message"
                    rows={4}
                    className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400"
                  />
                </div>
                
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-700">
        <div className="container mx-auto text-center">
          <p className="text-slate-400">
            © 2024 Navabharathi J. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
