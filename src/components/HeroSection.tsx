import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import { TypewriterEffect } from "./ui/typewriter-effect";

function HeroSection() {

  const words = [
    {
      text: "Hello!,",
      className: "text-blue-500 dark:text-blue-500"
    },
    {
      text: "I'm",
    },
    {
      text: "Suraj",
      // className: "text-blue-500 dark:text-blue-500",
    },

    {
      text: "Bist",
    },
   
  ];

  return (
    <div
    className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0"
    >
       <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 relative z-10 w-full text-center">

        <h1
        className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
        ><TypewriterEffect words={words}/></h1>
        <p
        className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto"
        >Passionate <span className=" text-orange-600 text-md">Full-Stack Developer.</span>Showcasing projects demonstrating front-end, back-end proficiency.Eager to learn and contribute </p>
        <div className="mt-4 flex justify-center text-centers items-center">
            {/* <Link href={"https://www.linkedin.com/in/suraj-bisht-644208273/"} type="_blank" 
            className=" mr-3"
            >
                <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                >
                    LinkedIn
                </Button>
          </Link> */}
          {/* <Link href={"mailto:bishtsuraj087@gmail.com"} type="_blank" 
            className=" mr-3"
            >
                <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                >
                    Gmail
                </Button>
          </Link> */}
          <Link href={"https://drive.google.com/file/d/1HxShA7wq3KuycgC9nNgSagI0FZDRjBF6/view?usp=drive_link"} type="_blank" 
            className=" mr-3"
            >
                <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                >
                    Resume
                </Button>
            </Link>
            {/* <Link href={"https://github.com/SurajBisht105"} type="_blank">
                <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                >
                    GitHub
                </Button>
          </Link> */}
          
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
