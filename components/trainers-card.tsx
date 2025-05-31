import React from "react";
import { Card } from "./ui/card";
import { imgPath } from "@/utils";
import Image from "next/image";
import { trainers } from "@/data";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "./ui/button";

const TrainersCard = ({
  trainer,
  handleViewBioClick,
  isTrainerPage = false,
}: {
  trainer: (typeof trainers)[number];
  handleViewBioClick?: () => void;
  isTrainerPage?: boolean;
}) => {
  return (
    <Card className="bg-teal-800/80 border-teal-600/30 text-white overflow-hidden">
      <div className="relative">
        <Image
          src={imgPath(trainer.image) || "/placeholder.svg"}
          alt={trainer.name}
          className="w-full h-64 object-cover"
          width={100}
          height={100}
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
          <h3 className="text-xl font-bold uppercase mb-1">{trainer.name}</h3>
          <p className="text-primary text-sm font-semibold">{trainer.title}</p>
          {isTrainerPage && (
            <Button
              variant="ghost"
              onClick={handleViewBioClick}
              className="p-0 hover:bg-transparent hover:text-primary"
            >
              View Bio <ArrowRightIcon className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default TrainersCard;
