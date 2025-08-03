import React from "react";
import { Code, Database, Globe, Server, Palette } from "lucide-react";

const About: React.FC = () => {
  const skills = [
    {
      category: "Frontend",
      icon: <Globe className="w-8 h-8" />,
      technologies: [
        "HTML5",
        "ReactJS",
        "JavaScript (ES6+)",
        "CSS3",
        "Tailwind CSS",
        "Bootstrap 5",
        "Material UI",
        "jQuery",
        "Shadcn UI",
        "WOW.js",
        "Responsive Design",
        "Web Accessibility (WCAG)",
        "Cross-Browser Testing",
      ],
    },
    {
      category: "State Management & Data",
      icon: <Code className="w-8 h-8" />,
      technologies: ["Zustand", "TanStack Query", "RESTful APIs", "Axios"],
    },
    {
      category: "Backend & Platforms",
      icon: <Server className="w-8 h-8" />,
      technologies: [
        "Strapi CMS",
        "PostgreSQL",
        "WordPress",
        "Shopify",
        "Node.js (basic)",
      ],
    },
    {
      category: "DevOps & Tools",
      icon: <Database className="w-8 h-8" />,
      technologies: [
        "AWS S3 (IAM, Storage)",
        "Railway",
        "Git",
        "GitHub",
        "Bitbucket",
        "Sentry",
        "Resend mail",
        "Cloudflare",
        "GoDaddy",
        "Zoho Mail",
      ],
    },
    {
      category: "Other Skills",
      icon: <Palette className="w-8 h-8" />,
      technologies: [
        "Performance Optimization",
        "Debugging",
        "UI/UX Design",
        "SEO Optimization",
        "Testing",
        "Problem Solving",
        "CI/CD (basic)",
      ],
    },
  ];

  return (
    <section
      id="about"
      className="section bg-gradient-to-b from-transparent to-purple-900/10"
    >
      <div className="container">
        <h2 className="section-title animate-fadeInUp">About Me</h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fadeInLeft">
            <div className="relative">
              <div className="w-full max-w-md mx-auto">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-8 backdrop-blur-sm border border-white/10">
                  <div className="w-full h-full rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                    <span className="text-6xl font-bold text-white">MM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-fadeInRight">
            <h3 className="text-3xl font-bold mb-6 gradient-text">
              Senior Software Engineer
            </h3>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I'm a Senior Software Engineer with over 5 years of experience
              specializing in developing scalable, performant, and responsive
              web applications using React.js, Next.js, TypeScript, and Tailwind
              CSS.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I'm proficient in the full project lifecycle, from design and
              development to deployment and monitoring. I have experience
              delivering production-grade solutions with real-world DevOps
              integrations, third-party APIs, CMS platforms, and UI/UX best
              practices.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                <span className="text-purple-300 font-semibold">
                  5+ Years Experience
                </span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                <span className="text-blue-300 font-semibold">
                  Production Solutions
                </span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                <span className="text-green-300 font-semibold">
                  Modern Tech Stack
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="animate-fadeInUp">
          <h3 className="text-3xl font-bold text-center mb-12 gradient-text">
            Skills & Technologies
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.category}
                className="card hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500/20 to-blue-500/20 mr-4">
                    {skill.icon}
                  </div>
                  <h4 className="text-xl font-semibold">{skill.category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-white/10 rounded-full border border-white/20 hover:bg-white/20 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
