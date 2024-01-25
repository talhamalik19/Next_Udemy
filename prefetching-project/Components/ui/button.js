import classes from './button.module.css';
import Link from 'next/link';

function Button(props) {
  if (props.href) {
    return (
      <Link href={props.href} className={classes.btn}>
        {props.children}
      </Link>
    );
  }

  return (
    <button className={classes.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;