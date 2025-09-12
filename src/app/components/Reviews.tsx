export default function Reviews() {
  return (
    <section id="review" className="bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-blue mb-8">
          Testimoni Pelanggan
        </h2>

        <div className="bg-gray-100 p-4 rounded-lg">
          <div className="h-96">
            <iframe
              src="https://widgets.sociablekit.com/google-reviews/iframe/25467292"
              width="100%"
              height="100%"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
