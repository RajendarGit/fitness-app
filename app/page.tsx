"use client";

import { useAppSelector } from "@/hooks/redux";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, MapPin, Phone, Mail } from "lucide-react";
import Hero from "@/components/hero";
import WeeklyScheduleSection from "@/components/weekly-schedule-section";
import TrainersSection from "@/components/trainers-section";
import ContactSection from "@/components/contact-section";

export default function HomePage() {
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-teal-800 to-teal-700">
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Weekly Schedule Section */}
      <WeeklyScheduleSection />

      {/* Trainers Section */}
      <TrainersSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
