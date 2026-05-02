import Image from 'next/image';
import styles from './button.module.scss';

type Props = {
  label: string;
  logo?: string;
  onClick?: () => void;
  type?: 'submit' | 'button';
  style: 'primary' | 'secondary';
};

export default function Button({ label, logo, onClick, type, style }: Props) {
  return (
    <button
      className={`${styles.button} ${styles[style]}`}
      type={type}
      onClick={onClick}
    >
      {logo && <Image src={logo} width={20} height={20} alt={label} />}
      {label && (
        <span className={`${styles.text} ${styles.text}-${style}`}>
          {label}
        </span>
      )}
    </button>
  );
}
