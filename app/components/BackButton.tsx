"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

function BackButton() {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.back();
      }}
      className="mb-6 flex gap-1 text-red-500 select-none cursor-pointer"
    >
      <ArrowLeft />
      <span className="font-bold">Back</span>
    </div>
  );
}

export default BackButton;
