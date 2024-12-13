
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
    <div>
      <main>
       <h1>Move2BFit</h1>
      </main>
    </div>
  );
}
