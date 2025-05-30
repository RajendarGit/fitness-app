"use client";

import { useAppSelector } from "@/hooks/redux";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Clock, MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { imgPath } from "@/utils";
import React from "react";

export default function HomePage() {
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);

  const stats = [
    { number: "15", label: "TRAINERS" },
    { number: "240", label: "MEMBERS" },
    { number: "10", label: "YEARS" },
    { number: "10K", label: "HOURS" },
  ];

  const scheduleData = [
    {
      time: "6:30AM",
      monday: "CROSSFIT",
      tuesday: "",
      wednesday: "CROSSFIT",
      thursday: "",
      friday: "CROSSFIT",
      saturday: "",
      sunday: "",
    },
    {
      time: "10:30AM",
      monday: "",
      tuesday: "CROSSFIT",
      wednesday: "",
      thursday: "CROSSFIT",
      friday: "",
      saturday: "CROSSFIT",
      sunday: "",
    },
    {
      time: "2:30PM",
      monday: "",
      tuesday: "",
      wednesday: "CROSSFIT",
      thursday: "",
      friday: "CROSSFIT",
      saturday: "",
      sunday: "",
    },
    {
      time: "4:30PM",
      monday: "CROSSFIT",
      tuesday: "",
      wednesday: "",
      thursday: "CROSSFIT",
      friday: "",
      saturday: "",
      sunday: "",
    },
    {
      time: "6:30PM",
      monday: "",
      tuesday: "CROSSFIT",
      wednesday: "",
      thursday: "",
      friday: "CROSSFIT",
      saturday: "",
      sunday: "",
    },
  ];

  const trainers = [
    {
      name: "CHRISTOPHER MORGAN",
      title: "Cross Fit / Strength / Cardio",
      image: "/placeholder.svg?height=300&width=250",
    },
    {
      name: "SAMANTHA PAUL",
      title: "Yoga / Pilates / Cardio",
      image: "/placeholder.svg?height=300&width=250",
    },
    {
      name: "MICHAEL JOHNSON",
      title: "Boxing / MMA / Strength",
      image: "/placeholder.svg?height=300&width=250",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-teal-800 to-teal-700">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <Image
          src={imgPath("banner.jpg")}
          alt="Hero Background"
          fill
          className="object-cover"
        />
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-5xl sm:text-7xl font-black uppercase mb-6 leading-tight">
                FITNESS <span className="text-orange-500">HAS NEVER</span>
                <br />
                BEEN SO MUCH FUN!
              </h1>
              <p className="text-xl mb-8 text-teal-100">
                Transform your body and mind with our state-of-the-art
                facilities and expert trainers.
              </p>

              {isAuthenticated ? (
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">
                    Welcome back, {user?.name}!
                  </h2>
                  <Button
                    size="lg"
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold uppercase tracking-wide px-8 py-4 text-lg"
                  >
                    START TODAY
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              ) : (
                <Button
                  size="lg"
                  asChild
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold uppercase tracking-wide px-8 py-4 text-lg"
                >
                  <Link href="/register">START TODAY</Link>
                </Button>
              )}
            </div>

            {/* Hero Image */}
            <div className="absolute right-[-250px] bottom-[50px]">
              <Image
                src={imgPath("banner-hero.png")}
                alt="Fitness Hero"
                className="w-[1000px] h-auto"
                width={500}
                height={500}
              />
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-5 mt-16 bg-teal-800 rounded-lg relative z-10 items-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-center text-white p-10">
                  <div className="text-4xl md:text-6xl font-black text-orange-500 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm font-bold uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
                {index !== stats.length - 1 && (
                  <div className="absolute top-20 hidden xl:block h-10 w-px bg-white/10 ml-[270px]" aria-hidden="true"></div>
                )}
              </div>
            ))}
            <div className="bg-teal-900 p-10 text-white rounded-r-lg">
              <section className="flex flex-col">
                <h2 className="text-2xl font-bold mb-4 font-oswald uppercase">
                  Contact Us
                </h2>
                <div className="flex flex-col items-center gap-4 text-lg font-roboto">
                  <div className="flex items-center gap-3">
                    <Phone className="text-primary" />
                    <span>+1 (234) 567-8901</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="text-primary" />
                    <span>info@example.com</span>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Schedule Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-teal-800/50">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-black text-white uppercase">
              Weekly Schedules
            </h2>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold uppercase">
              VIEW ALL
            </Button>
          </div>

          <div className="bg-teal-900/80 rounded-lg p-6 overflow-x-auto">
            <table className="w-full text-white">
              <thead>
                <tr className="border-b border-teal-600">
                  <th className="text-left py-4 px-2 font-bold uppercase text-sm">
                    Time
                  </th>
                  <th className="text-center py-4 px-2 font-bold uppercase text-sm">
                    Monday
                  </th>
                  <th className="text-center py-4 px-2 font-bold uppercase text-sm">
                    Tuesday
                  </th>
                  <th className="text-center py-4 px-2 font-bold uppercase text-sm">
                    Wednesday
                  </th>
                  <th className="text-center py-4 px-2 font-bold uppercase text-sm">
                    Thursday
                  </th>
                  <th className="text-center py-4 px-2 font-bold uppercase text-sm">
                    Friday
                  </th>
                  <th className="text-center py-4 px-2 font-bold uppercase text-sm">
                    Saturday
                  </th>
                  <th className="text-center py-4 px-2 font-bold uppercase text-sm">
                    Sunday
                  </th>
                </tr>
              </thead>
              <tbody>
                {scheduleData.map((row, index) => (
                  <tr key={index} className="border-b border-teal-700/50">
                    <td className="py-4 px-2 font-bold">{row.time}</td>
                    <td className="py-4 px-2 text-center">
                      {row.monday && (
                        <span className="bg-orange-500 px-3 py-1 rounded text-xs font-bold">
                          {row.monday}
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-2 text-center">
                      {row.tuesday && (
                        <span className="bg-orange-500 px-3 py-1 rounded text-xs font-bold">
                          {row.tuesday}
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-2 text-center">
                      {row.wednesday && (
                        <span className="bg-orange-500 px-3 py-1 rounded text-xs font-bold">
                          {row.wednesday}
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-2 text-center">
                      {row.thursday && (
                        <span className="bg-orange-500 px-3 py-1 rounded text-xs font-bold">
                          {row.thursday}
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-2 text-center">
                      {row.friday && (
                        <span className="bg-orange-500 px-3 py-1 rounded text-xs font-bold">
                          {row.friday}
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-2 text-center">
                      {row.saturday && (
                        <span className="bg-orange-500 px-3 py-1 rounded text-xs font-bold">
                          {row.saturday}
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-2 text-center">
                      {row.sunday && (
                        <span className="bg-orange-500 px-3 py-1 rounded text-xs font-bold">
                          {row.sunday}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-black text-white uppercase">
              Certified Fitness Coaches
            </h2>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold uppercase">
              VIEW ALL
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
              <Card
                key={index}
                className="bg-teal-800/80 border-teal-600/30 text-white overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={trainer.image || "/placeholder.svg"}
                    alt={trainer.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <h3 className="text-xl font-bold uppercase mb-1">
                      {trainer.name}
                    </h3>
                    <p className="text-orange-500 text-sm font-semibold">
                      {trainer.title}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-teal-800/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="text-white">
              <h2 className="text-4xl font-black uppercase mb-8">
                Get In Touch
              </h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-orange-500" />
                  <span>123 Fitness Street, Gym City, GC 12345</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-orange-500" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-orange-500" />
                  <span>info@boosterpower.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="h-6 w-6 text-orange-500" />
                  <span>Mon-Fri: 5AM-11PM | Sat-Sun: 6AM-10PM</span>
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
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold uppercase">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
