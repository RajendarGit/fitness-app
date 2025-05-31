import Container from "@/components/container";
import InnerHero from "@/components/inner-hero";
import Wrapper from "@/components/wrapper";
import { imgPath } from "@/utils";
import ContactSection from "@/components/contact-section";

export default function ContactUsPage() {
  return (
    <Wrapper>
      <InnerHero src={imgPath("banner-hero.png")} alt="Contact Us" />
      <Container>
        <section className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-2">
            Let's Connect!
          </h2>
          <p className="text-lg text-white/80 mb-4">
            Have a question, want to join our community, or just want to say hi?
            Fill out the form or reach us directly—our team is always happy to
            help you on your fitness journey. We look forward to hearing from
            you!
          </p>
        </section>
        <ContactSection />
      </Container>
    </Wrapper>
  );
}
