export default function UnderlineAnimText({
  text,
  lineColor,
  textColor,
}: {
  text: string;
  lineColor: string;
  textColor: string;
}) {
  return (
    <div className="relative group cursor-pointer">
      <span className={textColor}>{text}</span>
      <span
        className={`absolute left-0 bottom-px w-full h-px ${lineColor} transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100 ease-in-out origin-left`}
      ></span>
    </div>
  );
}
