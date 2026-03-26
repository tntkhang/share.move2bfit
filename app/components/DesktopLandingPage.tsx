"use client";

import { useState, useCallback } from "react";
import { QRCodeSVG } from "qrcode.react";

type ContentType = "challenge" | "friend" | "article" | "default";

interface Props {
  type: ContentType;
  id?: string;
  deepLink: string;
}

const APP_STORE_URL = "https://apps.apple.com/vn/app/move2bfit/id6496063347";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.walk2bfit.walk2bfit";

function getContent(type: ContentType, id?: string) {
  switch (type) {
    case "challenge":
      return {
        title: "Join the Challenge",
        description: `You've been invited to join challenge #${id} on Move2BFit.`,
        button: "Join Now",
      };
    case "friend":
      return {
        title: "Add a Friend",
        description: `Someone wants to connect with you on Move2BFit (User ID: ${id}).`,
        button: "Accept Request",
      };
    case "article":
      return {
        title: "Read Article",
        description: `Check out this article on Move2BFit.`,
        button: "Read in App",
      };
    default:
      return {
        title: "Open on Your Phone",
        description: "This link works best in the Move2BFit mobile app.",
        button: "Download App",
      };
  }
}

export default function DesktopLandingPage({ type, id, deepLink }: Props) {
  const [showToast, setShowToast] = useState(false);
  const content = getContent(type, id);

  const copyLink = useCallback(() => {
    navigator.clipboard.writeText(deepLink);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  }, [deepLink]);

  return (
    <div
      style={{
        margin: 0,
        fontFamily: "'Inter', sans-serif",
        background: "#f5f7fb",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        color: "#1f2937",
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: 16,
          padding: "40px 28px",
          maxWidth: 420,
          width: "100%",
          textAlign: "center",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        }}
      >
        <div
          style={{
            fontWeight: 700,
            fontSize: 20,
            marginBottom: 16,
          }}
        >
          Move2BFit
        </div>

        <h1 style={{ fontSize: 24, marginBottom: 10 }}>{content.title}</h1>

        <p
          style={{
            fontSize: 14,
            color: "#6b7280",
            marginBottom: 24,
            lineHeight: 1.5,
          }}
        >
          {content.description}
          <br />
          Scan the QR code or download the app to continue.
        </p>

        <div
          style={{
            margin: "20px 0",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <QRCodeSVG value={deepLink} size={160} />
        </div>

        <div
          style={{
            display: "flex",
            gap: 10,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() => {
              window.location.href = APP_STORE_URL;
            }}
            style={{
              padding: "10px 16px",
              borderRadius: 10,
              fontWeight: 600,
              fontSize: 14,
              cursor: "pointer",
              border: "none",
              background: "#4f46e5",
              color: "#fff",
            }}
          >
            {content.button}
          </button>
          <button
            onClick={copyLink}
            style={{
              padding: "10px 16px",
              borderRadius: 10,
              fontWeight: 600,
              fontSize: 14,
              cursor: "pointer",
              border: "1px solid #d1d5db",
              background: "#fff",
            }}
          >
            Copy Link
          </button>
        </div>

        <div style={{ marginTop: 20 }}>
          <a href={APP_STORE_URL}>
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="Download on the App Store"
              style={{ height: 42, margin: 6 }}
            />
          </a>
          <a href={PLAY_STORE_URL}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Get it on Google Play"
              style={{ height: 42, margin: 6 }}
            />
          </a>
        </div>
      </div>

      <div
        style={{
          position: "fixed",
          bottom: 20,
          left: "50%",
          transform: "translateX(-50%)",
          background: "#111827",
          color: "#fff",
          padding: "10px 16px",
          borderRadius: 8,
          display: showToast ? "block" : "none",
          zIndex: 1000,
        }}
      >
        Link copied
      </div>
    </div>
  );
}
