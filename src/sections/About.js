import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCalendar, FiMapPin, FiMail, FiPhone } from 'react-icons/fi';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="section bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.h2
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={variants}
          transition={{ duration: 0.6 }}
          className="section-title text-gray-800 dark:text-white"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={variants}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              Full Stack Developer building scalable systems using Python (FastAPI, Flask) and JavaScript (React, Node.js) in both monolithic and microservice architectures. Skilled in designing RESTful and asynchronous APIs, integrating third-party services, and working with relational (PostgreSQL, MySQL) and NoSQL (MongoDB, Redis) databases.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              Familiar with Docker, CI/CD pipelines, and authentication protocols like OAuth2 and JWT. Led backend development for logistics and HRMS platforms serving enterprise clients. Thrive in Agile teams, with strong focus on performance, security, and maintainable code.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="flex items-center space-x-3 hidden">
                <FiCalendar className="text-primary-light" />
                <span className="text-gray-700 dark:text-gray-300">Born: June 4, 1999</span>
              </div>
              <div className="flex items-center space-x-3">
                <FiMapPin className="text-primary-light" />
                <span className="text-gray-700 dark:text-gray-300">West Sumbawa, Indonesia</span>
              </div>
              <div className="flex items-center space-x-3">
                <FiMail className="text-primary-light" />
                <a
                  href="mailto:yudimaryadi039@gmail.com"
                  className="text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-light transition-colors duration-300"
                >
                  yudimaryadi039@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FiPhone className="text-primary-light" />
                <a
                  href="tel:+6282247044713"
                  className="text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-light transition-colors duration-300"
                >
                  +62 822-4704-4713
                </a>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="resume/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary inline-flex items-center"
              >
                Download Resume
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  ></path>
                </svg>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={variants}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="relative z-10 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Technical Expertise
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary-light mr-2">•</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong>Backend:</strong> Python (FastAPI, Flask), Node.js (Express, NestJS)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-light mr-2">•</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong>Frontend:</strong> React, Next.js, Vue.js, TypeScript
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-light mr-2">•</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong>Database:</strong> PostgreSQL, MySQL, MongoDB, Redis
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-light mr-2">•</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong>DevOps:</strong> Docker, Kubernetes, CI/CD, Microservices
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-light mr-2">•</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong>Mobile:</strong> React Native (cross-platform development)
                  </span>
                </li>
              </ul>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-light to-secondary-light opacity-20 rounded-lg transform translate-x-4 translate-y-4"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;