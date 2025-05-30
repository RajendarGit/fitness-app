import { Mail } from "lucide-react";
import { Phone } from "lucide-react";

export default function ContactUs() {
  return (
    <section className="flex flex-col items-center py-8">
      <h2 className="text-3xl font-bold mb-4 font-oswald">Contact Us</h2>
      <div className="flex flex-col gap-4 text-lg font-roboto">
        <div className="flex items-center gap-2">
          <Phone className="text-primary" />
          <span>+1 (234) 567-8901</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="text-primary" />
          <span>info@example.com</span>
        </div>
      </div>
    </section>
  );
} 