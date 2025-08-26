import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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

const Education = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const educationData = [
    {
      institution: 'Hacktiv8 x AMMAN Scholarship',
      degree: 'Fullstack Javascript',
      period: 'August 2021 - April 2022',
      score: '84.4 (Graduates)',
      description: [
        'Developed web applications, learned full-stack fundamentals',
        'Gained experience with React, Node.js, microservices, Docker',
      ],
      logo: '/logos/hacktiv8.png',
      file : 'https://ik.imagekit.io/xfzh5xkmu/project/hacktiv8.pdf?updatedAt=1747748948025',
    },
    {
      institution: 'IPB University',
      degree: 'Diploma Degree in Computer Engineering',
      period: 'August 2018 - April 2021',
      score: 'GPA: 3.40',
      description: [
        'Focus on hardware, networking, software development, IoT, and big data',
        'Thesis: "Development of a Road Detection System Prototype Using a LiDAR Sensor at LIPI"',
      ],
      logo: '/logos/ipb.png',
    },
  ];

  return (
    <section id="education" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="section-title text-gray-800 dark:text-white"
        >
          Education
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-full bg-primary-light bg-opacity-20 mr-4">
                    <CompanyAvatar src={edu.logo} name={edu.institution} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {edu.institution}
                  </h3>
                </div>
                <p className="text-primary-light font-medium mb-2">{edu.degree}</p>
                <p className="text-gray-600 dark:text-gray-400 mb-2">{edu.period}</p>
                <p className="text-gray-700 dark:text-gray-300 font-medium mb-4">{edu.score}</p>
                <ul className="space-y-2">
                  {edu.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary-light mr-2">•</span>
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {
                edu.file ? (
                  <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                    <a href={edu.file} target="_blank" rel="noopener noreferrer" className="text-primary-light hover:underline">
                      View Sertificate
                    </a>
                  </div>
                ) : null
              }
              {/* <div className="h-2 bg-gradient-to-r from-primary-light to-secondary-light"></div> */}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;