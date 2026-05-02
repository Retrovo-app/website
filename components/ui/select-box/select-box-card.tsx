import Image from 'next/image';
import styles from './select-box-card.module.scss';

type Props = {
  title?: string;
  desc?: string;
  value: string;
  setValue: (value: string) => void;
  currentValue?: string;
};

export default function SelectBoxCard({
  title,
  desc,
  value,
  setValue,
  currentValue,
}: Props) {
  return (
    <div
      className={`${styles.card} ${value === currentValue ? styles.card_active : null}`}
      onClick={() => setValue(value)}
    >
      {value === currentValue && (
        <Image
          className={styles.check}
          src={'/assets/icon/check.svg'}
          width={19}
          height={19}
          alt="check"
        />
      )}
      {title && <h4 className={styles.title}>{title}</h4>}
      {desc && <p className={styles.desc}>{desc}</p>}
    </div>
  );
}
