import { motion } from "framer-motion";
import { useState } from "react";
import { 
  FaEnvelope, 
  FaLinkedin, 
  FaGithub, 
  FaMapMarkerAlt, 
  FaCheckCircle,
  FaPaperPlane 
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Ganti YOUR_FORMSPREE_FORM_ID dengan ID dari Formspree
    try {
      const response = await fetch("https://formspree.io/f/YOUR_FORMSPREE_FORM_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          _replyto: formData.email,
          _subject: `Portfolio Contact: ${formData.subject}`
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h1>
        <p className="text-xl text-gray-600">
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
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Contact Information</h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-primary-100 p-3 rounded-xl mr-4">
                <FaEnvelope className="text-primary-600 text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-lg">Email</h3>
                <a 
                  href="mailto:oloanna70@gmail.com"
                  className="text-gray-600 hover:text-primary-600"
                >
                  oloan.s.na70@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-primary-100 p-3 rounded-xl mr-4">
                <FaLinkedin className="text-primary-600 text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-lg">LinkedIn</h3>
                <a 
                  href="https://linkedin.com/in/Oloan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-600"
                >
                  linkedin.com/in/Oloan
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-primary-100 p-3 rounded-xl mr-4">
                <FaGithub className="text-primary-600 text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-lg">GitHub</h3>
                <a 
                  href="https://github.com/Oloan03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-600"
                >
                  github.com/Oloan03
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-primary-100 p-3 rounded-xl mr-4">
                <FaMapMarkerAlt className="text-primary-600 text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-lg">Location</h3>
                <p className="text-gray-600">Jakarta, Indonesia</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Send Message</h2>
          
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center"
            >
              <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-green-800 mb-2">Message Sent!</h3>
              <p className="text-green-700 mb-6">
                Thank you for your message. I'll respond as soon as possible.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                  placeholder="Project inquiry"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-3 text-black hover:bg-blue-400 font-medium rounded-lg transition duration-300 flex items-center justify-center ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-primary-600 hover:bg-primary-700"
                }`}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <FaPaperPlane className="mr-2 text-green-400" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}