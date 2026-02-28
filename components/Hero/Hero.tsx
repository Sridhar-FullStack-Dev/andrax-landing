import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      data-theme="white"
      className="h-screen w-full bg-white p-8 mt-20"
    >
      <Image
        src="https://images.pexels.com/photos/943907/pexels-photo-943907.jpeg"
        alt="Hero"
        width={1920}
        height={1080}
        className="w-full h-full object-cover"
      />
    </section>
  );
}
