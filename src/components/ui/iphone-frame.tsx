"use client";

import { cn } from "@/lib/utils";
import { ReactNode, useState } from "react";
import { Skeleton } from "./skeleton";
import { useScreenHover } from "@/contexts/screen-hover-context";

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
  const { setHoveredScreen } = useScreenHover();

  const handleMouseEnter = () => {
    setIsHovered(true);
    setHoveredScreen(screenName);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setHoveredScreen(null);
  };

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
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
          isHovered ? "opacity-50" : "opacity-0 pointer-events-none"
        )}
      />
    </div>
  );
}
