import { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaEnvelope, 
  FaLinkedin, 
  FaGithub, 
  FaMapMarkerAlt,
  FaSpinner
} from "react-icons/fa";

export default function Contact() {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [iframeError, setIframeError] = useState(false);

  // Ganti dengan src iframe Anda
  const jotformSrc = "https://form.jotform.com/123456789012345";

  return (
    <div className="max-w-6xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Have questions or want to collaborate? Feel free to reach out!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">Contact Information</h2>
          
          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-start">
              <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-xl mr-4">
                <FaEnvelope className="text-primary-600 dark:text-primary-400 text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white text-lg">Email</h3>
                <a 
                  href="mailto:oloan.s.na70@gmail.com"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  oloan.s.na70@gmail.com
                </a>
              </div>
            </div>
            
            {/* LinkedIn */}
            <div className="flex items-start">
              <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-xl mr-4">
                <FaLinkedin className="text-primary-600 dark:text-primary-400 text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white text-lg">LinkedIn</h3>
                <a 
                  href="https://linkedin.com/in/Oloan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  linkedin.com/in/Oloan
                </a>
              </div>
            </div>
            
            {/* GitHub */}
            <div className="flex items-start">
              <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-xl mr-4">
                <FaGithub className="text-primary-600 dark:text-primary-400 text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white text-lg">GitHub</h3>
                <a 
                  href="https://github.com/Oloan03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  github.com/Oloan03
                </a>
              </div>
            </div>
            
            {/* Location */}
            <div className="flex items-start">
              <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-xl mr-4">
                <FaMapMarkerAlt className="text-primary-600 dark:text-primary-400 text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white text-lg">Location</h3>
                <p className="text-gray-600 dark:text-gray-300">Jakarta, Indonesia</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Form JotForm via Iframe */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">Send Message</h2>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 relative min-h-[500px]">
            {!iframeLoaded && !iframeError && (
              <div className="absolute inset-0 flex items-center justify-center bg-white/80 dark:bg-gray-800/80 rounded-2xl z-10">
                <FaSpinner className="animate-spin text-4xl text-primary-600 dark:text-primary-400" />
              </div>
            )}
            
            {iframeError && (
              <div className="absolute inset-0 flex items-center justify-center bg-white dark:bg-gray-800 rounded-2xl z-10">
                <div className="text-center p-6">
                  <p className="text-red-600 dark:text-red-400 mb-4">Failed to load contact form.</p>
                  <a 
                    href={jotformSrc}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition"
                  >
                    Open form in new tab
                  </a>
                </div>
              </div>
            )}

            <iframe
              id="JotFormIFrame-260535961333053"
              title="Send Message"
              onLoad={() => setIframeLoaded(true)}
              onError={() => setIframeError(true)}
              allowTransparency={true}
              allow="geolocation; microphone; camera; fullscreen; payment"
              src="https://form.jotform.com/260535961333053"
              className="w-full border-none transition-opacity duration-300"
              style={{ 
                minHeight: "600px",
                opacity: iframeLoaded ? 1 : 0,
                pointerEvents: iframeLoaded ? "auto" : "none",
              }}
              scrolling="yes"
            >
            </iframe>
            <script src='https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js'></script>
            <script>window.jotformEmbedHandler("iframe[id='JotFormIFrame-260535961333053']", "https://form.jotform.com/")</script>
                  
          </div>
          
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-4">
            Powered by JotForm · Your information is secure
          </p>
        </motion.div>
      </div>
    </div>
  );
}