"use client";

import React, { ChangeEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, Menu, X, PopcornIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setQuery } from "@/redux/searchSlice";
import { AppDispatch } from "@/redux/store";

export default function Component() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [inputText, setInputText] = useState<string>("");

  const dispatch = useDispatch<AppDispatch>();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const onRouteChange = (path: string) => {
    router.push(path);
    dispatch(setQuery(""));
    setInputText("");
  };

  const onPressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      dispatch(setQuery(inputText));
      router.push("/search");
    }
  };

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
              onClick={() => onRouteChange("/")}
            />
          </div>

          <div className='relative hidden md:block'>
            <Input
              type='search'
              placeholder='Search...'
              className='w-64 bg-gray-700 text-white placeholder-gray-400 border-gray-600 focus:border-gray-500'
              value={inputText}
              onChange={handleInputChange}
              onKeyDown={onPressEnter}
            />
            <Search className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4' />
          </div>
        </div>
        {isMenuOpen && (
          <div className='mt-4 md:hidden'>
            <div className='relative mt-4'>
              <Input
                type='search'
                placeholder='Search...'
                className='w-full bg-gray-700 text-white placeholder-gray-400 border-gray-600 focus:border-gray-500'
                value={inputText}
                onChange={handleInputChange}
                onKeyDown={onPressEnter}
              />
              <Search className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4' />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
