interface InputLabel {
  content: string;
  labelFor: string;
  className?: string;
}
export default function InputLabel({
  content,
  labelFor,
  className,
}: InputLabel) {
  return (
    <label
      htmlFor={labelFor}
      className={`block uppercase text-sm font-semibold tracking-widest cursor-pointer mb-2 ${className}`}
    >
      {content}
    </label>
  );
}
