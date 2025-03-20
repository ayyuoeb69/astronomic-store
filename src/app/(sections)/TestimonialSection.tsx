"use client";

import { motion } from "framer-motion";
import TestimonialCard from "../(components)/TestimonialCardComponent";
import TitleComponent from "../(components)/TitleComponent";

const TestimonialSection = () => {
  const testimonials = [
    {
      quote: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit.”",
      name: "Claudio Lanzinger Zurita",
      title: "Astronomist - GTG",
    },
    {
      quote:
        "“Nulla quis velit mi. Nulla non dui vel lacus commodo congue in non enim.”",
      name: "Claudio Lanzinger Zurita",
      title: "Lecturer - GTG",
    },
    {
      quote: "“Vivamus ac augue eget massa interdum consectetur.”",
      name: "Claudio Lanzinger Zurita",
      title: "Programmer - GTG",
    },
  ];

  return (
    <motion.section
      animate={{
        opacity: 1,
      }}
      initial={{
        opacity: 0,
      }}
    >
      <div className="min-h-[485px]">
        <TitleComponent
          title="Discover Why Astronomers Choose Us!"
          subtitle="what they think about us"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus bibendum tempus viverra. Nulla quis velit mi."
          className="px-4"
        />

        <motion.div
          className="flex gap-4 md:flex-row flex-col justify-center w-full mt-12 px-4"
          transition={{
            x: { duration: 0.5, type: "tween", ease: "easeInOut" },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={`${testimonial.name}-${index}`}
              {...testimonial}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TestimonialSection;
