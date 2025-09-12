import Image from "next/image";

export default function CreditLogos() {
  return (
    <div className="bg-white p-6 rounded-b-xl shadow-md max-w-4xl mx-auto relative z-10">
      <div className="grid grid-cols-4 gap-4 sm:gap-8 justify-items-center items-center">
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/gestun-bandung.appspot.com/o/visa.png?alt=media&token=b99191b4-9509-454e-b9ad-33a2760ef0d1"
          alt="Visa"
          width={125}
          height={80}
          className="w-14 sm:w-20 md:w-24 lg:w-28 object-contain"
        />
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/gestun-bandung.appspot.com/o/mastercard.png?alt=media&token=6a803e4e-42fd-4892-a672-ebda5a86cfc6"
          alt="Mastercard"
          width={125}
          height={80}
          className="w-14 sm:w-20 md:w-24 lg:w-28 object-contain"
        />
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/gestun-bandung.appspot.com/o/jcb.png?alt=media&token=7c2d828e-cabc-4872-8646-e42803b9deb7"
          alt="JCB"
          width={125}
          height={80}
          className="w-14 sm:w-20 md:w-24 lg:w-28 object-contain"
        />
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/gestun-bandung.appspot.com/o/online.jpg?alt=media&token=576426d8-6a85-4008-801a-bd2faa3b4299"
          alt="Online Payment"
          width={125}
          height={80}
          className="w-14 sm:w-20 md:w-24 lg:w-28 object-contain"
        />
      </div>
    </div>
  );
}
