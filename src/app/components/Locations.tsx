"use client";

import Image from "next/image";
import { FaSearch } from "react-icons/fa";

type Location = {
  name: string;
  image: string;
  mapLink: string;
};

export default function Locations() {
  const locations: Location[] = [
    {
      name: "MAZ 23 PROPERTY",
      image: "/assets/maz_23_property_1.jpg",
      mapLink: "https://maps.app.goo.gl/U4Rpu3qEMwHbHtYN7",
    },
    {
      name: "CENTER PRO",
      image: "/assets/center_pro_1.jpg",
      mapLink: "https://maps.app.goo.gl/6TU4K1ouuRZdxRTH9",
    },
  ];

  return (
    <section id="loc" className="py-10 pb-4">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-blue mb-10">
          Lokasi Kami
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
            >
              {/* Gambar */}
              <div className="relative w-full h-64 md:h-72">
                <Image
                  src={location.image}
                  alt={location.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Konten bawah */}
              <div className="p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 truncate w-full md:w-auto">
                  {location.name}
                </h3>

                {/* Tombol anchor */}
                <a
                  href={location.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Lihat lokasi ${location.name} di Google Maps`}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-[var(--primary-black)] text-white font-bold text-sm md:text-base w-full md:w-auto text-center"
                >
                  <FaSearch className="text-sm md:text-base" />
                  <span>Pelajari Lebih Lanjut</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
