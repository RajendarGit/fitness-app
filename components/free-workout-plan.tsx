import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import Container from "@/components/container";
import { workoutPlans } from "@/data";

const FreeWorkoutPlan = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-teal-800/50 min-h-screen">
      <Container>
        <h1 className="text-4xl font-black text-white uppercase mb-10 text-center">Free Workout Plans</h1>
        <Tabs defaultValue="beginner" className="w-full max-w-2xl mx-auto">
          <TabsList className="mb-8 flex justify-center bg-transparent text-white">
            <TabsTrigger value="beginner" className="bg-primary/20 border-teal-600/30 text-white">Beginner</TabsTrigger>
            <TabsTrigger value="intermediate" className="bg-primary/20 border-teal-600/30 text-white">Intermediate</TabsTrigger>
            <TabsTrigger value="advanced" className="bg-primary/20 border-teal-600/30 text-white">Advanced</TabsTrigger>
          </TabsList>
          <TabsContent value="beginner">
            <Card className="bg-teal-900/80 border-teal-600/30 text-white">
              <CardHeader>
                <CardTitle>Beginner Plan</CardTitle>
                <CardDescription>Perfect for those just starting out. Focus on form and consistency.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {workoutPlans.beginner.map((item, idx) => (
                    <li key={idx} className="border-b border-teal-700/50 pb-2">
                      <span className="font-bold text-primary mr-2">{item.day}:</span>
                      {item.workout}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="intermediate">
            <Card className="bg-teal-900/80 border-teal-600/30 text-white">
              <CardHeader>
                <CardTitle>Intermediate Plan</CardTitle>
                <CardDescription>For those with some experience, ready to push further.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {workoutPlans.intermediate.map((item, idx) => (
                    <li key={idx} className="border-b border-teal-700/50 pb-2">
                      <span className="font-bold text-primary mr-2">{item.day}:</span>
                      {item.workout}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="advanced">
            <Card className="bg-teal-900/80 border-teal-600/30 text-white">
              <CardHeader>
                <CardTitle>Advanced Plan</CardTitle>
                <CardDescription>Challenging routines for experienced athletes.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {workoutPlans.advanced.map((item, idx) => (
                    <li key={idx} className="border-b border-teal-700/50 pb-2">
                      <span className="font-bold text-primary mr-2">{item.day}:</span>
                      {item.workout}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </Container>
    </section>
  );
};

export default FreeWorkoutPlan;
