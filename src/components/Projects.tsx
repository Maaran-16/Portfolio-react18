import React from "react";
import { ExternalLink, Github, Eye } from "lucide-react";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "UrbanEdge - Full Stack E-Commerce Fashion Store",
      description:
        "A fully functional fashion e-commerce platform built from scratch in 2 weeks. Features Stripe-powered payments with full cart & checkout flow, dynamic CMS-driven product data via Strapi, secure login/register with NextAuth.js, mobile-friendly fast-loading UI with SEO optimization, and real-time email and error monitoring integrations.",
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Zustand",
        "TanStack Query",
        "Strapi CMS",
        "PostgreSQL",
        "Railway",
        "Stripe",
        "NextAuth.js",
        "Resend",
        "AWS S3",
        "Sentry",
        "Cloudflare",
        "GoDaddy",
        "Zoho",
      ],
      liveUrl: "https://www.maaradev.shop/",
      githubUrl: "https://github.com/Maaran-16",
      featured: true,
      period: "Jul 2025 - Jul 2025",
      location: "Chennai, India",
    },
    {
      title: "Personal Portfolio Website",
      description:
        "A modern, animated developer portfolio to showcase projects, skills, and experience. Features interactive layout with Framer Motion animations for smooth transitions, styled using ShadCN UI components and utility-first Tailwind CSS, fully responsive, SEO-optimized, and built with a clean code structure.",
      image:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Next.js", "Tailwind CSS", "ShadCN UI", "Framer Motion"],
      liveUrl: "https://maaraportfolio.vercel.app/",
      githubUrl: "https://github.com/Maaran-16",
      featured: true,
      period: "Jan 2025 - Jan 2025",
      location: "Chennai, India",
    },
    {
      title: "Movie Discovery App",
      description:
        "Developed a responsive movie discovery app using React 18, Vite, and Tailwind CSS. Integrated TMDB API for real-time movie search and metadata display, used Appwrite to manage trending movies, store search history, and handle backend services, implemented performance features like lazy loading, debounced input, and error handling.",
      image:
        "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: [
        "React 18",
        "Vite",
        "Appwrite",
        "TMDB API",
        "Tailwind CSS",
      ],
      liveUrl: "https://react-movie-app-orcin.vercel.app/",
      githubUrl: "https://github.com/Maaran-16",
      featured: false,
      period: "Aug 2025 - Aug 2025",
      location: "Chennai, India",
    },
    {
      title: "Cbazaar Web Portal",
      description:
        "Led the frontend development for Cbazaar's web portal, improving repeat purchases by 18%. Transformed UX wireframes into accessible, responsive UIs using HTML5, CSS3, and JavaScript. Reduced bounce rates by optimizing rendering strategies and improving user interaction.",
      image:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Responsive Design",
        "Cross-browser Testing",
        "Performance Optimization",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/Maaran-16",
      featured: false,
      period: "Aug 2019 - Dec 2020",
      location: "Chennai, India",
    },
    {
      title: "SEO-Optimized UI Components",
      description:
        "Built modular and SEO-optimized UI components following W3C standards. Improved organic traffic by 20% through on-page SEO and site performance tuning. Collaborated with designers and testers to deliver polished frontend interfaces.",
      image:
        "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "SEO",
        "W3C Standards",
        "Performance Optimization",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/Maaran-16",
      featured: false,
      period: "Dec 2018 - May 2019",
      location: "Chennai, India",
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section
      id="projects"
      className="section bg-gradient-to-b from-purple-900/10 to-transparent"
    >
      <div className="container">
        <h2 className="section-title animate-fadeInUp">Featured Projects</h2>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className="card group hover:scale-105 transition-all duration-500 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300"
                    >
                      <Eye size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-3 gradient-text">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex items-center text-sm text-gray-400 mb-4">
                <span className="mr-4">{project.period}</span>
                <span>{project.location}</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full border border-white/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-300"
                >
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
                >
                  <Github size={16} />
                  <span>Source Code</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="animate-fadeInUp">
          <h3 className="text-3xl font-bold text-center mb-12 gradient-text">
            Other Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={project.title}
                className="card group hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex items-center text-xs text-gray-400 mb-4">
                  <span className="mr-4">{project.period}</span>
                  <span>{project.location}</span>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-white/10 rounded-full border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs text-gray-400">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex justify-between items-center">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 transition-colors duration-300"
                  >
                    <ExternalLink size={16} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
