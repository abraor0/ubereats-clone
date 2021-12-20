interface ButtonProps  {
  href?: string;
  type?: 'submit' | 'button';
  secondary?: boolean;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ children, href, type, secondary, className = '' }) => {
  let colors: string,
      defaultStyling: string;
  
  if (secondary) colors = 'bg-neutral-200 hover:bg-neutral-300 focus:bg-neutral-300 text-neutral-900';
  else colors = 'bg-black text-white hover:bg-black/80 focus:bg-black/80';

  defaultStyling = 'rounded-full px-3 text-sm py-2';

  if (!href) return (
    <button type={type || 'button'} className={`${defaultStyling} ${colors} ${className}`}>
      {children}
    </button>
  );
  
  return (
    <a href={href} className={`${defaultStyling} ${colors} ${className}`}>
      {children}
    </a>
  )
};

export default Button;