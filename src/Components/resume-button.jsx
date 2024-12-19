"use client";

import React from "react";

export function ResumeButton() {
  return (
    <a
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center text-white text-lg bg-black rounded-[10px] border-2 px-4 py-2 hover:bg-white hover:border-neutral-950 hover:text-black focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 transition"
    >
      <i className="fa-solid fa-download px-1"></i> Resume
    </a>
  );
}
