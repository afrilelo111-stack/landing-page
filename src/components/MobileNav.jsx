"use client";

import {
  House,
  CircleDollarSign,
  Grid2x2,
  MessageCircle,
} from "lucide-react";

export default function MobileNav() {
  return (
    <div
      className="
        md:hidden
        fixed
        bottom-4
        left-1/2
        -translate-x-1/2
        z-50
        bg-white/90
        backdrop-blur-lg
        border
        border-gray-200
        shadow-xl
        rounded-3xl
        px-6
        py-4
        flex
        gap-8
      "
    >

      <a
        href="#"
        className="flex flex-col items-center text-blue-600 text-xs font-semibold"
      >
        <House size={22} />
        <span>Home</span>
      </a>

      <a
        href="#pricing"
        className="flex flex-col items-center text-gray-500 text-xs"
      >
        <CircleDollarSign size={22} />
        <span>Price</span>
      </a>

      <a
        href="#apps"
        className="flex flex-col items-center text-gray-500 text-xs"
      >
        <Grid2x2 size={22} />
        <span>Apps</span>
      </a>

      <a
        href="https://wa.me/6281234567890"
        target="_blank"
        className="flex flex-col items-center text-gray-500 text-xs"
      >
        <MessageCircle size={22} />
        <span>Chat</span>
      </a>

    </div>
  );
}