import ButtonSvg from './svg/ButtonSvg';
import ButtonGradient from './svg/ButtonGradient';

const Button = ({ className, href, onClick, children, px, white, disabled }) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || 'px-7'
  } ${white ? 'text-n-8' : 'text-n-1'} ${className || ''}`;
  const spanClasses = 'relative z-10';

  const renderButton = () => (
    <button className={classes} type='submit' disabled={disabled} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
      <ButtonGradient />
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}> 
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
      <ButtonGradient />
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
