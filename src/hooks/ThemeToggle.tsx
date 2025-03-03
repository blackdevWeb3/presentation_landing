interface ThemeToggleProps {
  darkMode: boolean;
  onToggle: (value: boolean) => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  darkMode,
  onToggle,
}) => (
  <div className="hidden sm:flex border border-black dark:border-white rounded-sm overflow-hidden">
    <div
      className={`w-[20px] h-[24px] bg-black transition-opacity hover:cursor-pointer ${
        darkMode ? "opacity-100" : "opacity-50"
      }`}
      onClick={() => onToggle(true)}
    />
    <div
      className={`w-[20px] h-[24px] bg-white transition-opacity hover:cursor-pointer ${
        darkMode ? "opacity-50" : "opacity-100"
      }`}
      onClick={() => onToggle(false)}
    />
  </div>
);
