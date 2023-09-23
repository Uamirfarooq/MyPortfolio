import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { DribbbleIcon, GithubIcon, LinkedInIcon, MoonIcon, PinterestIcon, SunIcon, TwitterIcon } from "./Icons";
import { motion } from "framer-motion";
import useThemeSwivher from "./hooks/useThemeSwivher";

const CustomLink = ({ href, title, className }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative  group`}>
      {title}
      <span
        className={`h-[1px] dark:bg-light left-0 -bottom-0.5 absolute inline-block bg-dark group-hover:w-full transition-[width] ease duration-300
              ${router.asPath === href ? "w-full" : "w-0"}
              `}
      >
        &nbsp;
      </span>
    </Link>
  );
};


const Navbar = () => {

  const [mode, setMode] = useThemeSwivher();

  return (
    <>
    <header className="w-full dark:text-light px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink href="/" title="Home" className=" relative mr-4" />
        <CustomLink href="/about" title="About" className=" mx-4" />
        <CustomLink href="/project" title="Project" className=" mx-4" />
        <CustomLink href="/artical" title="Artical" className=" ml-4" />
      </nav>
    
      <nav className=" flex items-center justify-center flex-wrap ">
        <motion.a href="https://twitter.com" target="_blank"
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}
        className="w-6 mr-2"
        >
         <TwitterIcon />
        </motion.a>
        <motion.a href="https://github.com" target="_blank"
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}

        className="w-6 mx-2">
          <GithubIcon />
        </motion.a>
        <motion.a href="https://linkedin.com" target="_blank"
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}

        className="w-6 mx-2">
          <LinkedInIcon />
        </motion.a>
        <motion.a href="https://pinterest.com" target="_blank"
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}

        className="w-6 mx-2">
          <PinterestIcon />
        </motion.a>
        <motion.a href="https://Dribbble.com" target="_blank"
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}

        className="w-6 ml-2">
          <DribbbleIcon />
        </motion.a>

        <button
        
        onClick={()=> setMode(mode ==="light" ? "dark" : "light")}
        className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode ==="light" ? "bg-dark text-light" : "bg-light text-dark"}`}
        >
          {
            mode === 'dark'? <SunIcon className=' fill-dark'/> : <MoonIcon className=' fill-dark'/>
          }
        </button>
        
      </nav>
      <div className=" absolute left-[50%] top-2 translate-x-[50%]">
        <Logo />
      </div>
      
    </header>
    
    {/* <div className="h-[1px] mx-32 w-80% -bottom-0.5 bg-dark">
      &nbsp;
    </div> */}
    </>
    
  );
};

export default Navbar;
