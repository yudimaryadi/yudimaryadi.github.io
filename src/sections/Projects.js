import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi';
import ImageModal from '../components/ImageModal';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [activeFilter, setActiveFilter] = useState('all');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [modalInitialIndex, setModalInitialIndex] = useState(0);

  const openImageModal = (images, initialIndex = 0) => {
    setModalImages(images);
    setModalInitialIndex(initialIndex);
    setModalOpen(true);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // === UPDATED PROJECTS ===
  const projects = [
    {
      title: 'HRMS Platform Management & Career Sites',
      description:
        'Led development and migration of HRMS (V2 → V5) and enterprise career portals for Super Indo, Mitra Keluarga, Paramount Land, and FitHub. Integrated recruitment workflows, organizational structure, and payroll; supported 10K+ employees and thousands of monthly applicants with zero-downtime cutovers.',
      tags: ['Frontend', 'Backend', 'Enterprise'],
      technologies: ['React', 'Vue.js', 'PHP (Lumen)', 'Node.js', 'MySQL', 'Docker', 'API Integrations'],
      images: [
        '/images/featured/cs-superindo.png',
        '/images/featured/cs-mika.png',
        '/images/featured/cs-paramount.png',
        '/images/featured/cs-fithub.png',
        '/images/featured/hrms-superindo.png'
      ],
      links: [
        { url: 'https://superindo.jobseeker.software', label: 'Careers — Super Indo' },
        { url: 'https://karier.mitrakeluarga.com', label: 'Careers — Mitra Keluarga' },
        { url: 'https://career-paramount.jobseeker.software', label: 'Careers — Paramount' },
        { url: 'https://fithub.jobseeker.software', label: 'Careers — FitHub' },
        { url: 'https://hrms-superindo.jobseeker.software/', label: 'HRMS — Super Indo' },
        { url: 'https://remsy.mitrakeluarga.com/', label: 'HRMS — Mitra Keluarga' },
      ],
    },
    {
      title: 'JualKirim — Logistics Bridge Platform',
      description:
        'Built and managed a bridge system to track AWB across multiple expeditions (J&T, JNE, Ninja, etc.). Unified dashboard reduced manual checking by ~70% and streamlined B2B operations for SME sellers.',
      tags: ['Frontend', 'Backend', 'DevOps'],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Material UI', 'Docker', 'Kubernetes', 'CI/CD'],
      images: [
        '/images/featured/jualkirim-1.png',
        '/images/featured/jualkirim.png'
      ],
      links: [{ url: 'https://www.jualkirim.com/', label: 'Visit JualKirim' }],
    },
    {
      title: 'JastipQue — Personal Shopping Web App',
      description:
        'Web app untuk jasa titip (jastip). Pelanggan dapat request barang dari event besar; partner jastip memproses pembelian dan pengiriman. Dibangun mobile-first dan terintegrasi Midtrans.',
      tags: ['Frontend', 'Backend'],
      technologies: ['React', 'Bootstrap', 'Node.js', 'PostgreSQL', 'Firebase', 'Midtrans'],
      images: ['/images/featured/jastipque.png'],
      links: [
        { url: 'https://jastipque-app.web.app/', label: 'Client' },
        { url: 'https://jastipqueadmin.web.app/', label: 'Admin' },
      ],
    },
    {
      title: 'Barokah LPG — QR-based Gas Distribution',
      description:
        'Aplikasi web untuk pendistribusian LPG bersubsidi berbasis QR code. Setiap KK menerima QR unik untuk validasi dan mencegah double claim di tingkat RT/RW.',
      tags: ['Frontend', 'Backend'],
      technologies: ['Next.js', 'Node.js', 'Firebase', 'TailwindCSS'],
      images: [
        '/images/featured/barokah-lpg-5.jpeg',
        '/images/featured/barokah-lpg-2.jpeg',
        '/images/featured/barokah-lpg-3.jpeg',
        '/images/featured/barokah-lpg-4.jpeg'
      ],
      links: [{ url: 'https://barokah-lpg.vercel.app', label: 'Live App' }],
    },
    {
      title: 'MoneYudi — Personal Finance + Vocabulary',
      description:
        'Personal finance tracker dengan budget, laporan, dan fitur English vocabulary harian pada dashboard. Fokus pada kecepatan input transaksi dan insight sederhana.',
      tags: ['Frontend', 'Backend'],
      technologies: ['React', 'Node.js', 'MongoDB', 'TailwindCSS'],
      images: [
        '/images/featured/moneyudi.png',
        'images/featured/moneyudi-5.jpeg',
        'images/featured/moneyudi-6.jpeg',
        '/images/featured/moneyudi-4.jpeg',
        '/images/featured/moneyudi-3.jpeg',
        '/images/featured/moneyudi-2.jpeg',
        '/images/featured/moneyudi-1.jpeg',
      ],
      links: [{ url: 'https://moneyudi.vercel.app', label: 'Live App' }],
    },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.tags.includes(activeFilter));

  const filters = ['all', 'Frontend', 'Backend', 'Mobile', 'DevOps', 'Enterprise'];

  return (
    <section id="projects" className="section bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="section-title text-gray-800 dark:text-white"
        >
          Featured Projects
        </motion.h2>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeFilter === filter
                  ? 'bg-primary-light text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 mx-2 md:mx-0"
            >
              <div className="relative h-48 bg-gray-200 dark:bg-gray-700 cursor-pointer group" onClick={() => openImageModal(project.images)}>
                {project.images?.length > 0 ? (
                  <>
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      loading="lazy"
                      className={`w-full h-full transition-transform duration-300 group-hover:scale-105 ${
                        project.title.includes('Barokah LPG') || project.title.includes('MoneYudi') 
                          ? 'object-contain bg-gray-100 dark:bg-gray-600' 
                          : 'object-cover'
                      }`}
                    />
                    {project.images.length > 1 && (
                      <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded-full">
                        +{project.images.length - 1}
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                      <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium">
                        Click to preview
                      </span>
                    </div>
                  </>
                ) : (
                  <div className="h-full w-full flex items-center justify-center">
                    <FiCode size={48} className="text-gray-500 dark:text-gray-400" />
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium px-2 py-1 rounded-full bg-primary-light bg-opacity-10 text-primary-light"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.links?.length > 0 && (
                  <div className="flex flex-wrap gap-3">
                    {project.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary-light bg-opacity-10 text-primary-light hover:bg-opacity-20 transition-colors duration-300"
                      >
                        <FiExternalLink size={16} className="mr-1" />
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Github CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/yudimaryadi"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline inline-flex items-center"
          >
            <FiGithub className="mr-2" />
            View More on GitHub
          </a>
        </motion.div>

        {/* Image Modal */}
        <ImageModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          images={modalImages}
          initialIndex={modalInitialIndex}
        />
      </div>
    </section>
  );
};

export default Projects;
