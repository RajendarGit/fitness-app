import Container from "@/components/container";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import { imgPath } from "@/utils";
import InnerHero from "@/components/inner-hero";

const classes = [
  {
    name: "CrossFit",
    image: imgPath("banner.jpg"),
    desc: "High-intensity functional training for strength, endurance, and agility."
  },
  {
    name: "Yoga",
    image: imgPath("female.jpg"),
    desc: "Find your balance, flexibility, and peace with our expert-led yoga sessions."
  },
  {
    name: "HIIT",
    image: imgPath("female2.jpg"),
    desc: "Burn calories fast with high-intensity interval training."
  },
  {
    name: "Boxing",
    image: imgPath("male2.jpg"),
    desc: "Unleash your power and improve your cardio with our boxing classes."
  },
  {
    name: "Zumba",
    image: imgPath("female3.jpg"),
    desc: "Dance your way to fitness with energetic Zumba sessions."
  },
  {
    name: "Pilates",
    image: imgPath("female4.jpg"),
    desc: "Strengthen your core and improve flexibility with Pilates."
  },
  {
    name: "Strength Training",
    image: imgPath("male5.jpg"),
    desc: "Build muscle and boost your metabolism with guided strength workouts."
  },
  {
    name: "Cardio Blast",
    image: imgPath("female5.jpg"),
    desc: "Heart-pumping cardio classes for all levels."
  },
  {
    name: "Functional Training",
    image: imgPath("male7.jpg"),
    desc: "Train for real-life movement and total-body strength."
  },
];

export default function ClassesPage() {
  return (
    <div className="bg-gradient-to-br from-teal-900 via-primary/30 to-teal-700 min-h-screen pb-20">
      <InnerHero src={imgPath("clasess.jpg")} alt="Our Classes" />
      <Container>
        <section className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">Find Your Perfect Fit</h2>
          <p className="text-lg text-white/90 mb-6">
            Whether you crave intensity, flexibility, or fun, we have a class for every goal and every level. Explore our diverse offerings and discover your new favorite way to move!
          </p>
        </section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {classes.map((cls, idx) => (
            <Card key={idx} className="bg-teal-900/80 border-teal-600/30 text-white shadow-2xl hover:scale-105 hover:shadow-primary/40 transition-transform duration-300 flex flex-col">
              <div className="relative h-48 w-full rounded-t-lg overflow-hidden">
                <Image
                  src={cls.image}
                  alt={cls.name}
                  fill
                  className="object-cover w-full h-48 group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 to-transparent" />
              </div>
              <CardHeader className="flex-1 flex flex-col items-center justify-center">
                <CardTitle className="text-2xl text-center mt-2 mb-1 font-bold tracking-wide">{cls.name}</CardTitle>
                <CardDescription className="text-center text-white/80 text-base mb-2">{cls.desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}
