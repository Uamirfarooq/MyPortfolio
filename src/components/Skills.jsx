import React from "react";

import { motion } from "framer-motion";

const Skill = ({name, x, y}) => {
  return(
    <motion.div
    className="flex justify-center font-bold text-2xl shadow-dark cursor-pointer bg-dark rounded-full text-light py-5 px-7 absolute"
    whileHover={{ scale: 1.05 }}
    initial={{ x: 0, y: 0 }}
    whileInView={{ x: x, y: y }}
    transition={{ duration: 1.5 }}
    viewport={{once: true}}
  >
    {name}
  </motion.div>
  )
}

const Skills = () => {

  return (
    <>
      <h2 className=" font-bold text-8xl mt-64 w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full  bg-circularLight">
       
        <Skill name="Web" x="0vw" y="0vw"/>
        <Skill name="HTML" x="-22vw" y="-4vw"/>
        <Skill name="CSS" x="-5vw" y="-11vw"/>
        <Skill name="JavaScript" x="20vw" y="6vw"/>
        <Skill name="ReactJs" x="0vw" y="12vw"/>
        <Skill name="NextJs" x="-32vw" y="-19vw"/>
        <Skill name="WebDesign" x="15vw" y="-20vw"/>
        <Skill name="Figma" x="32vw" y="-5vw"/>
        <Skill name="Firebase" x="10vw" y="21vw"/>
        <Skill name="Tailwind css" x="-25vw" y="14vw"/>
        <Skill name="MongoDB" x="32vw" y="18vw"/>
      </div>
    </>
  );
};

export default Skills;
