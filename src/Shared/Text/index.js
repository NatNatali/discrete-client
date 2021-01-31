import './index.scss';

const Text = ({ level = '4', children, onClick = () => null }) => (
  <span className={`level-${level}`} onClick={onClick}>
    {children}
  </span>
);

export default Text;
