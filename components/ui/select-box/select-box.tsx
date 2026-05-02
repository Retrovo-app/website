import Input from '../input/input';
import SelectBoxCard from './select-box-card';
import styles from './select-box.module.scss';

type Option = {
  title: string;
  desc: string;
  value: string;
};

type Props = {
  options: Option[];
  value: string;
  customValue: string;
  setCustomValue: (value: string) => void;
  setValue: (value: string) => void;
};

export default function SelectBox({
  options,
  value,
  setValue,
  customValue,
  setCustomValue,
}: Props) {
  if (!options) return null;

  return (
    <div>
      <div className={styles.select_box}>
        {options.map((e, i) => {
          return (
            <SelectBoxCard
              key={i}
              title={e.title}
              desc={e.desc}
              value={e.value}
              setValue={setValue}
              currentValue={value}
            />
          );
        })}

        <SelectBoxCard
          title={'Autre'}
          value="other"
          currentValue={value}
          setValue={(e) => setValue(e)}
        />
      </div>

      {value === 'other' && (
        <div className={styles.input}>
          <Input
            label="Quelle est ton activité ? (facultatif)"
            type="text"
            value={customValue}
            onChange={setCustomValue}
            autofocus={true}
          />
        </div>
      )}
    </div>
  );
}
