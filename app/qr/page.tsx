"use client";

import { QRCodeSVG } from "qrcode.react";

// Change this URL when you host the site
const SITE_URL = "https://mayraaaaaa.netlify.app";

export default function QRPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-100 to-pink-200 p-8">
      <h1
        className="text-3xl md:text-4xl font-bold text-pink-700 mb-8 text-center"
        style={{ fontFamily: "var(--font-dancing)" }}
      >
        Scan de QR code!
      </h1>

      <div className="bg-white p-6 rounded-3xl shadow-xl border-4 border-pink-300">
        <QRCodeSVG
          value={SITE_URL}
          size={256}
          bgColor="#ffffff"
          fgColor="#e91e63"
          level="H"
          includeMargin={true}
        />
      </div>

      <p
        className="text-pink-600 mt-6 text-lg text-center"
        style={{ fontFamily: "var(--font-quicksand)" }}
      >
        {SITE_URL}
      </p>

      <p
        className="text-pink-400 mt-4 text-sm text-center"
        style={{ fontFamily: "var(--font-quicksand)" }}
      >
        Tip: Verander SITE_URL in app/qr/page.tsx wanneer je de site host!
      </p>
    </div>
  );
}
