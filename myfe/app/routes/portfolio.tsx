import { motion } from "framer-motion";
import { Link } from "react-router";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// DATA CONTOH - GANTI DENGAN PROYEK ANDA
const sampleProjects = [
  {
    id: "project-1",
    title: "Bitcoin Sentiment Analysis",
    description: "Evaluating SVM kernels for Bitcoin sentiment classification from tweets.",
    technologies: ["Python", "Scikit-learn", "NLP", "SVM"],
    category: "Machine Learning",
  },
  {
    id: "project-2",
    title: "Sales Dashboard",
    description: "Interactive dashboard for sales data visualization and analysis.",
    technologies: ["Tableau", "Python", "Pandas"],
    category: "Data Visualization",
  },
];

export default function Portfolio() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">My Portfolio</h1>
        <p className="text-xl text-gray-600">
          A collection of my data science and machine learning projects.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {sampleProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary-100 text-primary-800 rounded-full mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                </div>
              </div>

              <p className="text-gray-600 mb-4">{project.description}</p>

              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center">
                <Link
                  to={`/portfolio/${project.id}`}
                  className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium"
                >
                  View Details
                  <FaExternalLinkAlt className="ml-2" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Placeholder untuk proyek baru */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-16 text-center"
      >
        <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            More Projects Coming Soon!
          </h3>
          <p className="text-gray-600">
            I'm continuously working on new data science projects.
          </p>
        </div>
      </motion.div>
    </div>
  );
}