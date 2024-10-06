type ButtonProps = {
  children: React.ReactNode;
};

export default function Button({ children }: ButtonProps) {
  return (
    <button
      type="button"
      className="text-white bg-[#4368E0] hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 focus:outline-none"
    >
      {children}
    </button>
  );
}
