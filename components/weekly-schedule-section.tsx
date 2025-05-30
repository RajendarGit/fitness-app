import React from "react";
import { Button } from "./ui/button";
import { scheduleData } from "@/data";

const WeeklyScheduleSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-teal-800/50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-black text-white uppercase">
            Weekly Schedules
          </h2>
          <Button>
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
                      <span className="bg-primary px-3 py-1 rounded text-xs font-bold">
                        {row.monday}
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-2 text-center">
                    {row.tuesday && (
                      <span className="bg-primary px-3 py-1 rounded text-xs font-bold">
                        {row.tuesday}
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-2 text-center">
                    {row.wednesday && (
                      <span className="bg-primary px-3 py-1 rounded text-xs font-bold">
                        {row.wednesday}
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-2 text-center">
                    {row.thursday && (
                      <span className="bg-primary px-3 py-1 rounded text-xs font-bold">
                        {row.thursday}
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-2 text-center">
                    {row.friday && (
                      <span className="bg-primary px-3 py-1 rounded text-xs font-bold">
                        {row.friday}
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-2 text-center">
                    {row.saturday && (
                      <span className="bg-primary px-3 py-1 rounded text-xs font-bold">
                        {row.saturday}
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-2 text-center">
                    {row.sunday && (
                      <span className="bg-primary px-3 py-1 rounded text-xs font-bold">
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
  );
};

export default WeeklyScheduleSection;
