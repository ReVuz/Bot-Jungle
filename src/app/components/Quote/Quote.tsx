"use client";
import { TextGenerateEffect } from "./text-generate-effect";

const words = `Robotics and artificial intelligence will change the way we live and work, offering immense potential to improve our world and transform the very fabric of society.- Unknown`;

export function Quote() {
  return <TextGenerateEffect words={words} />;
}
