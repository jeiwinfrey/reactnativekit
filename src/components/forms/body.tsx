import { IPhoneFrame } from "@/components/ui/iphone-frame";

export default function Body() {
  return (
    <div className="px-3 py-6">
      <div 
        className="gap-6 auto-rows-fr"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))"
        }}
      >
        {Array.from({ length: 24 }).map((_, index) => (
          <IPhoneFrame key={index} />
        ))}
      </div>
    </div>
  );
}