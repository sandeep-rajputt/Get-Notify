import React, { useState } from "react";
import FaqBox from "../common/FaqBox";

const Faqs = ({ faqsData }) => {
  const [selected, setSelected] = useState(null);

  function toggle(index) {
    if (selected === index) {
      setSelected(null);
    } else {
      setSelected(index);
    }
  }

  return (
    <section className="py-20 ">
      <div>
        <h2 className="text-center md:text-5xl text-4xl font-bold mb-4 text-dark-purple">
          FAQ - Frequently Asked Questions
        </h2>
        <p className="mx-auto text-purple-text mb-20 max-w-2xl text-center">
          GetNotify aims to provide you with all the information you need. Here
          are some common questions we receive from our users. If you have any
          additional inquiries, feel free to reach out!
        </p>
      </div>
      <div className="flex flex-col gap-5">
        {faqsData.map((faq, index) => {
          return (
            <FaqBox
              key={index}
              data={faq}
              toggle={toggle}
              index={index}
              selected={selected === index}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Faqs;
