interface Props extends React.HTMLAttributes<HTMLDivElement> {
  hideText?: boolean;
}

export function AutoGPTLogoWhite({
  hideText = false,
  className,
  ...props
}: Props) {
  return (
    <div 
      className={`flex items-center justify-center font-bold text-2xl whitespace-nowrap tracking-tight text-white ${className || ""}`}
      {...props}
    >
      <span>Indra Ai</span>
    </div>
  );
}
