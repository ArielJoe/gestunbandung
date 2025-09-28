"use client";

import Image from "next/image";

// Define the type for a location
type Location = {
  name: string;
  address: string;
  image: string;
  mapLink: string;
};

export default function Locations() {
  const locations: Location[] = [
    {
      name: "MAZ 23 PROPERTY",
      address: "Jl. Rajawali Barat No.19 Bandung, 40184",
      image: "/assets/maz_23_property_1.jpg",
      mapLink: "https://maps.app.goo.gl/U4Rpu3qEMwHbHtYN7",
    },
    {
      name: "CENTER PRO",
      address: "Jl. BKR No.98 Bandung, 40254",
      image: "/assets/center_pro_1.jpg",
      mapLink: "https://maps.app.goo.gl/6TU4K1ouuRZdxRTH9",
    },
  ];

  return (
    <section id="loc" className="py-10">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-blue mb-12">
          Lokasi Kami
        </h2>

        {/* Location Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <a
              key={index}
              href={location.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col h-full bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 hover:scale-[1.02]"
            >
              <div className="relative w-full h-60">
                <Image
                  src={location.image}
                  alt={location.name}
                  fill
                  className="object-cover rounded-t-xl"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <h3 className="text-lg md:text-xl font-semibold text-primary-blue mb-2">
                  {location.name}
                </h3>
                <p className="text-black text-sm md:text-base leading-relaxed">
                  {location.address}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
