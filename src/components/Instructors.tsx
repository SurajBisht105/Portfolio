'use client'
import React from 'react';
import { WavyBackground } from './ui/wavy-background';
import { AnimatedTooltip } from './ui/animated-tooltip';

const instructors = [
    {
      id: 0,
      name: "React.JS",
      designation: "",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.JCGGgssMIuUrZFU3I6jv0AHaHC&pid=Api&P=0&h=220",
    },
    {
      id: 1,
      name: "Next.JS",
      designation: "",
      image:
        "https://tse4.mm.bing.net/th?id=OIP.xiwoXAR_W1BdaGF-Cty0vgHaHa&pid=Api&P=0&h=220",
    },
    {
      id: 2,
      name: "Javascript",
      designation: "",
      image:
        "https://www.kindpng.com/picc/m/67-678384_transparent-javascript-icon-png-png-download.png",
    },
    {
      id: 3,
      name: "Python",
      designation: "",
      image:
        "https://www.kindpng.com/picc/m/159-1595848_python-logo-png-transparent-background-python-logo-png.png",
    },
    {
      id: 4,
      name: "Tailwind-CSS",
      designation: "",
      image:
        "https://velog.velcdn.com/images/fervor_dev/post/063202f7-ac63-49d9-ba7a-1fc9fb003adf/image.png",
    },
    {
      id: 5,
      name: "Express.JS",
      designation: "",
      image:
        "https://vectorified.com/images/express-js-icon-20.png",
    },
    {
      id: 6,
      name: "Node.JS",
      designation: "",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.ZCYZTnj-cq9QLK9x9au0YAD6D6&pid=Api&P=0&h=220",
    },
    {
      id: 7,
      name: "MongoDB",
      designation: "",
      image:
        "https://tse4.mm.bing.net/th?id=OIP.Ae6KuLbSCjSEbFBy2o2uiAHaHa&pid=Api&P=0&h=220",
    },
    {
      id: 8,
      name: "HTML",
      designation: "",
      image:
        "https://www.kindpng.com/picc/m/23-237485_html-5-badge-html-5-icon-hd-png.png",
    },
    {
      id: 9,
      name: "CSS",
      designation: "",
      image:
        "https://www.kindpng.com/picc/m/23-237467_transparent-css3-logo-png-html5-css3-png-download.png",
  },
  {
    id: 10,
    name: "Django",
    designation: "",
    image:
      "https://www.pngkey.com/png/detail/416-4165142_tools-and-frameworks-django-framework-logo.png",
  },
  ];

function Instructors() {
  return (
    <div className='relative h-[40rem] overflow-hidden flex items-center justify-center'>
        <WavyBackground className='w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full'>
            <h2 className='text-2xl md:text-center mb-8 lg:text-7xl text-white font-bold text-center'>Technical Skills</h2>
            <p className='text-base md:text-lg text-white text-center mb-4'>Hover icons to know more</p>
            <div className='flex flex-row items-center justify-center mb-10 w-[100%]'>
                <AnimatedTooltip items={instructors}/>
            </div>
        </WavyBackground>
    </div>
  );
}

export default Instructors;
