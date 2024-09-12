import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertCircle, Home } from "lucide-react";
import Link from "next/link";
import React from "react";

function ErrorCard() {
  return (
    <Card className='w-full max-w-md bg-gray-800 text-white shadow-md'>
      <CardHeader className='text-center'>
        <div className='mx-auto mb-4 bg-teal-700  rounded-full p-3 w-16 h-16 flex items-center justify-center'>
          <AlertCircle className='w-8 h-8 text-white' />
        </div>
        <CardTitle className='text-2xl font-bold'>
          Oops! Something went wrong
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className='text-center text-gray-300 mb-4'>
          We re sorry, but it seems there was an error processing your
          request.Please try again or return to the home page.
        </p>
      </CardContent>
      <CardFooter className='flex justify-center space-x-4'>
        <Link href='/'>
          <Button className='bg-teal-700 text-white hover:bg-teal-800'>
            <Home className='mr-2 h-4 w-4' />
            Go Home
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

export default ErrorCard;
