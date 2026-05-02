import styles from './input.module.scss';

type Props = {
  value: string;
  label?: string;
  error?: string;
  type: string;
  onChange: (e: string) => void;
  placeholder?: string;
  autofocus?: boolean;
};

export default function Input({
  value,
  label,
  error,
  type,
  onChange,
  placeholder,
  autofocus,
}: Props) {
  const handleChange = (e: { target: { value: string } }) => {
    onChange(e.target.value);
  };

  return (
    <div className={styles.flex}>
      {label && <label className={styles.label}>{label}</label>}
      <input
        value={value}
        className={`${styles.input} ${error ? styles.input_error : ''}`}
        onChange={handleChange}
        type={type}
        placeholder={placeholder}
        autoFocus={autofocus}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
}
