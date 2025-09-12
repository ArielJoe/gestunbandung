import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-white py-4">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        {/* First row */}
        <article className="flex flex-col md:flex-row items-center mb-16">
          <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
            <Image
              src="/assets/close-up-shot-employees-accept-credit-card-payments-via-edc-online-payment-shopping.jpg"
              alt="Gestun Bandung - Gesek Tunai Kartu Kredit di Bandung Aman dan Cepat"
              width={500}
              height={350}
              priority
              className="rounded-lg shadow-lg w-full max-w-sm md:max-w-md object-cover"
            />
          </div>
          <div className="md:w-1/2 md:pl-8 lg:pl-12 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold text-primary-blue mb-6">
              Gesek Tunai Bandung – Jasa Pencairan Limit Kartu Kredit
            </h1>
            <p className="text-black mb-4 text-base sm:text-lg leading-relaxed">
              <strong>Gestun Bandung</strong> adalah layanan{" "}
              <em>gesek tunai kartu kredit</em> yang membantu Anda mencairkan
              limit kartu kredit dalam bentuk uang tunai. Kami menerima{" "}
              <strong>gestun fisik</strong> konvensional dengan proses cepat,
              aman, dan terpercaya untuk semua pemilik kartu kredit.
            </p>
            <p className="text-black text-base sm:text-lg leading-relaxed">
              Sebagai <strong>solusi keuangan di Bandung</strong>, kami hadir
              untuk memberikan kemudahan bagi Anda yang membutuhkan dana darurat
              atau tambahan modal. Dengan pelayanan profesional,{" "}
              <strong>Gesek Tunai Bandung</strong> terus meningkatkan kualitas
              layanan sehingga menjadi pilihan <em>financial solution</em> yang
              aman dan nyaman.
            </p>
          </div>
        </article>

        {/* Second row */}
        <article className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8 lg:pr-12 order-2 md:order-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-primary-blue mb-6">
              Apa Itu Gestun (Gesek Tunai)?
            </h2>
            <p className="text-black mb-4 text-base sm:text-lg leading-relaxed">
              <strong>Gestun (gesek tunai)</strong> adalah metode pencairan uang
              dengan kartu kredit selain tarik tunai melalui ATM. Proses ini
              telah menjadi solusi populer di kalangan pemilik kartu kredit yang
              membutuhkan dana cepat tanpa ribet.
            </p>
            <p className="text-black text-base sm:text-lg leading-relaxed">
              Cukup dengan mendatangi gerai kami di Bandung, Anda dapat langsung
              mencairkan dana menggunakan kartu kredit melalui proses{" "}
              <em>gesek tunai</em> dengan aman, cepat, dan profesional.
            </p>
          </div>
          <div className="md:w-1/2 mb-8 md:mb-0 order-1 md:order-2 flex justify-center">
            <Image
              src="/assets/close-up-image-woman-paying-with-credit-card-cafe.jpg"
              alt="Apa Itu Gestun - Gesek Tunai Kartu Kredit di Bandung"
              width={500}
              height={350}
              className="rounded-lg shadow-lg w-full max-w-sm md:max-w-md object-cover"
            />
          </div>
        </article>
      </div>
    </section>
  );
}
