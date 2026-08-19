import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "portfolio",
    companyName: "Portfolio Website",
    type: "Personal",
    category: ["DevOps", "Frontend", "UI/UX"],
    shortDescription:
      "Sebuah website portofolio pribadi yang minimalis, responsif, dan berperforma tinggi untuk menampilkan proyek, keahlian, dan perjalanan karier saya.",
    websiteLink: "https://portofolio-tengku-new.vercel.app",
    githubLink: "https://github.com/tengkuawal/portofolio-tengku-new",
    techStack: [
      "Next.js",
      "React",
      "Javascript",
      "Typescript",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel",
      
    ],
    startDate: new Date("2026-07-08"),
    endDate: new Date("2027-09-01"),
    companyLogoImg: "/projects/portfolio/logo1.png",
    pagesInfoArr: [
      // {
      //   title: "Landing & Sections",
      //   description:
      //     "A clean, minimal landing page with sections for skills, projects, contributions, and experience.",
      //   imgArr: ["/profile-img.jpg"],
      // },
    ],
    descriptionDetails: {
      paragraphs: [
        "This personal portfolio website is a minimal, responsive, and high-performance platform designed to showcase my projects, skills, and career journey.",
      ],
      bullets: [
        "Developed a fast, SEO-friendly, and highly optimized frontend using Next.js and TypeScript.",
        "Designed a modern, responsive UI/UX from scratch and implemented smooth, interactive transitions using Framer Motion and Tailwind CSS.",
        "Integrated a seamless CI/CD pipeline using Vercel for automated, zero-downtime deployments directly from GitHub.",
        "Optimized asset loading and overall performance to achieve excellent Core Web Vitals scores across mobile and desktop devices.",
      ],
    },
  },
  {
    id: "aplikasi-kasir-restoran",
    companyName: "Aplikasi Kasir Restoran",
    type: "Personal",
    category: ["Full Stack", "Backend", "Web Dev"],
    shortDescription:
      "Aplikasi Kasir Restoran (POS) berbasis web yang efisien untuk manajemen transaksi kasir, pengelolaan menu makanan & minuman, stok bahan, dan laporan penjualan.",
    websiteLink: "https://tengkukasir.free.nf",
    githubLink: "https://github.com/tengkuawal/pembuatan_aplikasi_kasir-_tengku_3",
    techStack: ["PHP", "MySQL", "Javascript", "HTML 5", "CSS 3", "Bootstrap"],
    startDate: new Date("2026-07-08"),
    endDate: new Date("2027-09-01"),
    companyLogoImg: "/projects/restaurant/kasir.jpg",
    pagesInfoArr: [
      {
        title: "Manajemen Kasir & Transaksi",
        description:
          "Antarmuka kasir cepat dan responsif untuk mengelola pemesanan pelanggan serta pencetakan bukti pembayaran.",
        imgArr: ["/projects/restaurant/kasir.jpg"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Aplikasi Kasir Restoran adalah sistem manajemen Point of Sale (POS) berbasis web yang dirancang khusus untuk mempermudah operasional restoran dan kafe.",
        "Sistem ini membantu kasir memproses pesanan dengan cepat, mengelola inventaris produk/menu, serta menghasilkan laporan transaksi penjualan harian hingga bulanan secara akurat.",
      ],
      bullets: [
        "Pengelolaan menu makanan, minuman, dan kategori produk dengan penetapan harga dinamis.",
        "Sistem transaksi kasir real-time dengan rekap otomatis dan histori pemesanan.",
        "Integrasi laporan keuangan dan penjualan untuk analisis keuntungan bisnis.",
        "Desain UI/UX yang responsif dan intuitif di berbagai perangkat desktop maupun tablet.",
      ],
    },
  },

    {
    id: "penyerahan_hardcover_skripsi",
    companyName: "Penyerahan Hardcover Skripsi",
    type: "Personal",
   category: ["Full Stack", "Backend", "Web Dev"],
    shortDescription:
      "Dokumentasi dan penyelesaian akhir proses akademik melalui penyerahan fisik hardcover skripsi yang telah selesai dicetak dan dijilid rapi.",
    websiteLink: "",
    githubLink: "https://github.com/tengkuawal/penyerahan_hardcover_skripsi",
    techStack: ["Laravel", "PHP", "MySQL", "HTML 5"],
    startDate: new Date("2026-08-01"),
    endDate: new Date("2026-08-19"),
    companyLogoImg: "/projects/skripsi/hardcover.png",
    pagesInfoArr: [
      {
        title: "Cover & Pengesahan",
        description:
          "Halaman cover hardcover berwarna lengkap dengan logo kampus dan lembar pengesahan yang telah ditandatangani.",
        imgArr: ["/projects/skripsi/hardcover.png"]
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Tahap akhir dari penyelesaian tugas akhir/skripsi yang melibatkan proses cetak, penjilidan hardcover resmi, dan penyerahan fisik dokumen ke kampus.",
        "Dokumen hardcover dibuat sesuai dengan standar format penulisan dan tata letak instansi, mencakup seluruh revisi, lembar pengesahan bertanda tangan, serta lampiran pendukung.",
        "Penyerahan fisik ini menandai penyelesaian seluruh kewajiban akademik sebagai syarat kelulusan dan pengambilan ijazah.",
      ],
      bullets: [
        "Menyelesaikan finalisasi draf skripsi dan format layout sesuai pedoman kampus.",
        "Melakukan proses cetak dan penjilidan hardcover standar akademik.",
        "Melengkapi lembar pengesahan resmi dari dosen pembimbing dan penguji.",
        "Menyerahkan berkas hardcover fisik ke perpustakaan/sekretariat fakultas.",
        "Mendapatkan bukti tanda terima penyerahan sebagai syarat bebas pustaka dan kelulusan.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
