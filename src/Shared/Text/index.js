import './index.scss';

const Text = ({
  id,
  level = '4',
  children,
  onClick = () => null,
  textBold = '',
}) => (
  <span id={id} className={`level-${level} ${textBold}`} onClick={onClick}>
    {children}
  </span>
);

export default Text;
