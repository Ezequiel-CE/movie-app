import ErrorCard from "@/components/Movie/Card/Error";

import React from "react";

export default function NotFound() {
  return (
    <div className='min-h-[80vh] flex items-center justify-center'>
      <ErrorCard />
    </div>
  );
}
