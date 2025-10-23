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
        <Button variant="ghost" size="icon">
          <TwitterIcon className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <MailIcon className="h-4 w-4" />
        </Button>
      </div>
    </div>

  );
}