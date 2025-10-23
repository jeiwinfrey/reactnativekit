'use client';

import Header from "@/components/forms/header";
import { Separator } from "@/components/ui/separator";
import Body from "@/components/forms/body";
import { CursorProvider, CursorFollow } from "@/components/ui/animated-cursor";
import { ScreenHoverProvider, useScreenHover } from "@/contexts/screen-hover-context";

function CursorFollowContent() {
  const { hoveredScreen } = useScreenHover();
  
  if (!hoveredScreen) return null;
  
  return (
    <div className="backdrop-blur-xl bg-white/20 border border-white/30 text-foreground px-3 py-1.5 rounded-full text-sm font-medium shadow-lg">
      {hoveredScreen}
    </div>
  );
}

export default function Home() {
  return (
    <ScreenHoverProvider>
      <CursorProvider>
        <div>
          <div className="fixed top-0 left-0 right-0 z-50 bg-background">
            <div className="mx-8">
              <Header />
              <Separator />
            </div>
          </div>
          <div className="mx-12 pt-20">
            <Body />
          </div>
        </div>
        
        <CursorFollow>
          <CursorFollowContent />
        </CursorFollow>
      </CursorProvider>
    </ScreenHoverProvider>
  );
}
