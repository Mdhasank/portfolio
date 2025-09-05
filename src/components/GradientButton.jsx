import { HoverBorderGradient } from "./ui/HoverBorderGradient";

export function GradientButton() {
  return (
    <div className=" flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="bg-black text-[#f6f6f68e] flex items-center space-x-2">
        <span>Get In Touch</span>
      </HoverBorderGradient>
    </div>
  );
}