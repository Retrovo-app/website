import Image from 'next/image';
import styles from './back.module.scss';

type Props = {
  onBack: () => void;
};

export default function Back({ onBack }: Props) {
  return (
    <div className={styles.back} onClick={onBack}>
      <Image
        src={'/assets/icon/back.svg'}
        alt="Retour"
        width={20}
        height={16}
      />
    </div>
  );
}
