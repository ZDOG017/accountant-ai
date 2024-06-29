// frontend/app/components/Button.tsx
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  [key: string]: any; // Добавьте это, чтобы поддерживать дополнительные пропсы
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', onClick, ...props }) => {
  const baseStyle = "px-6 py-2 rounded-md text-lg font-medium transition duration-300";
  const primaryStyle = "bg-blue-500 text-white hover:bg-blue-600";
  const secondaryStyle = "bg-gray-200 text-gray-700 hover:bg-gray-300";

  const style = variant === 'primary' ? primaryStyle : secondaryStyle;

  return (
    <button onClick={onClick} className={`${baseStyle} ${style}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
