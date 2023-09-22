import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ time, type, place, info }) => {
  const first = useRef(null);
  return (
    <li
      ref={first}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={first} />
      <motion.div
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        className=" capitalize font-bold text-2xl"
      >
        <h3>{type}</h3>
        <span className=" capitalize font-medium text-dark/75">
          {time} | {place}
        </span>
        <p className="font-medium w-full">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });
  return (
    <div className=" py-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>
      <div ref={ref} className=" w-[75%] mx-auto relative ">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className=" absolute left-9 top-8 w-[4px] h-full bg-dark origin-top"
        />
        <ul className="w-full flex items-center justify-between flex-col ml-4">
          <Details
            type="Bachelor Of Science In Computer Science"
            time="2016-2020"
            place="2022-Present"
            address="Massachusetts Institute Of Technology (MIT)"
            work="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
      Intelligence."
          />
          <Details
            type="Bachelor Of Science In Computer Science"
            time="2016-2020"
            place="2022-Present"
            address="Massachusetts Institute Of Technology (MIT)"
            work="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
      Intelligence."
          />
          <Details
            type="Bachelor Of Science In Computer Science"
            time="2016-2020"
            place="2022-Present"
            address="Massachusetts Institute Of Technology (MIT)"
            work="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
      Intelligence."
          />
          <Details
            type="Bachelor Of Science In Computer Science"
            time="2016-2020"
            place="2022-Present"
            address="Massachusetts Institute Of Technology (MIT)"
            work="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
      Intelligence."
          />
          
        </ul>
      </div>
    </div>
  );
};

export default Education;
