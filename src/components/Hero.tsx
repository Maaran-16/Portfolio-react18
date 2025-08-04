import React from "react";
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center animate-fadeInUp">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-1 animate-glow">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                <span className="text-4xl font-bold gradient-text">MM</span>
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block text-white">Hi, I'm</span>
            <span className="block gradient-text">Murasoli Maaran</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Senior Software Engineer with over 5 years of experience developing
            scalable, performant, and responsive web applications using modern
            technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-outline">
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/Maaran-16"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/maara07/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:maaravj16@gmail.com"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Mail size={24} />
            </a>
            <a
              href="/assets/doc/Maaran_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <ExternalLink size={24} />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <a href="#about" className="inline-block p-2">
              <ArrowDown size={32} className="text-gray-400" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
