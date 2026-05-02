'use client';

import { useState } from 'react';
import styles from './getting-started.module.scss';
import Activity from '@/components/features/getting-started/activity';
import ProgressBar from '@/components/features/getting-started/progressBar/progressBar';

export default function Getting() {
  const [step, setStep] = useState<'activity' | 'availability'>('activity');

  // Activity
  const [activity, setActivity] = useState<string>('');
  const [customActivity, setCustomActivity] = useState<string>('');

  return (
    <div className={styles.container}>
      {step === 'activity' && (
        <Activity
          value={activity}
          setValue={(e) => setActivity(e)}
          customValue={customActivity}
          setCustomValue={setCustomActivity}
          setStep={() => setStep('availability')}
        />
      )}

      <ProgressBar step={step} />
    </div>
  );
}
