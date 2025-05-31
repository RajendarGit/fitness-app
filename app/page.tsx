"use client";

import { useAppSelector } from "@/hooks/redux";
import Hero from "@/components/hero";
import WeeklyScheduleSection from "@/components/weekly-schedule-section";
import TrainersSection from "@/components/trainers-section";
import ContactSection from "@/components/contact-section";

export default function HomePage() {
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);

  return (
    <>
      <Hero />
      <WeeklyScheduleSection />
      <TrainersSection />
      <ContactSection />
    </>
  );
}
