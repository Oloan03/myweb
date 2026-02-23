import { motion } from "framer-motion";
import { Link } from "react-router";
import { FaArrowRight, FaChartLine, FaDatabase, FaBrain } from "react-icons/fa";

export default function Home() {
  return (
    <div className="text-center">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-12 md:py-24"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          Hi, I'm <span className="text-primary-600 dark:text-primary-400">Oloan Napitupulu</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6">
          Aspiring Data Scientist | AI & Machine Learning Enthusiast
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-10">
          I have a passion for data. I am deeply interested in processing data and 
          finding solutions to problems informed by data.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/portfolio"
            className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition duration-300 shadow-lg hover:shadow-xl"
          >
            View My Projects
            <FaArrowRight className="ml-2" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-primary-600 dark:text-primary-400 bg-white dark:bg-gray-800 border-2 border-primary-600 dark:border-primary-400 rounded-lg hover:bg-primary-50 dark:hover:bg-gray-700 transition duration-300"
          >
            Get In Touch
          </Link>
        </div>
      </motion.section>

      {/* Skills Highlights */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="py-12 bg-gray-50 dark:bg-gray-800 rounded-2xl my-12"
      >
        <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">What I Do</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { 
              icon: <FaDatabase className="text-4xl text-secondary-green mx-auto mb-4" />, 
              title: "Data Wrangling", 
              desc: "Cleaning and transforming raw data into actionable insights." 
            },
            { 
              icon: <FaChartLine className="text-4xl text-primary-600 mx-auto mb-4" />, 
              title: "Data Visualization", 
              desc: "Creating compelling visual stories from complex datasets." 
            },
            { 
              icon: <FaBrain className="text-4xl text-secondary-red mx-auto mb-4" />, 
              title: "Machine Learning", 
              desc: "Building predictive models to solve real-world problems." 
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {item.icon}
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{item.title}</h4>
              <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}