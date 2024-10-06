type TextInputProps = {
  placeholder?: string;
  required?: boolean;
  value?: string;
  onValueChange?: (value: string) => void;
};

export default function TextInput({
  placeholder = "",
  required = false,
  value = "",
  onValueChange,
}: TextInputProps) {
  return (
    <input
      value={value}
      onChange={(e) => {
        onValueChange && onValueChange(e.target.value);
      }}
      type="text"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      placeholder={placeholder}
      required={required}
    />
  );
}
