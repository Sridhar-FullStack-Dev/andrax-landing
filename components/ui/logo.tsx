import Image from "next/image";

export default function Logo({ src }: { src: string }) {
  return (
    <Image
      src={src}
      alt="Logo"
      width={200}
      height={200}
      className="size-20 object-contain"
    />
  );
}
