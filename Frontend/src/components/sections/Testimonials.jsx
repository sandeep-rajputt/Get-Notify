import React from "react";
import Testimonial from "../common/Testimonial";

const testimonialsData = [
  {
    name: "Parveen Saini",
    feedback:
      "GetNotify has completely transformed how I manage my tasks. I never miss important deadlines anymore!",
    rating: 4,
    image: "https://i.pravatar.cc/512?u=891",
  },
  {
    name: "Gaurav Rana",
    feedback:
      "The recurring reminders feature is a lifesaver! It’s simple, efficient, and keeps me on track daily.",
    rating: 5,
    image: "https://i.pravatar.cc/512?u=541",
  },
  {
    name: "Mohit Sharma",
    feedback:
      "I love how reminders are sent directly to my WhatsApp. It’s fast and so convenient for my busy schedule.",
    rating: 5,
    image: "https://i.pravatar.cc/512?u=8651",
  },
  {
    name: "Johny Parmar",
    feedback:
      "GetNotify is super easy to use, and it helps me stay organized, both at work and in my personal life.",
    rating: 5,
    image: "https://i.pravatar.cc/512?u=8981",
  },
  {
    name: "Chintu Don",
    feedback:
      "I’ve tried many reminder tools, but GetNotify stands out for its simplicity and reliability. Highly recommend!",
    rating: 5,
    image: "https://i.pravatar.cc/512?u=89231",
  },
  {
    name: "Yuvraj Singh",
    feedback:
      "Thanks to GetNotify, I never miss any important updates. It’s like having a personal assistant in my pocket.",
    rating: 5,
    image: "https://i.pravatar.cc/512?u=89321",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="flex flex-col items-center">
        <h2 className="text-center md:text-5xl text-4xl font-bold mb-4 text-dark-purple">
          What Our Client Says
        </h2>
        <p className="text-center w-full text-purple-text mb-8 max-w-2xl">
          Helping people stay organized and on time, no matter where they are.
          Join a worldwide community of users who trust GetNotify for timely
          reminders and notifications.
        </p>
      </div>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 items-center  justify-center justify-items-center gap-10 mt-10">
        {testimonialsData.map((testimonial, index) => {
          return (
            <Testimonial
              key={index}
              name={testimonial.name}
              feedback={testimonial.feedback}
              rating={testimonial.rating}
              image={testimonial.image}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
