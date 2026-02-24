import { Outlet, NavLink, useNavigation } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaAddressBook,
  FaMoon,
  FaSun
} from "react-icons/fa";
import { useTheme } from "~/context/ThemeContext"; // sesuaikan path

export default function Layout() {
  const navigation = useNavigation();
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { to: "/", label: "Home", icon: <FaHome className="inline mr-2" /> },
    { to: "/about", label: "About", icon: <FaUser className="inline mr-2" /> },
    { to: "/portfolio", label: "Portfolio", icon: <FaProjectDiagram className="inline mr-2" /> },
    { to: "/contact", label: "Contact", icon: <FaAddressBook className="inline mr-2" /> },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex justify-between items-center">
            <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
              <NavLink to="/"><img src="/profileX.png" alt="profile" className="w-10 h-10 rounded-full object-cover" /></NavLink>
            </div>

            <div className="flex items-center space-x-4">
              <ul className="flex space-x-4">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        `flex items-center px-3 py-2 rounded-md transition-colors duration-200 ${
                          isActive
                            ? "bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300"
                            : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-primary-600 dark:hover:text-primary-400"
                        }`
                      }
                    >
                      {link.icon}
                      <span className="hidden sm:inline">{link.label}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>

              {/* Tombol toggle tema */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <FaMoon /> : <FaSun />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Konten Utama */}
      <AnimatePresence mode="wait">
        <motion.main
          key={navigation.location?.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="flex-grow container mx-auto px-4 py-8"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-gray-950 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h3 className="text-2xl font-bold">Oloan Napitupulu</h3>
              <p className="text-gray-400 dark:text-gray-500">Aspiring Data Scientist | AI & Machine Learning Enthusiast</p>
            </div>

            <div className="flex space-x-6">
              <a
                href="https://github.com/Oloan03"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-white text-2xl transition-colors duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/Oloan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-white text-2xl transition-colors duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:oloanna70@gmail.com"
                className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-white text-2xl transition-colors duration-300 hover:scale-110"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          <div className="border-t border-gray-700 dark:border-gray-800 mt-8 pt-8 text-center text-gray-400 dark:text-gray-500">
            <p>&copy; {new Date().getFullYear()} Oloan Napitupulu. Built with React Router v7</p>
          </div>
        </div>
      </footer>
    </div>
  );
}