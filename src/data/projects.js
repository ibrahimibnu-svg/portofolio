import coding1 from "../assets/gambar-coding1.jpg";
import coding2 from "../assets/gambar-coding2.jpg";
import coding3 from "../assets/gambar-coding3.jpg";
import orgNgajar from "../assets/gambar-org-ngajar.jpg";
import quranImg from "../assets/gambar quran.jpeg";

export const itProjects = [
  {
    id: 1,
    title: "Aplikasi Card",
    description:
      "aplikasi kartu digital yang dapat menampilkan informasi pengguna secara rapi dan menarik, sekaligus melatih kemampuan dalam mengelola komponen, props, dan desain antarmuka menggunakan React",
    image: coding1,
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://aplikasi-card.vercel.app/",
  },
  {
    id: 2,
    title: "To-Do List",
    description:
      "aplikasi pencatat tugas untuk membantu pengguna mengelola aktivitas sehari-hari agar lebih terorganisir, serta melatih penerapan state management dan manipulasi data pada React.",
    image: coding2,
    tech: ["React", "CSS"],
    link: "https://aplikasi-todo-list-mu.vercel.app/",
  },
  {
    id: 3,
    title: "Dashboard",
    description:
      "dashboard yang dapat menampilkan dan mengelola data proyek dalam satu tampilan terpusat sehingga informasi menjadi lebih mudah dipantau dan dikelola oleh pengguna.",
    image: coding3,
    tech: ["React", "CSS"],
    link: "https://dashboard-eight-ashen-56.vercel.app/",
  },
];

export const englishProjects = [
  {
    id: 1,
    title: "Micro Teaching Offline",
    description: "Project micro teaching offline B.Inggris.",
    image: orgNgajar,
    type: "Teaching",
    link: "https://drive.google.com/drive/folders/1d0p8DoRUjasVzOJe-Q3whjVxwHXkjJSM?usp=sharing",
  },
  {
    id: 2,
    title: "Micro Teaching Online",
    description: "Project micro teaching online B.Inggris.",
    image: orgNgajar,
    type: "Teaching",
    link: "",
  },
  {
    id: 3,
    title: "Sertifikat GE",
    description: "sertifikat GE B.Inggris.",
    image: orgNgajar,
    type: "Certificate",
    link: "",
  },
];

export const tahfidzProjects = [
  {
    id: 1,
    title: "Juz 28",
    description: "Project tahfidz Juz 28.",
    image: quranImg,
    surah: "Juz 28",
    link: "https://drive.google.com/file/d/1supdJYzzIqcR106ylyZv17_VSQn7faAU/view?usp=drive_link",
  },
  {
    id: 2,
    title: "Juz 27",
    description: "Project tahfidz Juz 27.",
    image: quranImg,
    surah: "Juz 27",
    link: "https://drive.google.com/file/d/1zvWX6ljn27DE7QERegUImdNCeKmp6Utk/view?usp=drive_link",
  },
];
