"use client";

import { Button } from "@/components/ui/button";
import { TwitterIcon } from "@/assets/icons/twitter";
import { RNKitIcon } from "@/assets/icons/rnkit";
import { MailIcon } from "@/assets/icons/mail";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HugeiconsSmartPhone02 } from "@/assets/icons/phone";
import { HugeiconsFullScreen } from "@/assets/icons/boilerplate";

export default function Header() {


  return (
    <div className="flex justify-between items-center p-4">
      <div className="flex items-center gap-2">
        <RNKitIcon className="h-4 w-4" />
        <div> React Native Kit </div>
        <Tabs>
          <TabsList>
            <TabsTrigger value="home">
              <HugeiconsSmartPhone02 className="h-4 w-4" />
              Screens
            </TabsTrigger>
            <TabsTrigger value="boilerplates">
              <HugeiconsFullScreen className="h-4 w-4" />
              Boiler Plates
            </TabsTrigger>
          </TabsList>
        </Tabs>
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