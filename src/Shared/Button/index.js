import './index.scss';

const Button = ({ children, onClick }) => (
  <button type='submit' name='submit' onClick={onClick} className='button-component'>
    {children}
  </button>
);

export default Button;
