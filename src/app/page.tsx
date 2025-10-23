import Header from "@/components/forms/header";
import { Separator } from "@/components/ui/separator";
import Body from "@/components/forms/body";

export default function Home() {
  return (
  <div>
    <div className="fixed top-0 left-0 right-0 z-50 bg-background">
      <div className="mx-8">
        <Header />
        <Separator />
      </div>
    </div>
    <div className="mx-8 pt-20">
      <Body />
    </div>
  </div>
  );
}

