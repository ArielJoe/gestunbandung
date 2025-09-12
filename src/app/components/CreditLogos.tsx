import Image from "next/image";

export default function CreditLogos() {
  return (
    <div className="bg-white p-6 rounded-b-xl shadow-md max-w-4xl mx-auto relative z-10">
      <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20">
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/gestun-bandung.appspot.com/o/visa.png?alt=media&token=b99191b4-9509-454e-b9ad-33a2760ef0d1"
          alt="Visa"
          width={125}
          height={80}
          className="w-20 sm:w-24 md:w-28 lg:w-32 object-contain"
        />
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/gestun-bandung.appspot.com/o/mastercard.png?alt=media&token=6a803e4e-42fd-4892-a672-ebda5a86cfc6"
          alt="Mastercard"
          width={125}
          height={80}
          className="w-20 sm:w-24 md:w-28 lg:w-32 object-contain"
        />
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/gestun-bandung.appspot.com/o/jcb.png?alt=media&token=7c2d828e-cabc-4872-8646-e42803b9deb7"
          alt="JCB"
          width={125}
          height={80}
          className="w-20 sm:w-24 md:w-28 lg:w-32 object-contain"
        />
      </div>
    </div>
  );
}
