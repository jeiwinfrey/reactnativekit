"use client";

import { cn } from "@/lib/utils";
import { ReactNode, useState } from "react";
import { Skeleton } from "./skeleton";

interface IPhoneFrameProps {
  className?: string;
  children?: ReactNode;
  screenName?: string;
}

export function IPhoneFrame({ 
  className, 
  children,
  screenName = "Screen"
}: IPhoneFrameProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "overflow-hidden relative group",
        className
      )}
      style={{
        aspectRatio: "9/19.5",
        borderRadius: "36px"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Show skeleton if no children, otherwise show content */}
      {children ? (
        children
      ) : (
        <Skeleton className="h-full w-full rounded-none" />
      )}
      
      {/* Dim overlay on hover */}
      <div
        className={cn(
          "absolute inset-0 bg-black/20 transition-opacity duration-300 z-[5]",
          isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      />
      
      {/* iOS-style liquid glass pill that appears on hover */}
      <div
        className={cn(
          "absolute bottom-4 left-4 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 z-10",
          "backdrop-blur-xl bg-white/20 border border-white/30",
          "shadow-lg shadow-black/20",
          "text-white",
          isHovered ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-2 scale-95 pointer-events-none"
        )}
        style={{
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
        }}
      >
        {screenName}
      </div>
    </div>
  );
}
