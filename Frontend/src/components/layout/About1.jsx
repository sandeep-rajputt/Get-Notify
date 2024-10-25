import React from "react";

const About1 = () => {
  return (
    <>
      <section className="overflow-hidden py-20 px-6">
        <div className="container mx-auto">
          <div className="flex items-center xl:flex-row flex-col justify-center gap-10">
            <div className="px-4 order-1">
              <div className="flex items-center max-w-72 w-full justify-center">
                <div className="">
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://i.ibb.co/gFb3ns6/image-1.jpg"
                      alt="about us"
                      className="rounded-2xl w-96 select-none"
                      draggable="false"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <span className="block mb-4 text-4xl font-semibold text-primary text-main-purple/90">
                  Why Choose Us
                </span>
                <h2 className="mb-5 text-2xl font-bold text-dark text-dark-purple">
                  A Few Words About Us, What We Provide for Your Reminders
                </h2>
                <p className="mb-5 text-base text-body-color text-purple-text">
                  At GetNotify, we specialize in making sure you never miss an
                  important task or message. We help you set up reminders across
                  WhatsApp, Telegram, email, and more, ensuring you stay on top
                  of everything with ease.
                </p>
                <p className="mb-8 text-base text-body-color  text-purple-text">
                  With user-friendly tools and flexible features, we are
                  dedicated to supporting you in staying organized.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About1;
