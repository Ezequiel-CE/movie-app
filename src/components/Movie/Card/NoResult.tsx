import { Card, CardContent } from "@/components/ui/card";
import { Search } from "lucide-react";
import React from "react";

function NoResultsFound() {
  return (
    <Card className='w-full max-w-md bg-gray-800 text-white shadow-md'>
      <CardContent className='flex flex-col items-center justify-center p-6'>
        <div className='mb-4 bg-teal-700 rounded-full p-3 w-16 h-16 flex items-center justify-center'>
          <Search className='w-8 h-8 text-white' />
        </div>
        <h2 className='text-2xl font-bold text-center'>No Results Found</h2>
      </CardContent>
    </Card>
  );
}

export default NoResultsFound;
