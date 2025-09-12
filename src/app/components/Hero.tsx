export default function Hero() {
  return (
    <section
      className="relative h-screen max-h-[1000px] flex items-center justify-center bg-gradient-to-r from-primary-blue/50 to-primary-blue/50 pt-16"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 113, 170, 0.5), rgba(0, 113, 170, 0.5)), url('https://firebasestorage.googleapis.com/v0/b/gestun-bandung.appspot.com/o/close-up-hand-using-credit-card-pay-by-sending-credit-card-staff-credit-card-swipe-machine-online-payment.jpg?alt=media&token=f4893839-a44d-4ee1-89b7-d62432438c2b')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-4 text-center text-white">
        <div className="text-3xl md:text-7xl font-bold mb-4 uppercase tracking-wide">
          GESEK TUNAI BANDUNG
        </div>
        <div className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Melayani gesek tunai dan pelunasan / dana talang kartu kredit
        </div>
        <a
          href="https://wa.me/6281385504830/?text=Halo Admin gestunrajawali"
          className="inline-block px-8 py-4 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-blue-500 to-green-400 shadow-lg hover:scale-105 transition-transform duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gestun Sekarang
        </a>
      </div>
    </section>
  );
}
