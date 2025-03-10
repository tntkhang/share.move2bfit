
"use client";
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const userAgent = navigator.userAgent;
    const isIOS = /iPad|iPhone|iPod/.test(userAgent);
    const isAndroid = /Android/.test(userAgent);

    if (isIOS) {
      window.location.href = 'https://apps.apple.com/vn/app/move2bfit/id6496063347';
    } else if (isAndroid) {
      window.location.href = 'https://play.google.com/store/apps/details?id=com.walk2bfit.walk2bfit';
    } else {
      window.location.href = 'https://move2bfit.com';
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
