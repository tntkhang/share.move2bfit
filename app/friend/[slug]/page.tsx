"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import DesktopLandingPage from "../../components/DesktopLandingPage";

export default function FriendPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [isDesktop, setIsDesktop] = useState(false);
  const [deepLink, setDeepLink] = useState("");

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const isIOS = /iPad|iPhone|iPod/.test(userAgent);
    const isAndroid = /Android/.test(userAgent);

    if (isIOS) {
      window.location.href =
        "https://apps.apple.com/vn/app/move2bfit/id6496063347";
    } else if (isAndroid) {
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.walk2bfit.walk2bfit";
    } else {
      setDeepLink(window.location.href);
      setIsDesktop(true);
    }
  }, []);

  if (!isDesktop) {
    return (
      <div>
        <main>
          <h1>Move2BFit</h1>
        </main>
      </div>
    );
  }

  return <DesktopLandingPage type="friend" id={slug} deepLink={deepLink} />;
}
