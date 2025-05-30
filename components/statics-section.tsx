import { Mail } from 'lucide-react'
import { stats } from "@/data";
import { Phone } from "lucide-react";
import React from "react";

const StaticSection = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 mt-16 bg-teal-800 rounded-lg relative z-10 items-center">
      {stats.map((stat, index) => (
        <div key={index}>
          <div className="text-center text-white p-10">
            <div className="text-4xl md:text-6xl font-black text-primary mb-2">
              {stat.number}
            </div>
            <div className="text-sm font-bold uppercase tracking-wider">
              {stat.label}
            </div>
          </div>
          {index !== stats.length - 1 && (
            <div
              className="absolute top-20 hidden xl:block h-10 w-px bg-white/10 ml-[270px]"
              aria-hidden="true"
            ></div>
          )}
        </div>
      ))}
      <div className="bg-teal-900 p-10 text-white rounded-r-lg">
        <section className="flex flex-col">
          <h2 className="text-2xl font-bold mb-4 font-oswald uppercase">
            Contact Us
          </h2>
          <div className="flex flex-col gap-4 text-lg font-roboto">
            <p className="flex items-center gap-3 text-sm">
              <Phone className="text-primary w-4" />
              <span>+1 (234) 567-8901</span>
            </p>
            <p className="flex items-center gap-3 text-sm">
              <Mail className="text-primary w-4" />
              <span>info@example.com</span>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StaticSection;
