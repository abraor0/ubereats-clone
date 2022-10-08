const Wrapper: React.FC<propsWithClass> = ({ children, className = '' }) => (
  <div className={`px-3 md:px-10 ${className}`}>
    {children}
  </div>
);

export default Wrapper;