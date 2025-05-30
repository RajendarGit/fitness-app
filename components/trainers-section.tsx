import React from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { trainers } from "@/data";
import { imgPath } from "@/utils";
const TrainersSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-black text-white uppercase">
            Certified Fitness Coaches
          </h2>
          <Button className="bg-primary hover:bg-orange-600 text-white font-bold uppercase">
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
                  src={imgPath(trainer.image) || "/placeholder.svg"}
                  alt={trainer.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-xl font-bold uppercase mb-1">
                    {trainer.name}
                  </h3>
                  <p className="text-primary text-sm font-semibold">
                    {trainer.title}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;
