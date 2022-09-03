export default function InputField({
  label,
  name,
  id,
  type = "text",
  containerClass = "w-full block",
  ...inputProps
}) {
  return (
    <div className={containerClass}>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        className="mt-1 block w-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 appearance-none border p-2 text-base"
        {...inputProps}
      />
    </div>
  );
}
