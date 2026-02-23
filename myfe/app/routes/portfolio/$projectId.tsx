import { useParams, Link } from "react-router";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";

// Data proyek (sama dengan di portfolio.tsx, tapi lebih detail)
const projectsData = [
  {
    id: "project-1",
    title: "Evaluasi Kernel SVM untuk Klasifikasi Sentimen Bitcoin",
    description: "Tugas Akhir yang menganalisis performa berbagai kernel SVM (Linear, Polynomial, RBF) dalam mengklasifikasikan sentimen dari tweet tentang Bitcoin.",
    fullDescription: `
      Proyek ini bertujuan untuk membandingkan akurasi dan efisiensi kernel SVM dalam tugas klasifikasi sentimen. 
      Dataset dikumpulkan dari Twitter menggunakan API, kemudian diproses dengan teknik text preprocessing (cleaning, tokenization, stopword removal). 
      Fitur diekstrak menggunakan TF-IDF. Model SVM dilatih dengan tiga kernel berbeda dan dievaluasi menggunakan cross-validation.
      Hasil menunjukkan bahwa kernel RBF memberikan akurasi terbaik (85%) tetapi lebih lambat dalam pelatihan, sementara kernel linear lebih cepat namun akurasi sedikit lebih rendah (82%).
    `,
    technologies: ["Python", "Scikit-learn", "NLTK", "SVM", "Pandas", "Matplotlib"],
    category: "Machine Learning",
    githubLink: "https://github.com/Oloan03/bitcoin-sentiment-svm",
    demoLink: null,
    image: "/images/bitcoin-sentiment.png", // nanti bisa ganti dengan path gambar
    date: "2026",
    role: "Peneliti",
    outcomes: [
      "Mencapai akurasi 85% dengan kernel RBF",
      "Menyediakan visualisasi perbandingan kernel",
      "Publikasi laporan tugas akhir"
    ]
  },
  {
    id: "project-2",
    title: "Dashboard Visualisasi Data Penjualan",
    description: "Dashboard interaktif untuk menganalisis data penjualan menggunakan Tableau dan Python.",
    fullDescription: `
      Proyek tugas besar mata kuliah Visualisasi Data. Data penjualan fiktif dibersihkan dan dianalisis menggunakan Python (Pandas), 
      kemudian divisualisasikan dalam dashboard Tableau yang interaktif. Dashboard menampilkan tren penjualan, performa produk, dan segmentasi pelanggan.
    `,
    technologies: ["Tableau", "Python", "Pandas", "Excel"],
    category: "Data Visualization",
    githubLink: "https://github.com/Oloan03/sales-dashboard",
    demoLink: null,
    image: null,
    date: "2021",
    role: "Analis Data",
    outcomes: [
      "Menyajikan insight penjualan dalam format visual yang mudah dipahami",
      "Mengidentifikasi produk terlaris dan musim penjualan tertinggi"
    ]
  }
];

export default function ProjectDetail() {
  const { projectId } = useParams();
  const project = projectsData.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-800">Proyek tidak ditemukan</h2>
        <Link to="/portfolio" className="text-primary-600 hover:underline mt-4 inline-block">
          Kembali ke Portfolio
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto"
    >
      <Link to="/portfolio" className="inline-flex items-center text-gray-600 hover:text-primary-600 mb-6">
        <FaArrowLeft className="mr-2" /> Kembali ke Portfolio
      </Link>

      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{project.title}</h1>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map(tech => (
            <span key={tech} className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>

        <div className="prose max-w-none text-gray-700 mb-8">
          <p className="whitespace-pre-line">{project.fullDescription}</p>
        </div>

        {project.outcomes && (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Hasil & Pencapaian</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {project.outcomes.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="grid grid-cols-2 gap-4 mb-8">
          {project.date && (
            <div>
              <span className="text-gray-500">Tahun:</span>
              <span className="ml-2 font-medium text-gray-800">{project.date}</span>
            </div>
          )}
          {project.role && (
            <div>
              <span className="text-gray-500">Peran:</span>
              <span className="ml-2 font-medium text-gray-800">{project.role}</span>
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-4">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
            >
              <FaGithub className="mr-2" /> Lihat Kode
            </a>
          )}
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition"
            >
              <FaExternalLinkAlt className="mr-2" /> Demo Langsung
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}