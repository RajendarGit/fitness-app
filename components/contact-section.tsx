"use client";
import { Mail, User } from "lucide-react";
import { Phone } from "lucide-react";
import { MapPin } from "lucide-react";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactSchema } from "@/schema/contact";
import { formMessages } from "@/lib/form-messages";

const ContactSection = () => {
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactSchema) => {
    setSuccess(true);
    reset();
    setTimeout(() => setSuccess(false), 3000);
  };

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
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)} noValidate>
              <input
                type="text"
                placeholder="Your Name"
                {...register("name")}
                className="w-full p-3 bg-teal-800 border border-teal-600 rounded text-white placeholder-teal-300"
              />
              {errors.name && (
                <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
              )}
              <input
                type="email"
                placeholder="Your Email"
                {...register("email")}
                className="w-full p-3 bg-teal-800 border border-teal-600 rounded text-white placeholder-teal-300"
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
              )}
              <textarea
                placeholder="Your Message"
                rows={4}
                {...register("message")}
                className="w-full p-3 bg-teal-800 border border-teal-600 rounded text-white placeholder-teal-300"
              ></textarea>
              {errors.message && (
                <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
              )}
              <Button className="w-full" type="submit">
                Send Message
              </Button>
              {success && (
                <p className="text-green-400 text-center mt-2">{formMessages.getInTouchSuccess}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
