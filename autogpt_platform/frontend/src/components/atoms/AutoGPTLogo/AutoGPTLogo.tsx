import { useId } from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  hideText?: boolean;
  wordmarkColor?: string;
}

export function AutoGPTLogo({
  hideText = false,
  wordmarkColor = "#000030",
  className,
  ...props
}: Props) {
  return (
    <div 
      className={`flex items-center justify-center font-bold text-2xl whitespace-nowrap tracking-tight ${className || ""}`}
      style={{ color: wordmarkColor }}
      {...props}
    >
      <span className="text-[#4285F4]">Indra</span>&nbsp;
      <span className="text-[#9900FF]">Ai</span>
    </div>
  );
}
