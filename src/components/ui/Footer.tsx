import Link from "next/link";
import React from "react";
import { YoutubeIcon, TwitterIcon, GithubIcon } from "../icons";

export default function Component() {
  return (
    <div className='dark bg-gray-900 text-white py-8 mt-7'>
      <div className='container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between'>
        <div className='flex items-center space-x-4'>
          <Link
            href='#'
            className='text-white hover:text-gray-300'
            prefetch={false}
          >
            <YoutubeIcon size='24px' />
            <span className='sr-only'>YouTube</span>
          </Link>
          <Link
            href='#'
            className='text-white hover:text-gray-300'
            prefetch={false}
          >
            <GithubIcon size='24px' />
            <span className='sr-only'>GitHub</span>
          </Link>
          <Link
            href='#'
            className='text-white hover:text-gray-300'
            prefetch={false}
          >
            <TwitterIcon size='24px' />
            <span className='sr-only'>Twitter</span>
          </Link>
        </div>
        <p className='mt-4 md:mt-0 text-sm text-gray-300'>
          &copy; CeCe. All rights reserved.
        </p>
      </div>
    </div>
  );
}
