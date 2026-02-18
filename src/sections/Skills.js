import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaPython, FaJs, FaPhp, FaHtml5, FaNode, FaReact, FaVuejs, FaDocker, FaAws,
} from 'react-icons/fa';
import {
  SiTypescript, SiFastapi, SiFlask, SiExpress, SiLaravel, SiSequelize, SiRedis,
  SiGraphql, SiJquery, SiMysql, SiPostgresql, SiMongodb, SiRabbitmq, SiKubernetes,
  SiGitlab, SiGooglecloud
} from 'react-icons/si';

const levelColor = {
  Expert: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400',
  Advanced: 'bg-blue-500/15 text-blue-600 dark:text-blue-400',
  Intermediate: 'bg-amber-500/15 text-amber-600 dark:text-amber-400',
  Familiar: 'bg-gray-500/15 text-gray-600 dark:text-gray-400',
};

const Tag = ({ children, className = '' }) => (
  <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-medium ${className}`}>
    {children}
  </span>
);

const SkillCard = ({ skill }) => {
  const Icon = skill.icon;
  const initials = skill.name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35 }}
      className="group bg-white dark:bg-gray-700/60 rounded-lg sm:rounded-xl px-3 py-2 sm:px-4 sm:py-3 shadow md:hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
    >
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-md bg-primary-light/10 flex items-center justify-center text-primary-light shrink-0">
          {Icon ? (
            <Icon role="img" aria-label={`${skill.name} icon`} className="w-4 h-4 sm:w-5 sm:h-5" />
          ) : (
            <span className="text-[10px] sm:text-xs font-semibold">{initials}</span>
          )}
          <span className="sr-only">{skill.name}</span>
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
            <p className="font-medium text-[13px] sm:text-sm text-gray-800 dark:text-gray-100 truncate max-w-[160px] sm:max-w-none">
              {skill.name}
            </p>
            {skill.isCore && <Tag className="bg-primary-light/15 text-primary-light">Core</Tag>}
            {skill.level && <Tag className={levelColor[skill.level] || levelColor.Familiar}>{skill.level}</Tag>}
          </div>
          <div className="mt-0.5 sm:mt-1 flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] text-gray-500 dark:text-gray-300">
            {skill.years ? <span>{skill.years}y</span> : null}
            {skill.lastUsed ? <span>• last used {skill.lastUsed}</span> : null}
            {skill.mappedTo ? <span className="truncate">• {skill.mappedTo}</span> : null}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [showCoreOnly, setShowCoreOnly] = useState(true);

  // accordion open state per kategori (mobile only)
  const [openMobile, setOpenMobile] = useState(() => new Set([0,1,2])); // default buka 3 pertama
  const toggleMobile = (idx) =>
    setOpenMobile(prev => {
      const next = new Set(prev);
      next.has(idx) ? next.delete(idx) : next.add(idx);
      return next;
    });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
  };

  const skillCategories = useMemo(() => [
    {
      title: 'Core Languages',
      skills: [
        { name: 'JavaScript', icon: FaJs, level: 'Advanced', years: 3, lastUsed: '2025', isCore: true, mappedTo: 'All Projects' },
        { name: 'TypeScript', icon: SiTypescript, level: 'Advanced', years: 3, lastUsed: '2025', isCore: true, mappedTo: 'Enterprise Apps' },
        { name: 'Python', icon: FaPython, level: 'Advanced', years: 2, lastUsed: '2025', isCore: true, mappedTo: 'Backend APIs' },
        { name: 'PHP', icon: FaPhp, level: 'Intermediate', years: 2, lastUsed: '2025', mappedTo: 'HRMS Platform' },
        { name: 'HTML/CSS', icon: FaHtml5, level: 'Advanced', years: 4, lastUsed: '2025', mappedTo: 'All Projects' },
      ],
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'React.js / Next.js', icon: FaReact, level: 'Advanced', years: 3, lastUsed: '2025', isCore: true, mappedTo: 'Primary Framework' },
        { name: 'Vue.js', icon: FaVuejs, level: 'Intermediate', years: 1, lastUsed: '2024', mappedTo: 'Career Sites' },
        { name: 'React Native', level: 'Intermediate', years: 1, lastUsed: '2024', isCore: true, mappedTo: 'Mobile Apps' },
        { name: 'jQuery', icon: SiJquery, level: 'Intermediate', years: 2, lastUsed: '2024', mappedTo: 'Legacy Systems' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: FaNode, level: 'Advanced', years: 3, lastUsed: '2025', isCore: true, mappedTo: 'Primary Backend' },
        { name: 'Express.js / NestJS', icon: SiExpress, level: 'Advanced', years: 3, isCore: true, lastUsed: '2025', mappedTo: 'REST APIs' },
        { name: 'FastAPI', icon: SiFastapi, level: 'Advanced', years: 2, lastUsed: '2025', isCore: true, mappedTo: 'Python APIs' },
        { name: 'Flask', icon: SiFlask, level: 'Intermediate', years: 1, lastUsed: '2025', mappedTo: 'Microservices' },
        { name: 'Laravel / Lumen', icon: SiLaravel, level: 'Intermediate', years: 2, lastUsed: '2025', mappedTo: 'HRMS Backend' },
        { name: 'GraphQL', icon: SiGraphql, level: 'Intermediate', years: 1, lastUsed: '2024', mappedTo: 'API Gateway' },
        { name: 'Sequelize / Prisma', icon: SiSequelize, level: 'Intermediate', years: 2, lastUsed: '2025', mappedTo: 'ORM' },
      ],
    },
    {
      title: 'Mobile Development',
      skills: [
        { name: 'React Native', level: 'Advanced', years: 2, lastUsed: '2025', isCore: true, mappedTo: 'Cross-platform' },
      ],
    },
    {
      title: 'DevOps & Infrastructure',
      skills: [
        { name: 'Docker', icon: FaDocker, level: 'Advanced', years: 2, lastUsed: '2025', isCore: true, mappedTo: 'Containerization' },
        { name: 'Kubernetes', icon: SiKubernetes, level: 'Intermediate', years: 2, lastUsed: '2024', mappedTo: 'Orchestration' },
        { name: 'CI/CD (GitLab)', icon: SiGitlab, level: 'Advanced', years: 2, isCore: true, lastUsed: '2025', mappedTo: 'Automation' },
        { name: 'RabbitMQ', icon: SiRabbitmq, level: 'Intermediate', years: 1, lastUsed: '2024', mappedTo: 'Message Queue' },
      ],
    },
    {
      title: 'Databases & Cache',
      skills: [
        { name: 'PostgreSQL', icon: SiPostgresql, level: 'Advanced', years: 3, lastUsed: '2025', isCore: true, mappedTo: 'Primary DB' },
        { name: 'MySQL', icon: SiMysql, level: 'Advanced', years: 3, lastUsed: '2025', isCore: true, mappedTo: 'HRMS Platform' },
        { name: 'MongoDB', icon: SiMongodb, level: 'Advanced', years: 2, lastUsed: '2025', isCore: true, mappedTo: 'NoSQL' },
        { name: 'Redis', icon: SiRedis, level: 'Intermediate', years: 2, lastUsed: '2025', mappedTo: 'Caching' },
      ],
    },
    {
      title: 'Cloud & Platforms',
      skills: [
        { name: 'AWS', icon: FaAws, level: 'Intermediate', years: 1, lastUsed: '2025' },
        { name: 'Google Cloud', icon: SiGooglecloud, level: 'Intermediate', years: 1, lastUsed: '2024' },
      ],
    },
  ], []);

  // const maxYears = useMemo(() => {
  //   const all = skillCategories.flatMap(c => c.skills);
  //   return Math.max(...all.map(s => s.years || 0), 1);
  // }, [skillCategories]);

  const filteredCategories = useMemo(() => {
    if (!showCoreOnly) return skillCategories;
    return skillCategories
      .map(cat => ({
        ...cat,
        skills:
          cat.skills.filter(
            s =>
              s.isCore ||
              (['Core Languages', 'Frontend', 'Backend'].includes(cat.title) && s.level === 'Advanced')
          ),
      }))
      .filter(cat => cat.skills.length > 0);
  }, [showCoreOnly, skillCategories]);

  return (
    <section id="skills" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="section-title text-gray-800 dark:text-white mb-5 sm:mb-6"
        >
          Skills & Expertise
        </motion.h2>

        {/* Toggle — scrollable di mobile */}
        <div className="mb-6 sm:mb-8 flex items-center gap-2 overflow-x-auto scrollbar-none [-webkit-overflow-scrolling:touch] touch-pan-x">
          <button
            onClick={() => setShowCoreOnly(false)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors shrink-0 ${
              !showCoreOnly
                ? 'bg-primary-light text-white'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setShowCoreOnly(true)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors shrink-0 ${
              showCoreOnly
                ? 'bg-primary-light text-white'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'
            }`}
          >
            Core only
          </button>

          {/* Legend (disembunyikan di mobile) */}
          <div className="ml-auto hidden md:flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
            <Tag className={levelColor.Expert}>Expert</Tag>
            <Tag className={levelColor.Advanced}>Advanced</Tag>
            <Tag className={levelColor.Intermediate}>Intermediate</Tag>
            <Tag className={levelColor.Familiar}>Familiar</Tag>
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-8 sm:space-y-12"
        >
          {filteredCategories.map((category, idx) => {
            const isOpenMobile = openMobile.has(idx);
            const bodyBase =
              'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4';
            const bodyClass = `${bodyBase} ${isOpenMobile ? 'block' : 'hidden'} md:grid`;
            return (
              <motion.div key={idx} variants={containerVariants} className="space-y-3 sm:space-y-5">
                {/* Header kategori (clickable di mobile untuk accordion) */}
                <button
                  type="button"
                  onClick={() => toggleMobile(idx)}
                  className="w-full md:w-auto flex items-center justify-between md:justify-start gap-3"
                  aria-expanded={isOpenMobile}
                >
                  <div className="flex items-center gap-3 flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-primary-light">{category.title}</h3>
                    <div className="hidden md:block flex-1 h-px bg-primary-light/20" />
                  </div>
                  <span className="md:hidden text-xs text-gray-500 dark:text-gray-400">
                    {isOpenMobile ? 'Hide' : 'Show'}
                  </span>
                </button>

                {/* Body */}
                <div className={bodyClass}>
                  {category.skills.map((skill, i) => (
                    <SkillCard key={`${category.title}-${i}-${skill.name}`} skill={skill} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
