import { motion } from "framer-motion";
import { 
  FaGraduationCap, 
  FaPython, 
  FaDatabase, 
  FaChartBar,
  FaTools 
} from "react-icons/fa";
import { SiPandas, SiTensorflow, SiScikitlearn } from "react-icons/si";

export default function About() {
  const skills = {
    programming: ["Python (Advanced)", "SQL", "JavaScript"],
    libraries: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Matplotlib", "Tableau", "Git"],
    concepts: ["Machine Learning", "Deep Learning", "Statistics", "Data Visualization", "Data Wrangling"]
  };

  return (
    <div className="max-w-6xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8"
      >
        About Me
      </motion.h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Kolom Kiri: Foto & Info Pribadi */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-1"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sticky top-24">
            {/* Placeholder untuk Foto Profil - ganti dengan gambar Anda nanti */}
            <div className="w-48 h-48 mx-auto bg-gradient-to-br from-primary-400 to-primary-700 rounded-full flex items-center justify-center text-gray-900 dark:text-white text-6xl mb-6">
              <img src="/photo.jpg" alt="profile" className="w-48 h-48 rounded-full object-cover" />
            </div>
            <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100">Oloan Napitupulu</h2>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-4">Aspiring Data Scientist</p>
            
            <div className="space-y-3">
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <FaGraduationCap className="mr-3 text-primary-600" />
                <span>S1 Teknik Informatika, Institut Teknologi Sumatera, 2020</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm italic">
                "Evaluasi kernel SVM terhadap klasifikasi sentimen bitcoin"
              </p>
            </div>
          </div>
        </motion.div>

        {/* Kolom Kanan: Skills & Pendidikan */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2 space-y-8"
        >
          {/* Introduction */}
          <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">Introduction</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I have a keen interest in the field of data science. My academic background in 
              Informatics Engineering and my final project on SVM kernel evaluation for 
              Bitcoin sentiment classification have equipped me with a strong foundation 
              in data science and machine learning.
            </p>
          </section>

          {/* Skills Section */}
          <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 flex items-center">
              <FaTools className="mr-3 text-primary-600" />
              Technical Skills
            </h3>
            
            <div className="space-y-6">
              {/* Programming Languages */}
              <div>
                <h4 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center">
                  <FaPython className="mr-2 text-green-500" />
                  Programming Languages
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.programming.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className="px-4 py-2 bg-green-50 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Libraries & Tools */}
              <div>
                <h4 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center">
                  <SiPandas className="mr-2 text-blue-500" />
                  Libraries & Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.libraries.map((lib, idx) => (
                    <span 
                      key={idx} 
                      className="px-4 py-2 bg-blue-50 text-blue-800 rounded-full font-medium"
                    >
                      {lib}
                    </span>
                  ))}
                </div>
              </div>

              {/* Core Concepts */}
              <div>
                <h4 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center">
                  <FaChartBar className="mr-2 text-purple-500" />
                  Core Concepts
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.concepts.map((concept, idx) => (
                    <span 
                      key={idx} 
                      className="px-4 py-2 bg-purple-50 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full font-medium"
                    >
                      {concept}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}