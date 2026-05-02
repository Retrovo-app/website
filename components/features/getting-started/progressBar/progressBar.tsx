import styles from './progressBar.module.scss';

type Props = {
  step: string;
}

export default function progressBar({step}: Props) {
  return (
    <div className={styles.flex}>
      <div className={`${styles.progress} ${step === "activity" && styles.fill}`}></div>
      <div className={`${styles.progress} ${step === "availability" && styles.fill}`}></div>
      <div className={`${styles.progress} ${step === "other" && styles.fill}`}></div>
    </div>
  )
}