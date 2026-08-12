export interface contributionsInterface {
  repo: string;
  contibutionDescription: string;
  repoOwner: string;
  link: string;
}

export const contributionsUnsorted: contributionsInterface[] = [
  {
    repo: "minimal-next-portfolio",
    contibutionDescription:
      "Open-source Next.js portfolio template. Trusted and forked by developers worldwide (130+ GitHub stars).",
    repoOwner: "tengkuawal",
    link: "https://github.com/tengkuawal/portofolio-tengku-new",
  },
  {
    repo: "aplikasi-kasir-restoran",
    contibutionDescription:
      "Aplikasi Kasir Restoran (POS) berbasis web untuk manajemen transaksi kasir, pengelolaan menu, dan laporan penjualan.",
    repoOwner: "tengkuawal",
    link: "https://github.com/tengkuawal/pembuatan_aplikasi_kasir-_tengku_3",
  },
  {
    repo: "autogen",
    contibutionDescription:
      "Improved the gallery component to showcase the community work.",
    repoOwner: "Microsoft",
    link: "https://github.com/microsoft/autogen/pull/1445",
  },
  {
    repo: "creativecommons",
    contibutionDescription:
      "Closed Issue: Fixed navbar issue on the main website of creative common.",
    repoOwner: "Creative Commons",
    link: "https://github.com/creativecommons/creativecommons.github.io-source/pull/738",
  },
  {
    repo: "creativecommons",
    contibutionDescription:
      "Added section for 'Other Opportunities' on main page.",
    repoOwner: "Creative Commons",
    link: "https://github.com/creativecommons/creativecommons.github.io-source/pull/719",
  },
];

export const featuredContributions: contributionsInterface[] =
  contributionsUnsorted.slice(0, 3);
