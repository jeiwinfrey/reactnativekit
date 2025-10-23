import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { Skeleton } from "./skeleton";

interface IPhoneFrameProps {
  className?: string;
  children?: ReactNode;
}

export function IPhoneFrame({ 
  className, 
  children
}: IPhoneFrameProps) {
  return (
    <div
      className={cn(
        "bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden relative",
        className
      )}
      style={{
        aspectRatio: "9/19.5",
        borderRadius: "48px"
      }}
    >
      {children ? children : <Skeleton className="h-full w-full rounded-none" />}
    </div>
  );
}

