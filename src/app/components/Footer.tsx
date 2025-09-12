"use client";

export default function Footer() {
  const scrollToSection = (id: string, offset: number = 0) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-[var(--primary-black)] text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 md:px-12 py-8">
          {/* Company Info */}
          <div>
            <h3 className="text-3xl font-bold mb-4">Rajawali Group</h3>
            <p>
              Gestun Terpercaya di Indonesia.
              <br />
              Keamanan dan kepuasan Anda adalah prioritas kami.
            </p>
          </div>

          {/* Informations */}
          <div>
            <h3 className="text-3xl font-bold mb-4">Informasi</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("about", 80)}
                  className="text-white hover:underline transition-colors"
                >
                  Tentang Kami
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("adv", 80)}
                  className="text-white hover:underline transition-colors"
                >
                  Keunggulan
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("review", 115)}
                  className="text-white hover:underline transition-colors"
                >
                  Review
                </button>
              </li>
              <li>
                <a
                  href="/lokasi"
                  className="text-white hover:underline transition-colors"
                >
                  Lokasi
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-3xl font-bold mb-4">Kontak Kami</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +62 81385504830
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                info@rajawaligroup.com
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
                <a
                  href="https://wa.me/6281385504830/?text=Halo Admin gestunrajawali"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Whatsapp Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-white py-6 mx-8 md:mx-12 text-center text-white">
          <p>&copy; 2024 Rajawali Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
