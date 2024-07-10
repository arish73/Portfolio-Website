"use client";
import React from "react";
import { Button } from "./ui/moving-border";

export function ResumeButton() {
  return (
    <Button
      as="a"
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      borderRadius="10px"
      className="text-white text-lg bg-black rounded px-4 hover:bg-white hover:text-black focus:outline-none focus:ring-7 focus:ring-blue-600 focus:ring-opacity-50 transition delay-50"
    >
      <i className="fa-solid fa-download px-1"></i> Resume
    </Button>
  );
}
