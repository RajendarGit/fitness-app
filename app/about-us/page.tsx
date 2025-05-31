import Container from "@/components/container";
import InnerHero from "@/components/inner-hero";
import Wrapper from "@/components/wrapper";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { trainers } from "@/data";
import { imgPath } from "@/utils";

export default function AboutUsPage() {
  return (
    <Wrapper>
      <InnerHero src={imgPath("about-us.jpg")} alt="About Us" />
      <Container>
        <section className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">Empowering Your Fitness Journey</h2>
          <p className="text-lg text-white/90 mb-6">
            At Booster Power, we believe fitness is for everyone. Our mission is to inspire, motivate, and empower you to become the best version of yourself—physically and mentally. Whether you're a beginner or a seasoned athlete, our community, trainers, and resources are here to support your goals.
          </p>
          <Button size="lg" className="mt-4">Join Our Community</Button>
        </section>

        <section className="mb-20 grid md:grid-cols-3 gap-8">
          <Card className="bg-teal-900/80 border-teal-600/30 text-white shadow-xl">
            <CardHeader>
              <CardTitle>State-of-the-Art Facility</CardTitle>
              <CardDescription>Modern equipment, clean environment, and a motivating atmosphere.</CardDescription>
            </CardHeader>
            <CardContent>
              <Image src="/images/banner.jpg" alt="Facility" width={400} height={200} className="rounded-lg object-cover w-full h-40" />
            </CardContent>
          </Card>
          <Card className="bg-teal-900/80 border-teal-600/30 text-white shadow-xl">
            <CardHeader>
              <CardTitle>Expert Trainers</CardTitle>
              <CardDescription>Certified professionals dedicated to your progress and safety.</CardDescription>
            </CardHeader>
            <CardContent>
              <Image src="/images/trainers.jpg" alt="Trainers" width={400} height={200} className="rounded-lg object-cover w-full h-40" />
            </CardContent>
          </Card>
          <Card className="bg-teal-900/80 border-teal-600/30 text-white shadow-xl">
            <CardHeader>
              <CardTitle>Inclusive Community</CardTitle>
              <CardDescription>Supportive, diverse, and welcoming to all fitness levels.</CardDescription>
            </CardHeader>
            <CardContent>
              <Image src="/images/clasess.jpg" alt="Community" width={400} height={200} className="rounded-lg object-cover w-full h-40" />
            </CardContent>
          </Card>
        </section>

        <section className="mb-20">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">Meet Our Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {trainers.map((member, idx) => (
              <Card key={idx} className="bg-teal-900/80 border-teal-600/30 text-white flex flex-col items-center shadow-lg">
                <Image src={imgPath(member.image)} alt={member.name} width={120} height={120} className="rounded-full object-cover mt-6 mb-4 border-4 border-primary" />
                <CardHeader className="items-center">
                  <CardTitle className="text-lg text-center">{member.name}</CardTitle>
                  <CardDescription className="text-center">{member.title}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="text-center py-12">
          <h4 className="text-2xl font-bold text-primary mb-4">Ready to Start Your Transformation?</h4>
          <p className="text-white/90 mb-6 max-w-xl mx-auto">
            Join Booster Power today and unlock your full potential. Our team and community are here to guide you every step of the way. Let's achieve greatness together!
          </p>
          <Button size="lg">Get Started</Button>
        </section>
      </Container>
    </Wrapper>
  );
}