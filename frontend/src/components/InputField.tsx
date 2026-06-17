interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function InputField({ type, id, name, placeholder, className, required, onChange }: InputProps) {
  return (
    <>
      <input
        type={type ?? 'text'}
        id={id}
        name={name}
        placeholder={placeholder}
        className={`w-full rounded-lg border border-neutral-300 dark:border-gray-700 dark:bg-gray-800 px-4 py-1.5 outline-none focus:border-blue-500 ${className}`}
        required={required}
        onChange={onChange}
      />
    </>
  );
}
