
"use client";
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const userAgent = navigator.userAgent;
    const isIOS = /iPad|iPhone|iPod/.test(userAgent);
    const isAndroid = /Android/.test(userAgent);

    if (isIOS) {
      window.location.href = 'https://apps.apple.com/us/app/facebook/id284882215';
    } else if (isAndroid) {
      window.location.href = 'https://play.google.com/store/apps/details?id=com.facebook.katana';
    } else {
      window.location.href = 'https://facebook.com';
    }
  }, []);


  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
       <h1>Move2BFit</h1>
      </main>
    </div>
  );
}
