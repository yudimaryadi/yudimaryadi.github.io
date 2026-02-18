import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink } from 'react-icons/fi';

const CompanyAvatar = ({ src, name }) => {
  const [err, setErr] = React.useState(false);
  const initials = (name || '')
    .split(' ')
    .map(w => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  return (
    <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-primary-light/10 text-primary-light font-semibold">
      {!src || err ? (
        <span>{initials}</span>
      ) : (
        <img
          src={src}
          alt={`${name} logo`}
          className="w-full h-full object-contain"
          onError={() => setErr(true)}
        />
      )}
    </div>
  );
};

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const experiences = [
    // NEW — disanitasi & non-confidential
    {
      title: 'Senior Full-Stack Engineer',
      company: 'Tjakrabirawa Teknologi Indonesia',
      period: 'May 2025 – Present',
      description: [
        'Member of the DevSecOps division focusing on secure, reliable, and automated delivery.',
        'Shipped a ZTNA platform (Zrok-based) enabling zero-trust, policy-driven access with SSO/OIDC & audit trails.',
        'Built the DSO Dashboard for app/server maintenance (deploy/rollback, logs, backups) with RBAC and CI/CD integration.',
        'Developed a Threat Intelligence platform (OSINT + dark-web) with deep search for domain/IP/email and internal leak checks.',
        'Prototyped SCM (Scorecard Management) to track health/performance (SLO/SLA) with AI-based remediation suggestions.',
        'Owned secure SDLC & pipelines: SAST/DAST, dependency & secret scanning, containerization, IaC.',
        'Improved observability & incident response (metrics/logs/traces, alerting, runbooks, post-incident reviews).',
      ],
      stack: ['Next.js', 'Node.js/TS', 'FastAPI', 'Kubernetes', 'CI/CD', 'Zrok (ZTNA)', 'MISP', 'Spiderfoot', 'OnionScan'],
      isConfidential: true,
      logo: '/logos/tjakrabirawa.svg',
      links: [],
    },

    {
      title: 'Sr. Fullstack Engineer',
      company: 'Jobseeker',
      period: 'May 2024 - June 2025',
      description: [
        'Managed a team for maintenance, migrations, and client onboarding.',
        'Built & maintained HRMS for 12 clients (Super Indo, Alfamart, RS Mitra Keluarga, DECA Group, FitHub, etc.).',
        'Planned efforts with PMs, distributed tasks, and delivered weekly progress to stakeholders.',
      ],
      stack: ['Laravel', 'React', 'Node.js', 'PHP (Lumen)', 'MySQL', 'MongoDB', 'Docker', 'API Integrations'],
      logo: '/logos/jobseeker.png',
      links: [],
    },

    {
      title: 'Fullstack Engineer',
      company: 'Jobseeker',
      period: 'July 2023 - July 2024',
      description: [
        'Managed B2B production for customized recruitment features & integrated ATS.',
        'Implemented scalable web solutions on frontend & backend.',
        'Built a bridge system for AWB tracking across expedition services (J&T, JNE, Ninja).',
        'Developed a screening engine to score candidate–job compatibility.',
      ],
      stack: ['Laravel', 'PHP (Lumen)', 'Node.js', 'MySQL'],
      logo: '/logos/jobseeker.png',
      links: [],
    },

    {
      title: 'Product Engineer',
      company: 'Unsircle',
      period: 'May 2022 - July 2023',
      description: [
        'Collaborated with sales & product to gather user data and define roadmap.',
        'Handled frontend, backend, DB, and DevOps using sprint methodology.',
        'Built monthly sales summaries from shipment tracking to inform business decisions.',
      ],
      stack: ['Vue.js', 'Node.js', 'PostgreSQL', 'Firebase', 'Tailwind', 'Agile/Scrum'],
      logo: '/logos/unsircle.png',
      links: [],
    },

    {
      title: 'IT Support Engineer (Internship)',
      company: 'LIPI Kawasan Cibinong (BRIN)',
      period: 'February - April 2021',
      description: [
        'Centralized branch servers into a data center and executed migrations.',
        'Maintained & troubleshot corporate networks and services.',
      ],
      stack: ['Linux', 'IoT', 'Arduino', 'Networking', 'Virtualization', 'Shell', 'Cisco'],
      logo: '/logos/LIPI.png', // atau /logos/lipi.svg
      links: [],
    },
  ];

  return (
    <section id="experience" className="section bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="section-title text-gray-800 dark:text-white"
        >
          Work Experience
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700"></div>

          {/* Experience items */}
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative mb-12 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:ml-0' : 'md:pl-12 md:ml-auto'}`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute top-0 ${index % 2 === 0 ? 'md:right-0' : 'md:left-0'} md:translate-x-1/2 md:-translate-y-1/2 w-6 h-6 rounded-full bg-primary-light border-4 border-white dark:border-gray-900`}
              ></div>

              {/* Card */}
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <CompanyAvatar src={exp.logo} name={exp.company} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white truncate">{exp.title}</h3>
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="text-primary-light font-medium">{exp.company}</p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4">{exp.period}</p>

                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary-light mr-2">•</span>
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech stack badges */}
                {exp.stack && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.stack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs font-medium px-2 py-1 rounded-full bg-primary-light bg-opacity-10 text-primary-light"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* CTA links */}
                {exp.links && exp.links.length > 0 && (
                  <div className="flex flex-wrap gap-3">
                    {exp.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline inline-flex items-center text-sm"
                      >
                        <FiExternalLink className="mr-2" />
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;