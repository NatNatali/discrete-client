import './index.scss';

const Button = ({ children, onClick, ...props }) => (
  <button
    onClick={onClick}
    className='button-component'
    {...props}
  >
    {children}
  </button>
);

export default Button;
