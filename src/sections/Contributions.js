import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGitPullRequest } from 'react-icons/fi';

const Contributions = () => {
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

  const contributions = [
    {
      company: 'Jobseeker',
      description: 'Transformed the recruitment process for clients who previously relied on Google Forms and Google Drive to collect and review candidate data. Successfully developed an integrated Applicant Tracking System (ATS) platform to centralize candidate management.',
      achievements: [
        'Enabled automated candidate data collection and CV access within a single dashboard.',
        'Developed a screening system that calculates compatibility scores between candidate profiles and job requirements, allowing for efficient sorting and prioritization.',
      ],
    },
    {
      company: 'Unsircle',
      description: 'Built a monthly sales summary system based on shipment tracking numbers (AWB), allowing businesses to analyze top-performing cities and highest-grossing sellers.',
      achievements: [
        'Delivered valuable insights for business decisions and logistics planning.',
        'Educated KOLs on the importance of digital marketing in promoting their products.',
      ],
    },
    {
      company: 'LIPI (Indonesian Institute of Sciences)',
      description: 'Centralized server infrastructure from multiple branch-specific servers to a single data center server.',
      achievements: [
        'Streamlined access across branches and reduced operational complexity.',
        'Improved long-term system maintenance, security, and performance.',
      ],
    },
  ];

  return (
    <section id="contributions" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="section-title text-gray-800 dark:text-white"
        >
          Contributions
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-8"
        >
          {contributions.map((contribution, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-full bg-primary-light bg-opacity-20 mr-4">
                  <FiGitPullRequest className="text-primary-light" size={20} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {contribution.company}
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {contribution.description}
              </p>
              <ul className="space-y-2">
                {contribution.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-primary-light mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contributions;