"use client";
import React, { useState } from "react";
import { trainers } from "@/data";
import { imgPath } from "@/utils";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import TrainersCard from "@/components/trainers-card";
export default function CertifiedFitnessCoachesPage() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-br from-teal-900 via-primary/30 to-teal-700">
      <div className="container mx-auto">
        <h1 className="text-4xl font-black text-white uppercase mb-12 text-center">
          Certified Fitness Coaches
        </h1>
        <div className="flex flex-wrap gap-8 justify-center items-stretch transition-all duration-500">
          {selected === null ? (
            trainers.map((trainer, idx) => (
              <TrainersCard key={idx} trainer={trainer} handleViewBioClick={() => setSelected(idx)} isTrainerPage={true} />
            ))
          ) : (
            <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 animate-fade-in">
              <div className="flex-1 flex justify-center">
                <Card className="bg-teal-800/80 border-teal-600/30 text-white overflow-hidden w-full max-w-md shadow-2xl animate-slide-in-left">
                  <Image
                    src={imgPath(trainers[selected].image) || "/placeholder.svg"}
                    alt={trainers[selected].name}
                    className="w-full h-96 object-cover"
                    width={400}
                    height={384}
                  />
                </Card>
              </div>
              <div className="flex-1 max-w-xl animate-slide-in-right">
                <Card className="bg-teal-900/90 border-teal-600/30 text-white p-8 shadow-2xl flex flex-col justify-center animate-fade-in">
                  <h2 className="text-3xl font-black uppercase mb-4 text-primary">
                    {trainers[selected].name}
                  </h2>
                  <h3 className="text-xl font-bold mb-4">
                    {trainers[selected].title}
                  </h3>
                  <p className="text-lg mb-8 text-teal-100 leading-relaxed">
                    {trainers[selected].bio}
                  </p>
                  <Button
                  variant="ghost"
                    className="p-0 hover:bg-transparent hover:text-primary"
                    onClick={() => setSelected(null)}
                  >
                    <ArrowLeftIcon className="w-4 h-4" />Back
                  </Button>
                </Card>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
