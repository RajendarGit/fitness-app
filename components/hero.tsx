import { imgPath } from "@/utils";
import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { useAppSelector } from "@/hooks/redux";
import StaticSection from "./statics-section";

const Hero = () => {
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);

  const startTodayButton = () => {
    return (
        <Button asChild className="rounded-full px-10 py-8">
            <Link href={isAuthenticated ? "/dashboard" : "/register"}>
                START TODAY
                <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
        </Button>
    )
}

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-black/80 z-10"></div>
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
              FITNESS <span className="bg-gradient-to-r from-teal-500 to-primary bg-clip-text text-transparent">HAS NEVER</span>
              <br />
              BEEN SO MUCH FUN!
            </h1>
            <p className="text-xl mb-8 text-white/60">
              Transform your body and mind with our state-of-the-art facilities
              and expert trainers.
            </p>

            {isAuthenticated ? (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">
                  Welcome back, <span className="text-primary">{user?.name}!</span>
                </h2>
                {startTodayButton()}    
              </div>
            ) : (
              startTodayButton()
            )}
          </div>

          {/* Hero Image */}
          <div className="absolute right-[-250px] bottom-[50px] hidden xl:block">
            <Image
              src={imgPath("banner-hero.png")}
              alt="Fitness Hero"
              className="w-[1200px] h-auto"
              width={500}
              height={500}
            />
          </div>
        </div>

        {/* Stats Section */}
        <StaticSection />
      </div>
    </section>
  );
};

export default Hero;
