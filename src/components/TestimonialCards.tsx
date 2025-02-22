'use client'
import React from 'react';
import { InfiniteMovingCards } from './ui/infinite-moving-cards';

const musicSchoolTestimonials = [
    {
      quote:
        'Bachelors Of Technology(CSE)',
      name: 'RD Engineering College',
       title: 'SGPA - 7',
    },
    {
      quote:
        "Intermediate",
      name: 'Saraswati Vidya Mandir',
       title: 'Percentage - 61%',
    },
    {
      quote:
        "High School",
      name: 'Saraswati Vidya Mandir',
       title: 'Percentage - 66%',
    },
  
  ];

function MusicSchoolTestimonialCards() {
  return (
    <div className='h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden'>
      <h2 className='text-3xl font-bold text-center mb-8 z-10'>Education</h2>
      <div className='flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8'>
        <div className='w-full max-w6xl' >
            <InfiniteMovingCards
            items={musicSchoolTestimonials}
            direction="right"
            speed="slow"
            />
        </div>
      </div>
    </div>
  );
}

export default MusicSchoolTestimonialCards;
