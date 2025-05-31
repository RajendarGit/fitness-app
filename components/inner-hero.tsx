import Image from "next/image";
import Container from "./container";

const InnerHero = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="relative h-[260px] w-full mb-12">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover h-[260px] w-full brightness-75"
      />
      <div className="absolute w-full h-full bg-gradient-to-b from-transparent to-teal-900/50">
        <Container className="h-full flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-black text-white drop-shadow-lg uppercase tracking-widest text-center">{alt}</h1>
        </Container>
      </div>
    </div>
  );
};

export default InnerHero;
