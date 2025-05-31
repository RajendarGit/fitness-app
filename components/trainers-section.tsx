import React from "react";
import { trainers } from "@/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";
import Image from "next/image";
import TrainersCard from "./trainers-card";
import ViewAll from "./view-all";

const TrainersSection = () => {
  // Show only the first 6 trainers
  const visibleTrainers = trainers.slice(0, 6);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative bg-teal-700/50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-black text-white uppercase">
            Certified Fitness Coaches
          </h2>
          <ViewAll href="/trainers" />
        </div>
        <div className="relative flex items-center">
          <Carousel
            opts={{ align: "start", slidesToScroll: 3 }}
            className="w-full"
          >
            <CarouselPrevious className="-left-14 z-10 bg-primary/50 text-white border-none hover:bg-primary hover:text-white" />
            <CarouselContent className="gap-8">
              {visibleTrainers.map((trainer, index) => (
                <CarouselItem
                  key={index}
                  className="basis-1/3 max-w-[33%] min-w-0"
                >
                  <TrainersCard trainer={trainer} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext className="-right-14 z-10 bg-primary/50 text-white border-none hover:bg-primary hover:text-white" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;
