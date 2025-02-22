'use client'

import React from 'react';
import Link from 'next/link';
import { HoverEffect } from './ui/card-hover-effect';

function UpcomingWebinar() {

        const featuredWebinars = [
          {
            title: 'React.js',
            description:
              '',
            slug: '',
            isFeatured: true,
          },
          {
            title: 'Javascript',
            description:
              '',
            slug: '',
            isFeatured: true,
          },
          {
            title: 'Tailwind-CSS',
            description:
              '',
            slug: '',
            isFeatured: true,
          },
          {
            title: 'Python',
            description:
              '',
            slug: '',
            isFeatured: true,
          },
          // Added two more webinars
          {
            title: 'Express.js',
            description:
              '',
            slug: '',
            isFeatured: true,
          },
          {
            title: 'MongoDB',
            description:
              '',
            slug: '',
            isFeatured: true,
          },
          {
            title: '',
            description:
              '',
            slug: '',
            isFeatured: true,
          },
          {
            title: 'Github',
            description:
              '',
            slug: '',
            isFeatured: true,
          },
          {
            title: 'Bootstrap',
            description:
              '',
            slug: '',
            isFeatured: true,
          },
        ];

  return (
    <div className=' p-12 bg-gray-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <div className='text-center'>
            <h2 className='text-3xl text-white font-semibold tracking-wide uppercase'>Technical Skills</h2>
            {/* <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Enhanced Your Musical Journey</p> */}
        </div>
        <div className='mt-10 text-center'>
            <HoverEffect items={featuredWebinars.map((webinar)=>(
                {
                    title: webinar.title,
                    description: webinar.description,
                    link: '/',
                }
            ))}/>
        </div>
        {/* <div className='mt-10 text-center'>
            <Link href={"/"}
            className='px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200'
            >
                View All webinars
            </Link>
        </div> */}
      </div>
    </div>
  );
}

export default UpcomingWebinar;
