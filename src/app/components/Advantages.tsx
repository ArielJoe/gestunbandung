export default function Advantages() {
  const advantages = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 mx-auto mb-4 text-primary-blue"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Bunga lebih rendah dari ATM",
      description:
        "Layanan gesek tunai kami menawarkan suku bunga yang lebih rendah dibandingkan penarikan tunai di ATM, sehingga Anda bisa menghemat biaya bunga bulanan dan mengurangi beban keuangan.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 mx-auto mb-4 text-primary-blue"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Fast response, cepat, sigap",
      description:
        "Kami selalu siap melayani Anda dengan cepat. Proses gesek tunai dilakukan secara efisien dengan respons yang sigap, sehingga Anda bisa langsung mendapatkan dana saat dibutuhkan.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 mx-auto mb-4 text-primary-blue"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Dana cair dalam hitungan menit",
      description:
        "Tidak perlu menunggu lama! Dengan gesek tunai kami, uang tunai akan langsung cair dalam hitungan menit setelah transaksi selesai, memberikan solusi cepat untuk kebutuhan mendesak.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 mx-auto mb-4 text-primary-blue"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
      title: "Keamanan terjamin 100%",
      description:
        "Kami menjamin keamanan setiap transaksi. Proses dilakukan dengan aman dan sesuai prosedur, sehingga Anda tidak perlu khawatir tentang risiko penipuan atau kebocoran data.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 mx-auto mb-4 text-primary-blue"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Proses mudah tanpa syarat tambahan",
      description:
        "Anda tidak perlu repot membawa banyak dokumen tambahan atau syarat administrasi yang rumit. Cukup datang dengan membawa KTP dan kartu kredit, dan dana akan langsung cair tanpa proses berbelit.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 mx-auto mb-4 text-primary-blue"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
          />
        </svg>
      ),
      title: "Privasi terjaga dengan baik",
      description:
        "Kami menjaga kerahasiaan setiap transaksi. Informasi pribadi dan transaksi Anda dijamin aman, sehingga Anda dapat merasa nyaman tanpa khawatir data tersebar atau diketahui pihak lain.",
    },
  ];

  return (
    <section id="adv" className="py-8 bg-primary-gray">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-blue mb-12">
          Keuntungan Gestun
          <br />
          di Rajawali Group
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-[var(--secondary-blue)] p-8 rounded-lg shadow-md text-white flex flex-col justify-between h-full"
            >
              {advantage.icon}
              <h3 className="text-xl font-bold text-center text-primary-blue mb-4">
                {advantage.title}
              </h3>
              <p className="text-white text-center">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
