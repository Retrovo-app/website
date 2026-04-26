import styles from './input.module.scss';

type Props = {
  label: string;
  type: string;
  onChange: (e: string) => void;
  placeholder?: string;
};

export default function Input({ label, type, onChange, placeholder }: Props) {
  const handleChange = (e: { target: { value: string } }) => {
    onChange(e.target.value);
  };

  return (
    <div className={styles.flex}>
      <label className={styles.label}>{label}</label>
      <input
        className={styles.input}
        onChange={handleChange}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}
