"use client";

import { Button } from "@/components/ui/button";
import { TwitterIcon } from "@/assets/icons/twitter";
import { RNKitIcon } from "@/assets/icons/rnkit";
import { MailIcon } from "@/assets/icons/mail";

export default function Header() {


  return (
    <div className="flex justify-between items-center p-4">
      <div className="flex items-center gap-2">
        <RNKitIcon className="h-4 w-4" />
        <div> React Native Kit </div>
      </div>

      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="icon" asChild>
          <a href="https://x.com/jeiwinfrey" target="_blank" rel="noopener noreferrer">
            <TwitterIcon className="h-4 w-4" />
          </a>
        </Button>
        <Button variant="ghost" size="icon" asChild>
          <a href="mailto:jeiwinfreyulep@outlook.com">
            <MailIcon className="h-4 w-4" />
          </a>
        </Button>
      </div>
    </div>

  );
}