"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, Menu, X, PopcornIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

export default function Component() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className='bg-gray-800 p-4'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <Button
              variant='ghost'
              size='icon'
              className='text-white md:hidden'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
            <PopcornIcon
              className='text-white w-8 h-8  ml-2 md:ml-0 hover:cursor-pointer'
              onClick={() => router.push("/")}
            />
          </div>
          <div className='hidden md:flex items-center space-x-4'>
            <Button variant='ghost' className='text-white hover:text-gray-300'>
              Home
            </Button>
            <Button variant='ghost' className='text-white hover:text-gray-300'>
              About
            </Button>
          </div>
          <div className='relative hidden md:block'>
            <Input
              type='search'
              placeholder='Search...'
              className='w-64 bg-gray-700 text-white placeholder-gray-400 border-gray-600 focus:border-gray-500'
            />
            <Search className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4' />
          </div>
        </div>
        {isMenuOpen && (
          <div className='mt-4 md:hidden'>
            <div className='flex flex-col space-y-2'>
              <Button
                variant='ghost'
                className='text-white hover:text-gray-300 justify-start'
              >
                Home
              </Button>
              <Button
                variant='ghost'
                className='text-white hover:text-gray-300 justify-start'
              >
                About
              </Button>
            </div>
            <div className='relative mt-4'>
              <Input
                type='search'
                placeholder='Search...'
                className='w-full bg-gray-700 text-white placeholder-gray-400 border-gray-600 focus:border-gray-500'
              />
              <Search className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4' />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
