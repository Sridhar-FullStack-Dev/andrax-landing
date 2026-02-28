export default function UnderlineAnimText({
  text,
  lineColor,
  textColor,
}: {
  text: string;
  lineColor?: string;
  textColor?: string;
}) {
  return (
    <span className="relative inline-block group cursor-pointer">
      <span style={{ color: textColor }}>{text}</span>
      <span
        className="absolute left-0 bottom-0 w-full h-px transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100 ease-in-out origin-left"
        style={{ backgroundColor: lineColor }}
      ></span>
    </span>
  );
}
