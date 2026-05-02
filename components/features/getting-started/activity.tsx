import SelectBox from '@/components/ui/select-box/select-box';
import styles from './activity.module.scss';
import Button from '@/components/ui/button/button';

type Props = {
  value: string;
  customValue: string;
  setValue: (value: string) => void;
  setCustomValue: (value: string) => void;
  setStep: () => void;
};

export default function Activity({
  value,
  setValue,
  customValue,
  setCustomValue,
  setStep,
}: Props) {
  return (
    <div className={`${styles.flex} fade-in-top`}>
      <div className={styles.header}>
        <h3>Que fais-tu ?</h3>
        <p className={styles.explain}>
          Ton activité permet d’adapter ton expérience.
        </p>
      </div>

      <SelectBox
        value={value}
        customValue={customValue}
        setCustomValue={setCustomValue}
        setValue={setValue}
        options={[
          {
            title: 'Santé',
            desc: 'Médecin, kiné, psychologue...',
            value: 'Santé',
          },
          {
            title: 'Beauté & bien-être',
            desc: 'Coiffure, esthétique, massage...',
            value: 'Beauté & bien-être',
          },
          {
            title: 'Conseil & business',
            desc: 'Consultant, commercial...',
            value: 'Conseil & business',
          },
        ]}
      />

      <Button style="primary" label="Continuer" onClick={setStep} />
    </div>
  );
}
