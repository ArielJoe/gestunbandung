"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Locations() {
  const [selectedLocation, setSelectedLocation] = useState<any | null>(null);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedLocation) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedLocation]);

  const locations = [
    {
      name: "MAZ 23 PROPERTY",
      address: "Jl. Rajawali Barat No.19 Bandung, 40184",
      image: "/assets/maz_23_property_1.jpg",
      mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.8292503365205!2d107.56818707410646!3d-6.911009967636179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e5e0f09f6783%3A0x9717a6a937add8d3!2sJl.%20Rajawali%20Barat%20No.19%2C%20Maleber%2C%20Kec.%20Andir%2C%20Kota%20Bandung%2C%20Jawa%20Barat%2040184!5e0!3m2!1sen!2sid!4v1729444715394!5m2!1sen!2sid",
      mapLink: "https://maps.app.goo.gl/U4Rpu3qEMwHbHtYN7",
    },
    {
      name: "CENTER PRO",
      address: "Jl. BKR No.98 Bandung, 40254",
      image: "/assets/center_pro_1.jpg",
      mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d495.07546240186207!2d107.6159656!3d-6.9378764!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e8860674972b%3A0x4171bdfe6ba6210!2sCenter%20Pro!5e0!3m2!1sen!2sid!4v1729440587786!5m2!1sen!2sid",
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
            <div
              key={index}
              onClick={() => setSelectedLocation(location)}
              className="group flex flex-col h-full bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 hover:scale-[1.02] cursor-pointer"
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
            </div>
          ))}
        </div>

        {/* Popup Modal */}
        {selectedLocation && (
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedLocation(null)} // ✅ Close when clicking background
          >
            <div
              className="bg-white rounded-xl max-w-3xl w-full shadow-2xl relative animate-fadeIn overflow-y-auto max-h-[90vh]"
              onClick={(e) => e.stopPropagation()} // ✅ Prevent close when clicking inside
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedLocation(null)}
                className="absolute top-4 right-4 text-black text-2xl"
              >
                ✕
              </button>

              {/* Content */}
              <div className="p-6 space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-blue">
                  {selectedLocation.name}
                </h2>
                <p className="text-black">{selectedLocation.address}</p>

                {/* Image */}
                <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow">
                  <Image
                    src={selectedLocation.image}
                    alt={selectedLocation.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Map */}
                <iframe
                  src={selectedLocation.mapEmbed}
                  className="w-full h-64 md:h-80 rounded-lg shadow"
                  allowFullScreen
                  loading="lazy"
                ></iframe>

                {/* Open in Maps Button */}
                <a
                  href={selectedLocation.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-[var(--primary-blue)] text-white py-3 rounded-lg font-semibold shadow"
                >
                  📍 Buka di Google Maps
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
