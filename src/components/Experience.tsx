import React from "react";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Software Developer",
      company: "Mako IT Lab",
      location: "Chennai, India",
      period: "Jan 2021 - Present",
      description: [
        "Developed and maintained high-performance React & Next.js apps for e-commerce and media platforms",
        "Optimized frontend performance by 30% using SSR, lazy loading, and bundle splitting",
        "Built reusable component libraries with Tailwind CSS and improved developer efficiency",
        "Integrated Stripe, Razorpay, and email services for transactional workflows",
        "Conducted code reviews, mentored junior developers, and led UI design decisions",
        "Collaborated with backend and design teams using Git, GitHub, and Bitbucket for cross-functional delivery",
      ],
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Stripe",
        "Razorpay",
        "Git",
        "GitHub",
        "Bitbucket",
      ],
    },
    {
      title: "UI Developer",
      company: "Net Avenue Technologies",
      location: "Chennai, India",
      period: "Aug 2019 - Dec 2020",
      description: [
        "Transformed UX wireframes into accessible, responsive UIs using HTML5, CSS3, and JavaScript",
        "Led the frontend for Cbazaar's web portal, improving repeat purchases by 18%",
        "Reduced bounce rates by optimizing rendering strategies and improving user interaction",
        "Implemented version control with Git and handled cross-browser compatibility fixes",
      ],
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Git",
        "Responsive Design",
        "Cross-browser Testing",
      ],
    },
    {
      title: "Web Developer Trainee",
      company: "DOTS IT SOLUTIONS",
      location: "Chennai, India",
      period: "Dec 2018 - May 2019",
      description: [
        "Built modular and SEO-optimized UI components following W3C standards",
        "Improved organic traffic by 20% through on-page SEO and site performance tuning",
        "Collaborated with designers and testers to deliver polished frontend interfaces",
      ],
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "SEO",
        "W3C Standards",
        "Performance Optimization",
      ],
    },
  ];

  const education = [
    {
      degree: "MCA in Computer Application",
      institution: "GuruNanak College",
      location: "Chennai, India",
      period: "Aug 2015 - Apr 2018",
      description:
        "Master of Computer Applications with focus on software development and computer applications.",
    },
    {
      degree: "B.SC in Computer Science",
      institution: "Bharathidasan University",
      location: "Trichy, India",
      period: "Jul 2011 - Apr 2014",
      description:
        "Bachelor of Science in Computer Science with comprehensive understanding of computer fundamentals.",
    },
    {
      degree: "HSC",
      institution: "Ramakrishna Higher Secondary School",
      location: "Kothandapuram, India",
      period: "Aug 2009 - Apr 2011",
      description:
        "Higher Secondary Certificate with focus on science and mathematics.",
    },
  ];

  return (
    <section
      id="experience"
      className="section bg-gradient-to-b from-transparent to-blue-900/10"
    >
      <div className="container">
        <h2 className="section-title animate-fadeInUp">
          Experience & Education
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div className="animate-fadeInLeft">
            <h3 className="text-3xl font-bold mb-8 gradient-text">
              Work Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="card hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-1">
                        {exp.title}
                      </h4>
                      <p className="text-purple-400 font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-right text-sm text-gray-400">
                      <div className="flex items-center mb-1">
                        <Calendar size={14} className="mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={14} className="mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="text-gray-300 text-sm flex items-start"
                      >
                        <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="animate-fadeInRight">
            <h3 className="text-3xl font-bold mb-8 gradient-text">Education</h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="card hover:scale-105 transition-all duration-300"
                >
                  <h4 className="text-xl font-semibold text-white mb-2">
                    {edu.degree}
                  </h4>
                  <p className="text-purple-400 font-medium mb-2">
                    {edu.institution}
                  </p>
                  <div className="flex items-center text-sm text-gray-400 mb-4">
                    <Calendar size={14} className="mr-1" />
                    <span className="mr-4">{edu.period}</span>
                    <MapPin size={14} className="mr-1" />
                    <span>{edu.location}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{edu.description}</p>
                </div>
              ))}

              {/* Contact Information */}
              <div className="card hover:scale-105 transition-all duration-300">
                <h4 className="text-xl font-semibold text-white mb-4">
                  Contact Information
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Phone</span>
                    <span className="text-purple-400">+917904884071</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Email</span>
                    <span className="text-purple-400">maaravj16@gmail.com</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Location</span>
                    <span className="text-purple-400">
                      Chennai, Tamil Nadu, India
                    </span>
                  </div>
                </div>
              </div>

              {/* Skills Progress */}
              <div className="card hover:scale-105 transition-all duration-300">
                <h4 className="text-xl font-semibold text-white mb-4">
                  Skill Proficiency
                </h4>
                <div className="space-y-4">
                  {[
                    { skill: "React/Next.js", level: 95 },
                    { skill: "TypeScript/JavaScript", level: 90 },
                    { skill: "Tailwind CSS/UI Design", level: 88 },
                    { skill: "Performance Optimization", level: 85 },
                    { skill: "DevOps & Deployment", level: 80 },
                  ].map((item) => (
                    <div key={item.skill}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-300">
                          {item.skill}
                        </span>
                        <span className="text-sm text-purple-400">
                          {item.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${item.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
