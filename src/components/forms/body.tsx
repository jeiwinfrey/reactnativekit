"use client";
import { IPhoneFrame } from "@/components/ui/iphone-frame";
import Image from "next/image";

export default function Body() {
  return (
    <div className="py-6">
      <div 
        className="gap-6 auto-rows-fr"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))"
        }}
      >
        {Array.from({ length: 24 }).map((_, index) => (
          <IPhoneFrame key={index} screenName={`Home Screen ${index + 1}`}>
            <Image
              src="/screens/iphone.png"
              alt="iPhone Screen"
              fill
              className="object-cover"
            />
          </IPhoneFrame>
        ))}
      </div>
    </div>
  );
}
