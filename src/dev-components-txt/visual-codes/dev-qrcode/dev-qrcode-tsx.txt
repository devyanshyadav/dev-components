"use client";
import React, { useCallback, useRef, useState } from "react";
import QRCode from "react-qr-code";
import { toPng } from "html-to-image";
import { ImDownload } from "react-icons/im";

const DevQrCode = ({
  value,
  onValueChange,
}: {
  value: string;
  onValueChange?: (value: string) => void;
}) => {
  const [qrValue, setQrValue] = useState(value);
  const qrRef = useRef(null);

  const handleDownload = useCallback(() => {
    if (qrRef.current) {
      toPng(qrRef.current, { cacheBust: true })
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.download = "dev-qr-code.png";
          link.href = dataUrl;
          link.click();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [qrRef]);

  return (
    <div className="flex items-center justify-center gap-3 flex-col">
      <input
        className="bg-transparent text-center outline-none focus:outline-accentNeon p-1 px-2 rounded-md border border-accentNeon/50 text-sm text-accentNeon/80"
        id="QrCode"
        type="text"
        value={qrValue}
        onChange={(e) => {
          setQrValue(e.target.value);
          onValueChange?.(e.target.value);
        }}
      />
      <div className="relative rounded-lg overflow-hidden group">
        <QRCode
          ref={qrRef}
          size={100}
          fgColor="#06B6D4"
          bgColor="transparent"
          className="h-full rounded-md p-2 bg-white border border-accentNeon/30 w-40"
          value={qrValue}
        />

        <button
          className="absolute text-5xl grid place-items-center group-hover:opacity-100 opacity-0 inset-0 bg-accentNeon/50"
          onClick={handleDownload}
        >
          <ImDownload />
        </button>
      </div>
    </div>
  );
};

export default DevQrCode;
