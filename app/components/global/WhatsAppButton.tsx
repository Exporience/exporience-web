// app/components/WhatsAppButton.tsx
import React from "react";
import Image from "next/image";
export default function WhatsAppButton() {
  const phoneNumber = "6281519979718";
  const message = " ";
  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
      aria-label="Chat with us on WhatsApp"
    >
      <Image
        src="/images/whatsappicon.png"
        alt="WhatsApp Icon"
        width={24}
        height={24}
        className="w-6 h-6"
      />
    </a>
  );
}
