"use client";

import {
  House,
  CircleDollarSign,
  Grid2x2,
  MessageCircle,
} from "lucide-react";

import { useEffect, useState } from "react";

export default function MobileNav() {

  const [show, setShow] = useState(true);

  useEffect(() => {

    let lastScroll = 0;

    const handleScroll = () => {

      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll) {
        setShow(false);
      } else {
        setShow(true);
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  return (
    <div
      className={`
        md:hidden
        fixed
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
        transition-all
        duration-300

        ${show ? "bottom-4 opacity-100" : "-bottom-32 opacity-0"}
      `}
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
        href="#contact"
        className="flex flex-col items-center text-gray-500 text-xs"
      >
        <MessageCircle size={22} />
        <span>Chat</span>
      </a>

    </div>
  );
}