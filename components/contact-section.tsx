import { Mail, User } from "lucide-react";
import { Phone } from "lucide-react";
import { MapPin } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-teal-800/50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="text-white">
            <h2 className="text-4xl font-black uppercase mb-8">Get In Touch</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <MapPin className="h-4 w-4 text-primary" />
                <span>123 Fitness Street, Gym City, GC 12345</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-4 w-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@boosterpower.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <Clock className="h-4 w-4 text-primary" />
                <span>Mon-Fri: 5AM-11PM | Sat-Sun: 6AM-10PM</span>
              </div>
              <div className="flex items-center space-x-4">
                <User className="h-4 w-4 text-primary" />
                <span>Designed and developed by Rajendar</span>
              </div>
            </div>
          </div>

          <div className="bg-teal-900/80 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-6 uppercase">
              Send Message
            </h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 bg-teal-800 border border-teal-600 rounded text-white placeholder-teal-300"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 bg-teal-800 border border-teal-600 rounded text-white placeholder-teal-300"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 bg-teal-800 border border-teal-600 rounded text-white placeholder-teal-300"
              ></textarea>
              <Button className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
