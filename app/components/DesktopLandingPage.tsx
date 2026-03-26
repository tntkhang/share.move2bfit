"use client";

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
      };
    case "friend":
      return {
        title: "Add a Friend",
        description: `Someone wants to connect with you on Move2BFit (User ID: ${id}).`,
      };
    case "article":
      return {
        title: "Read Article",
        description: `Check out this article on Move2BFit.`,
      };
    default:
      return {
        title: "Open on Your Phone",
        description: "This link works best in the Move2BFit mobile app.",
      };
  }
}

export default function DesktopLandingPage({ type, id, deepLink }: Props) {
  const content = getContent(type, id);

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
          borderRadius: 20,
          padding: "56px 48px",
          maxWidth: 560,
          width: "100%",
          textAlign: "center",
          boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
        }}
      >
        <div
          style={{
            fontWeight: 800,
            fontSize: 28,
            marginBottom: 20,
            color: "#4f46e5",
            letterSpacing: "-0.02em",
          }}
        >
          Move2BFit
        </div>

        <h1
          style={{
            fontSize: 32,
            fontWeight: 700,
            marginBottom: 12,
            letterSpacing: "-0.01em",
          }}
        >
          {content.title}
        </h1>

        <p
          style={{
            fontSize: 17,
            color: "#6b7280",
            marginBottom: 32,
            lineHeight: 1.6,
          }}
        >
          {content.description}
          <br />
          Scan the QR code or download the app to continue.
        </p>

        <div
          style={{
            margin: "28px 0",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <QRCodeSVG value={deepLink} size={200} />
        </div>

        <div
          style={{
            fontSize: 22,
            fontWeight: 700,
            color: "#1f2937",
            margin: "28px 0 8px",
            letterSpacing: "-0.01em",
          }}
        >
          Download Move2BFit
        </div>

        <div
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "center",
            marginTop: 16,
          }}
        >
          <a href={APP_STORE_URL}>
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="Download on the App Store"
              style={{ height: 52, margin: 6 }}
            />
          </a>
          <a href={PLAY_STORE_URL}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Get it on Google Play"
              style={{ height: 52, margin: 6 }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
